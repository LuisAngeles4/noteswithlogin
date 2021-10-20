import React from "react";
import { Form, Icon, Input, Button, Layout } from "antd";
import "./Login.scss";
import { Content } from "antd/lib/layout/layout";

const LoginScreen = ({ signIn, status }) => (
  <div className="login">
    {status === "restored" && (
      <>
        <Layout style={{ height: "100vh" }}>
          <Content
            style={{
              padding: "0 50px",
              marginTop: "40",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <div
              style={{
                background: "#fff",
                padding: 24,
                height: 450,
                width: 400,
                textAlign: "center",
                flexDirection: "column",
                justifyContent: "center",
                display: "flex",
              }}
            >
              <Form className="login-form">
                <Form.Item>
                  <h1>Notes.com</h1>
                  <h3>Ingresa ahora con Google!</h3>
                </Form.Item>
                <Button
                  type="primary"
                  onClick={() => signIn()}
                  className="login-form-button"
                  style={{ marginRight: 10 }}
                >
                  Ingresa
                </Button>
              </Form>
            </div>
          </Content>
        </Layout>
      </>
    )}
  </div>
);

export default LoginScreen;
