import React from "react";
import { Layout, Menu, MenuProps } from "antd";
import styles from "./TopHeader.module.scss";

const { Header } = Layout;

const items1: MenuProps["items"] = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
}));

export const TopHeader = () => {
  return (
    <div>
      <Header className={styles["header"]}>
        <div className="logo" />
        <Menu
          className={styles["Menu"]}
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items1}
        />
      </Header>
    </div>
  );
};
