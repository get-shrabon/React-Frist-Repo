/* Normal condition */
// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   }
//   return <li>Work On: {task}</li>;
// }

/* most useable ternary condition */
export default function Todo({ task, isDone }) {
  return (
    <li>
      {isDone ? "Finished: " : "Do it: "} {task}
    </li>
  );
}
