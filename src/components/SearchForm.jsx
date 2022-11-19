import "./../App.css";

import { useRef } from "react";

function SearchForm(props) {
  const inputEl = useRef(null);

  //  const [myArray] = useState([]);

  const handleClick = (event) => {
    event.preventDefault();
    const name = inputEl.current;
    props.onSerch(name.value);
  };

  return (
    <form className="search-form" onClick={handleClick}>
      <input className="input" type="text" ref={inputEl} />
      <button className="button">Searchblabla</button>
    </form>
  );
}

export default SearchForm;
