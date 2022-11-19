import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";

function App() {
  let cards = [
    {
      name: "facebook/react",
      desc: "desc1",
      stars: 100,
      forks: 200,
    },
    {
      name: "vuejs/vue",
      desc: "desc2",
      stars: 100,
      forks: 200,
    },
    {
      name: "another/asdasd",
      desc: "desc3",
      stars: 100,
      forks: 200,
    },
  ];

  return (
    <>
      <Header />

      <main>
        <SearchForm />
        <ul className="repo-cards">
          {cards.map(function (val) {
            return (
              <Card
                title={val.name}
                desc={val.desc}
                stars={val.stars}
                forks={val.forks}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
}

export default App;
