import "./App.css";
import React from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.compoent";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchFiled: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(result => result.json())
      .then(users => this.setState({ monsters: users }));
  }
  handleChange = (e) => {
    this.setState({ searchFiled: e.target.value });
  }
  render() {
    const { monsters, searchFiled } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchFiled.toLowerCase())
    );
    return (
      <div>
      <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}
export default App;
