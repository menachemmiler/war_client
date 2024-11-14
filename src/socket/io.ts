import { io } from "socket.io-client";

export const socket = io("http://localhost:2121"); // התחברות לשרת

// export default function Socket() {
//   const { user } = useAppSelector((state) => state);
//   // אם יש לו איזור זה אומר שהוא חייל
//   if (user.user?.area) {
//     socket.on(`${user.user?.area}-attack`, (data) => console.log(data));
//   }
//   socket.on("update", (data) => console.log(data));
// }
