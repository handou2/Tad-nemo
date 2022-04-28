import React from "react";
import { HeaderPage } from "../components/header/HeaderPage";
import { SiderPage } from "../components/sider/SiderPage";
import { NewsRouter } from "../components/router/NewsRouter";
import "./SandBox.css";
import { Layout } from "antd";
const { Content } = Layout;
export const SandBox = () => {
  return (
    <div>
      <HeaderPage />
      <SiderPage />
      <Content className="site-layout-background">
        <NewsRouter></NewsRouter>
      </Content>
    </div>
  );
};
