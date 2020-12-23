import React from "react";
import { Layout } from "antd";

import "./layout.css";

//Destructuring
const { Header, Footer } = Layout;

export default ({ children }) => (
  <Layout style={{ height: "100vh" }}>
    <Header>ToDo App</Header>
    {children}
    <Footer>React Redux App</Footer>
  </Layout>
);
