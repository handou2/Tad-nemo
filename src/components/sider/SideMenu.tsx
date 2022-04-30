import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import styles from "./SideMenu.module.scss";
import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;
const menuList = [
  {
    key: "/home",
    title: "首页",
    icon: <VideoCameraOutlined />,
  },
  {
    key: "/home",
    title: "首页",
    icon: <VideoCameraOutlined />,
    children: [],
  },
];
export const SideMenu = () => {
  return (
    <div>
      <Sider width={200} className={styles["site-layout-background"]}>
        <Menu mode="inline" defaultSelectedKeys={["3"]}>
          <Menu.Item key="/home" icon={<VideoCameraOutlined />}>
            首页
          </Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            nav 2
          </Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
          </Menu.Item>
          <SubMenu key="sub4" icon={<UploadOutlined />} title="用户管理">
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
    </div>
  );
};
