import React from "react";
import ParticlesBg from "particles-bg";
import { Form, Button, Input, message } from "antd";
import { Route } from "react-router-dom";

// import { UserOutlined, LockOutlined } from "@ant-design/icons";
import styles from "./SignIn.module.scss";
import { Link } from "react-router-dom";
export const SignIn = () => {
  let config = {
    num: [4, 7],
    rps: 0.1,
    radius: [5, 40],
    life: [1.5, 3],
    v: [2, 3],
    tha: [-40, 40],
    // body: "./img/icon.png", // Whether to render pictures
    // rotate: [0, 20],
    alpha: [0.6, 0],
    scale: [1, 0.1],
    position: "center", // all or center or {x:1,y:1,width:100,height:100}
    color: ["random", "#ff0000"],
    cross: "dead", // cross or bround
    random: 15, // or null,
    g: 5, // gravity
    // f: [2, -1], // force
    onParticleUpdate: (ctx: any, particle: any) => {
      ctx.beginPath();
      ctx.rect(
        particle.p.x,
        particle.p.y,
        particle.radius * 2,
        particle.radius * 2
      );
      ctx.fillStyle = particle.color;
      ctx.fill();
      ctx.closePath();
    },
  };
  return (
    <div>
      {" "}
      <div style={{ height: "100%", overflow: "hidden" }}>
        <ParticlesBg type="random" bg={true} config={config} />
        <div className={styles["formContainer"]}>
          <div className={styles["logintitle"]}>TASK-SignIn</div>
          <Form name="normal_login">
            <Form.Item
              name="username"
              rules={[
                { required: true, message: "Please input your Username!" },
              ]}
            >
              <Input
                // prefix={<UserOutlined className="site-form-item-icon" />}
                className={styles.input}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              rules={[
                { required: true, message: "Please input your Password!" },
              ]}
            >
              <Input
                // prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className={styles["login-form-button"]}
              >
                登录
              </Button>
            </Form.Item>
          </Form>
          <Link to="/enroll">
            <div className={styles.enroll}>
              未注册？<div>点击注册</div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};
