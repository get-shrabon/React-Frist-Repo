export default function Actors({ actor }) {
  console.log(actor);
  return (
    <div className="actor__box">
      <h4>Name: {actor.name}</h4>
      <p>Age: {actor.age}</p>
      <p>UserID: {actor.id}</p>
    </div>
  );
}
