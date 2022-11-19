import "./../App.css";

function Card(props) {
  return (
    <li className="repo-card">
      <span className="title">{props.title}</span>
      <span className="description">{props.desc}</span>
      <section className="footer">
        <div>Stars: {props.stars}</div>
        <div>Forks: {props.forks}</div>
      </section>
    </li>
  );
}

export default Card;
