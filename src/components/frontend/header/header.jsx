import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Dropdown, Menu ,Button } from "antd";
import Chatbot from "../../IA/Chatbot/ChatBot";
import "../header/header.css";
import Cerveaux from "../../IA/Cervaux";
import { nav } from "../Data/data";

const Header = () => {
  const [navList, setNavList] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);
  const username = localStorage.getItem('username');

  const menu = (
    <Menu>
      <Menu.Item>
        <a href="/profil">Profil</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Another action</a>
      </Menu.Item>
      <Menu.Item>
        <a href="#">Something else here</a>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item>
        <a href="#">Dèconnexion</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <header>
      <div className="container flex">
        <div className="logo">
          <img src="https://static.vecteezy.com/system/resources/previews/000/619/645/original/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg" alt="Logo" />
        </div>
        <div className="nav">
          <ul className={navList ? "small" : "flex"}>
            {nav.map((item, index) => (
              <li key={index}>
                <Link to={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>
        </div>
       
        {userLoggedIn ? (
          <div className="user-info">
            
          </div>
        ) : (
          <div  >
           
            <Dropdown overlay={menu}>
              <button className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              {username}
              </button>
            </Dropdown>
          </div>
        )}
        <div className="toggle">
          <button onClick={() => setNavList(!navList)}>
            {navList ? <i className="fa fa-times"></i> : <i className="fa fa-bars"></i>}
          </button>
        </div>
      </div>
      <div className="fixed bottom-10 left-10">
      <Cerveaux/>
      </div>
      <div className="fixed bottom-10 right-10">
      <Chatbot/>
      </div>
    </header>
    
  );
};

export default Header;
