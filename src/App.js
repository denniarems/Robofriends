import React,{ Component} from 'react';
import Cardlist from "./Cardlist";
import {robots} from './robots';
import SearchBox from './SearchBox';

class App extends Component {

  constructor() {
    super()
    this.state={
      robot: robots,
      searchfield:''
    }
    
  }
  onSearchChange=(event) =>{ 
    this.setState({searchfield:event.target.value})

  }
    
  render(){
    const filterdRobots = this.state.robot.filter(robot =>{
      return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    } )
return(
  <div className='tc'>
    <h1>RoboFarm</h1>
    <SearchBox searchchange={this.onSearchChange}/>
    <Cardlist robots={filterdRobots}/>
  </div>
);
}}
export default App ;