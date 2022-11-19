import "./App.css";

import { useState } from "react";

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
  let [filterCarts, setfilterCarts] = useState(cards);

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
