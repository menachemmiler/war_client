import { IAttack } from "../../models/attack";
import { IResources } from "../../models/organiz";
import { useAppSelector } from "../../redux/store";
import Nav from "../Nav";

export default function AttackPage() {
  const { user: user } = useAppSelector((state) => state.user);

  return (
    <div className="attackpage">
      <Nav />
      <h1>AttackPage</h1>
      <h1>{`username: ${user?.username}`}</h1>
      <h2>{`organiz.name: ${user?.organiz.name}`}</h2>
      <h3>{`_id: ${user?._id}`}</h3>
      {/* table to all resorcees */}
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {user?.organiz.resources.map((resource: IResources) => (
            <tr key={resource.name}>
              <td>{resource.name}</td>
              <td>{resource.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
