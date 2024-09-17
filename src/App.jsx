import "./App.css";

import { useState, useEffect } from "react";

import Header from "./components/Header";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";

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

function App() {
  const [cards, setCards] = useState([]);
  const [filterCarts, setfilterCarts] = useState(cards);

  useEffect(() => {
    console.log("blabla");

    fetch("https://api.github.com/search/repositories?q=react")
      .then((response) => response.json())
      .then((data) => {
        setCards(data.items);
      });
  }, []);

  return (
    <>
      <Header />

      <main>
        <SearchForm
          onSerch={(value) => {
            let result = cards.filter((val) => val.name.includes(value));
            setfilterCarts(result);
          }}
        />
        <ul className="repo-cards">
          {filterCarts.map(function (val, index) {
            return (
              <Card
                key={index}
                title={val.name}
                desc={val.description}
                stars={val.score}
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
