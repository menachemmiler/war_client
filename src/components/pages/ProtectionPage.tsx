import { IResources } from "../../models/organiz";
import { useAppSelector } from "../../redux/store";

export default function ProtectionPage() {
  const { user: user } = useAppSelector((state) => state.user);

  return (
    <div className="protectionpage">
      <h1>ProtectionPage</h1>
      <h1>{`username: ${user?.username}`}</h1>
      <h2>{`organiz.name: ${user?.organiz.name}`}</h2>
      <h2>{`organiz.area: ${user?.area}`}</h2>
      <h3>{`_id: ${user?._id}`}</h3>
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
