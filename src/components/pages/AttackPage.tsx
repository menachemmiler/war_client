import { useEffect, useState } from "react";
import { IAttack } from "../../models/attack";
import { IResources } from "../../models/organiz";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import NavAttack from "../NavAttack";
import { useNavigate } from "react-router-dom";
import allMissile from "../../utils/allMissile";
import { socket } from "../../socket/io";

export default function AttackPage() {
  const { user: user } = useAppSelector((state) => state.user);
  const { data } = useAppSelector((state) => state.user.allAttack);
  const [area, setArea] = useState("");
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (!user?._id) {
      return navigate("/login");
    }
  }, []);

  const handleSendMissile = (missileNAme: string) => {
    if (!missileNAme || area == "") {
      alert("miising info!");
      return;
    }
    const attack: IAttack = {
      name: missileNAme,
      idAttacker: user?._id!,
      timeToHit: allMissile.find((missile) => missile.name === missileNAme)
        ?.speed!,
      area: area,
    };
    // dispatch(updateData())
    // console.log({ attack });

    socket.emit(`attack`, attack);
  };

  return (
    <div className="attackpage">
      <NavAttack setArea={setArea} />
      <h1>AttackPage</h1>
      <h1>{`username: ${user?.username}`}</h1>
      <h2>{`organiz.name: ${user?.organiz.name}`}</h2>
      <h3>{`_id: ${user?._id}`}</h3>
      {/* table to all resorcees */}
      <div className="table">
        <table>
          <caption> תחמושת במלאי</caption>
          <thead>
            <tr>
              <th>name</th>
              <th>amount</th>
              <th>time to hit</th>
              <th>send</th>
            </tr>
          </thead>
          <tbody>
            {user?.organiz.resources.map((resource: IResources) => (
              <tr key={resource.name}>
                <td>{resource.name}</td>
                <td>{resource.amount}</td>
                {/* to get the speed of the missile */}
                <td>
                  {
                    allMissile.find((missile) => missile.name === resource.name)
                      ?.speed
                  }
                </td>
                <td>
                  <button onClick={() => handleSendMissile(resource.name)}>
                    ⬆️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
