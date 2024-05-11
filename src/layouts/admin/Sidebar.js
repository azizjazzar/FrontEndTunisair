import React, { useEffect, useState } from "react";
import { Menu } from "antd";
import {
  DashboardOutlined,
  CopyOutlined,
  UserOutlined,
  MoneyCollectOutlined,
  RetweetOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import { useLocation, useNavigate } from "react-router-dom";
import './sideBar.css'

const { SubMenu } = Menu;

function Sidebar() {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate(item.key);
  };

  return (
    <div className="SideMenu">
      <Menu
        className="SideMenuVertical"
        mode="inline"
        defaultSelectedKeys={["/admin/dashboard"]}
        defaultOpenKeys={["sub1"]}
        selectedKeys={[selectedKeys]}
        onClick={handleMenuClick}
      >
        <Menu.Item key="/admin/dashboard" icon={<DashboardOutlined />} >
          Dashboard
        </Menu.Item>
        <SubMenu key="sub1" icon={<CopyOutlined />} title="Contrat">
          <Menu.Item key="/admin/listecontract">Liste des Contrats</Menu.Item>
          <Menu.Item key="/admin/contract">Nouveau Contrat</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="Client">
          <Menu.Item key="/admin/client">Liste des Clients</Menu.Item>
          <Menu.Item key="/admin/addclient">Nouveau Client</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<MoneyCollectOutlined />} title="Compte">
          <Menu.Item key="/admin/tablecompte">Les Mouvements</Menu.Item>
          <Menu.Item key="/admin/formcompte">Alimentation</Menu.Item>
        </SubMenu>
        <Menu.Item key="/admin/reclamation" icon={<RetweetOutlined />}>
          Réclamation
        </Menu.Item>
        <Menu.Item key="/admin/actualite" icon={<ShopOutlined />}>
          Actualités
        </Menu.Item>
      </Menu>
    </div>
  );
}

export default Sidebar;
