import { useAppSelector } from "../../redux/store";

export default function AttackPage() {
  const { user: user } = useAppSelector((state) => state.user);

  return (
    <div className="userpage">
      <h1>AttackPage</h1>
      <h1>{`username: ${user?.username}`}</h1>
      <h2>{`organiz.name: ${user?.organiz.name}`}</h2>
      <h3>{`_id: ${user?._id}`}</h3>
    </div>
  );
}
