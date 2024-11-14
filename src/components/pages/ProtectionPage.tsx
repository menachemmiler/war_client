import { useEffect } from "react";
import { IResources } from "../../models/organiz";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import NavProtection from "../NavProtection";
import { useNavigate } from "react-router-dom";
import allMissile from "../../utils/allMissile";
import { socket } from "../../socket/io";
import { IAttack } from "../../models/attack";
import { getAllMyAttack, updateAttack } from "../../redux/slices/attackSlice";

export default function ProtectionPage() {
  const { user: user } = useAppSelector((state) => state.user);
  const { attack: allAttack } = useAppSelector((state) => state.attack);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!user?._id) {
      return navigate("/login");
    }
    // console.log(`attack-${user?.area}`);
    socket.on(`attack-${user?.area}`, (attack) => {
      console.log("יש התקפה לאיזור זה");
      console.log({ attack });
      dispatch(updateAttack(attack));
    });
    dispatch(getAllMyAttack());
  }, []);

  return (
    <div className="protectionpage">
      <NavProtection />
      <h1>ProtectionPage</h1>
      <h1>{`username: ${user?.username}`}</h1>
      <h2>{`organiz.name: ${user?.organiz.name}`}</h2>
      <h2>{`organiz.area: ${user?.area}`}</h2>
      <h3>{`_id: ${user?._id}`}</h3>
      <div className="table">
        <table>
          <caption>munitions</caption>
          <thead>
            <tr>
              <th>name</th>
              <th>amount</th>
              <th>time to hit</th>
            </tr>
          </thead>
          <tbody>
            {user?.organiz.resources.map((resource: IResources) => (
              <tr key={resource.name}>
                <td>{resource.name}</td>
                <td>{resource.amount}</td>
                <td>
                  {
                    allMissile.find((missile) => missile.name === resource.name)
                      ?.speed
                  }
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* show all attacks */}
      <div className="table">
        <table>
          <caption>התקפות על האזור</caption>
          <thead>
            <tr>
              <th>name</th>
              <th>time to hit</th>
              <th>status</th>
            </tr>
          </thead>
          <tbody>
            {allAttack?.map((attack) => (
              <tr key={attack._id}>
                <td>{attack.name}</td>
                <td>{attack.timeToHit}</td>
                <td>{attack.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
