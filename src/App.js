import { Header, Main } from "./components";
import React from "react";
import { ReactDOM } from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from "./pages/Home/home";
import FAQ from "./pages/FAQ/faq";
import NotFound from "./pages/NotFound/notFound";
import Orders from "./pages/Orders/orders";
import Contact from "./pages/Contact/contact";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path = "/" element = {<Home/>}></Route>
        <Route path = "/orders" element = {<Orders/>}></Route>
        <Route path = "/contact" element = {<Contact/>}></Route>
        <Route path = "/faq" element = {<FAQ/>}></Route>
        <Route path = "/*" element = {<NotFound/>}></Route>
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
