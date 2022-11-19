import "./App.css";

import Header from "./components/Header";
import Card from "./components/Card";
import SearchForm from "./components/SearchForm";

function App() {
  let cards = [
    {
      name: "facebook/react",
      desc: "desc1",
      starts: 100,
      forks: 200,
    },
    {
      name: "vuejs/vue",
      desc: "desc2",
      starts: 100,
      forks: 200,
    },
    {
      name: "another/asdasd",
      desc: "desc3",
      starts: 100,
      forks: 200,
    },
  ];

  return (
    <>
      <Header />

      <main>
        <SearchForm />
        <ul className="repo-cards">
          <Card />
          <Card />
          <Card />
          <Card />
        </ul>
      </main>
    </>
  );
}

export default App;
