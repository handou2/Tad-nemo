import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import styles from "./HeaderPage.module.scss";

const { Header } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export const HeaderPage = () => {
  return (
    <div>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
    </div>
  );
};
