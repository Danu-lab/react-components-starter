import "./../App.css";

function Card() {
  return (
          <li className="repo-card">
            <span className="title">facebook/react</span>
            <span className="description">placeholder description</span>
            <section className="footer">
              <div>Stars: 500</div>
              <div>Forks: 100</div>
            </section>
          </li>
  );
}

export default Card;
