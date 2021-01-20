import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import MyNavbar from "./components/my-navbar/mynavbar-component";
import MyCarousal from "./components/my-carousal/mycarousal-component";
import MyTitleMessage from "./components/title-typewriter/titletypewriter-component";


ReactDOM.render(
  <ThemeProvider theme = {theme}>
  <MyNavbar />
  <MyCarousal />
  <MyTitleMessage />
  
    <App />   
  </ThemeProvider>,
  document.getElementById('root')
);
