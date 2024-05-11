import { BellFilled, MailOutlined, UserOutlined } from "@ant-design/icons";
import { Badge, Drawer, Image, List, Space, Typography, Menu, Dropdown } from "antd";
import React from "react";

const { SubMenu } = Menu;

function Navbar() {
  const menu = (
    <Menu>
      <Menu.Item key="profile">
        <a href="/admin/profile">Profil</a>
      </Menu.Item>
      <Menu.Item key="logout">
        <a href="/logout">Logout</a>
      </Menu.Item>
    </Menu>
  );

  return (
    <div className="AppHeader">
      <Image
        width={70}
        src="https://static.vecteezy.com/system/resources/previews/000/619/645/original/aircraft-airplane-airline-logo-label-journey-air-travel-airliner-symbol-vector-illustration.jpg"
      ></Image>
      <Typography.Title>Dashboard</Typography.Title>
      <Space>
        <Badge>
          <MailOutlined style={{ fontSize: 24 }} />
        </Badge>
        <Badge>
          <BellFilled style={{ fontSize: 24 }} />
        </Badge>
        <Dropdown overlay={menu} trigger={["click"]}>
          <a className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <Space >
            
              <UserOutlined style={{ fontSize: 25 }} />
            </Space>
          </a>
        </Dropdown>
      </Space>
      <Drawer title="Comments"></Drawer>
      <Drawer title="Notifications"></Drawer>
    </div>
  );
}

export default Navbar;
