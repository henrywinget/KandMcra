import React, {Component} from 'react';
import { Switch, Route } from "react-router-dom";
import './App.css';

import NavBar from "./components/NavBar";

import Home from "./components/Home";
import Why from "./components/Why";
import AllHomes from "./components/AllHomes";
import Donate from "./components/Donate";
import Faq from "./components/FAQ";
import Contact from "./components/Contact";

import Footer from "./components/Footer";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }
	
	// componentDidMount() {
	// 	this.getPictures()
	// }
	//
	// getPictures = () => {
	// 	const items = [];
	// 	fetch('https://api.imgur.com/3/album/KSeRqc3/images', {
	// 		method: 'GET',
	// 		headers: new Headers({
	// 			'Authorization': 'Client-ID efcb5262c9d01bc',
	// 			'Content-Type': 'application/json'
	// 		}),
	// 	})
	// 		.then(res => res.json())
	// 		.then(json => {
	// 			json.data.forEach((img, i) => {
	// 				items.push({
    //                     src: img.link,
    //                     altText: '',
    //                     caption: ''
    //
    //                 })
	// 			});
	// 			this.setState({ items });
	// 		});
	//
	//
	// };
  
  render () {
  
  return (
      <div className="App">
          <NavBar/>
          <Switch>
	          <Route exact path="/">
                  <Home/>
		          {/* <AllHomes/> */}
		          {/* <Why/> */}
		          <Donate/>
		          {/* <Faq/> */}
		          <Contact/>
              </Route>
          </Switch>
	      <Footer/>
      </div>
    );
  }
}

export default App;
