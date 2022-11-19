import "./App.css";

function App() {
  return (
    <>
      <header>
        <div className="content-wrapper">
          <h1>Welcome to the JSHeroes Bootcamp!</h1>
        </div>
        <img className="bear" src="/js-heroes-bear.png" />
      </header>

      <main>
        <form className="search-form">
          <input className="input" />
          <button className="button">Searchblabla</button>
        </form>

        <ul className="repo-cards">
          <li className="repo-card">
            <span className="title">facebook/react</span>
            <span className="description">placeholder description</span>
            <section className="footer">
              <div>Stars: 500</div>
              <div>Forks: 100</div>
            </section>
          </li>

          <li className="repo-card">
            <span className="title">vuejs/vue</span>
            <span className="description">placeholder description</span>
            <section className="footer">
              <div>Stars: 500</div>
              <div>Forks: 100</div>
            </section>
          </li>

          <li className="repo-card">
            <span className="title">sveltejs/svelte</span>
            <span className="description">placeholder description</span>
            <section className="footer">
              <div>Stars: 500</div>
              <div>Forks: 100</div>
            </section>
          </li>
        </ul>
      </main>
    </>
  );
}

export default App;
