//import logo from './logo.svg';
import React, {useState, useEffect} from "react";
//import React Router Dom from "react-router-dom";
import './App.css';
import Header from "./components/Header";
import Recipe from "./components/Recipe";
import Axios from "axios";



function App() {
  
  const [search, setSearch] = useState("");
  
  const [recipe,setRecipe] = useState([]);

  const APP_ID = "dd6c011a";
  const APP_KEY = "2caaa7bfbbb858da52025fc612643542";
  useEffect( () => {
     getRecipe(); 
  }, []);

  const getRecipe = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    //console.log(res);
    setRecipe(res.data.hits);
  };

  const onInputChange = e =>{
    setSearch(e.target.value);
  };

  const onSearchClick = () =>{
     getRecipe();
  };
  return (
    <div className="App">
      <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick} />
      <div className="container">
      <Recipe recipe={recipe} />
      </div>
    </div>
  );
}

export default App;
