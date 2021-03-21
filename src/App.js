import './App.css';
import React, { Component } from 'react';
import CardList from "./components/card-list/card-list.component";
import { Search } from "./components/search/search.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchMonster: ""
    }

    this.searchTest = this.searchTest.bind(this);

  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  searchTest(e) {
    this.setState({searchMonster: e.target.value });
  }

  // its automatically binds
  searchTestArrowFunction = (e) => {
    this.setState({searchMonster: e.target.value });
  }
  render() {

    //Filter monster. 
    // .filter
    // destructuring does is pull the properties out of the object and set them to constant
    const { monsters, searchMonster } = this.state;
    const filteredMonsters = monsters
      .filter(monster => monster.name
        .toLowerCase()
        .includes(searchMonster
            .toLowerCase()));
        
    const search = (e) => {
      this.setState({searchMonster: e.target.value });
    }
    
    return (
      <div className="App">
        <h1>Monster Roldex</h1>
        <Search 
          placeholder="Search Monster" 
          handleChange={search} 
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    )
  }
}


export default App;
