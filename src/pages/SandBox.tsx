import React from "react";
import { HomePage } from "../pages";
import { Route, Routes, Navigate } from "react-router-dom";
import { TopHeader } from "../components/header/TopHeader";
import { SideMenu } from "../components/sider/SideMenu";
import "./SandBox.css";
import { Layout } from "antd";
const { Content } = Layout;
export const SandBox = () => {
  return (
    <Layout>
      <TopHeader />
      <Layout>
        <SideMenu />
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              // padding: 24,
              marginTop: 20,
              marginLeft: 20,
              marginRight: 10,
              minHeight: 280,
            }}
          >
            <Routes>
              <Route path="/home" element={<HomePage />} />
              <Route path="*" element={<div>403 not found</div>} />
              {/* <Route path="/" element={<Navigate to="/home" />} />; */}
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};
