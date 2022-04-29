import React from "react";
import { TopHeader } from "../components/header/TopHeader";
import { SideMenu } from "../components/sider/SideMenu";
import "./SandBox.css";
import { Layout } from "antd";
const { Content } = Layout;
export const SandBox = () => {
  return (
    <div>
      <TopHeader />
      <SideMenu />
      <Content
        className="site-layout-background"
        style={{
          margin: "24px 36px",
          padding: 24,
          overflow: "auto",
          height: "100%",
        }}
      ></Content>
    </div>
  );
};
