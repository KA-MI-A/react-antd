import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Drawer from './page/Drawer';
import Button from './page/Button';
import Drop from './page/Drop';
import From from './page/From';
import Froms from './page/Froms';
import Menu from './page/Menu';
import Menus from './page/Menus';
import Checkbox from './page/Checkbox';
import Buttons from './page/Buttons';
import Bigbang from './page/Bigbang';
import Pagination from './page/Pagination';
import Layout from './page/Layout';
import reportWebVitals from './reportWebVitals';
// import Layout from 'antd/lib/layout/layout';

// From
ReactDOM.render(
  <React.StrictMode>
    {/* <Drawer /> */}
    {/* <Button /> */}
    {/* <Drop /> */}
    {/* <Froms /> */}
    {/* <From /> */}
    {/* <Menu /> */}
    {/* <Menus /> */}
    {/* <Checkbox /> */}
    {/* <Buttons /> */}
    {/* <Bigbang /> */}
    <Layout />
    {/* <Pagination /> */}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
