import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { BrowserRouter, Route,Router,Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Header from "./Components/Header";
import { createContext, useEffect, useState } from "react";
import axios from 'axios';

const MyContext= createContext();
function App() {
  // const [counntryList,setCountryList]=useState([]);
  // useEffect(()=>{
  //   getCountry("https://countriesnow.space/api/v0.1/countries/");
  // },[]);
  // const getCountry=async(url)=>{
  //   const responsive=await axios.get(url).then((res)=>{
  //     setCountryList(res.data.data);
  //     console.log(res.data.data)

  //   })

  // }
  // const values={
  //   countryList
      
  // }
  return (
    
    <BrowserRouter>
    {/* <MyContext.Provider value={values}> */}

    <Header />
    <Routes>
      <Route path="/" exact={true} element={<Home />} />

      
    </Routes>
    {/* </MyContext.Provider> */}
    </BrowserRouter>
   
    
  );
}

export default App;
// export {MyContext};
