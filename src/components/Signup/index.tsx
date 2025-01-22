import React, { useState } from "react";
import { Avatar, Button, Checkbox, Divider, Form, Input } from "antd";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
// import { md5 } from "js-md5";
import "../Login/index.css";
import {
  FacebookOutlined,
  GoogleOutlined,
  WechatOutlined,
} from "@ant-design/icons";
import bg from "../../assets/bg.png";

function SignupPage() {
  const navigate = useNavigate();

  const handleSendCode = async (email: string) => {
    // if (!email || email == "") {
    //   message.error("请输入 Email");
    //   return;
    // }
    // try {
    //   const res = await TriggerEmailApi({
    //     email: email,
    //   });
    //   if (res) {
    //     message.success("Verification code sent");
    //   }
    // } catch (e: any) {
    //   message.error(e?.message);
    // }
  };

  const handleSubmit = async (values: any) => {
    // try {
    //   const res = await userSignup({
    //     name: values?.username,
    //     email: values?.email,
    //     password: md5(values?.password),
    //   });
    //   if (res) {
    //     message.success("Sign Up successfully");
    //     handleSendCode(values?.email);
    //     navigate("/verify", { state: { email: values?.email } });
    //   }
    // } catch (e: any) {
    //   message.error(e?.message ?? e?.toString());
    // }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="login-wrapper">
      <div className="login-wrapper-main">
        <div className="login-left">
          <div className="login-left-title-wrapper">
            <div className="login-left-header">
              <div className="login-left-header-top">
                Welcome!
                <br /> Please login account
              </div>
              <div className="login-left-header-desc">
                The platform is committed to providing you with updated and more
                <br /> comprehensive working data
              </div>
            </div>
            <img src={bg} />
          </div>
        </div>
        <div className="dlp">
          <div className="login-card-wrapper">
            <div className="login-card-header">
              <div className="login-card-title">Create account</div>
            </div>
            <Form
              name="basic"
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={handleSubmit}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                // label="Account"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input style={{ width: "90%" }} placeholder="Full Name" />
              </Form.Item>

              <Form.Item
                // label="Account"
                name="username"
                rules={[
                  { required: true, message: "Please input your email!" },
                ]}
              >
                <Input style={{ width: "90%" }} placeholder="Email Address" />
              </Form.Item>

              <Form.Item
                // label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ marginBottom: "10px" }}
              >
                <Input.Password
                  style={{ width: "90%" }}
                  placeholder="Password"
                />
              </Form.Item>

              <Form.Item label={null} style={{ marginTop: 30, width: "90%" }}>
                <Button
                  className="login-button"
                  type="primary"
                  htmlType="submit"
                  style={{
                    borderRadius: 10,
                    // padding: 20,
                    // fontSize: 17,
                    margin: "40px auto 0px 0",
                    width: "100%",
                  }}
                >
                  Next step
                </Button>
              </Form.Item>

              {/* <Form.Item
                name="remember"
                valuePropName="checked"
                label={null}
                style={{ marginBottom: "10px" }}
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item> */}
              {/* <div className="login-more-confirm">
                登录即代表同意
                <a href="/docs?tab=userpolicy">《用户协议》</a>和
                <a href="/docs?tab=privacy">《产品隐私协议》</a>
              </div> */}

              <div className="login-more">
                Already have an account?
                <a href="/login" style={{ marginLeft: 10 }}>
                  Log in
                </a>
              </div>

              <div className="login-google">
                <Divider className="login-divider">OR</Divider>
                <div className="option-container">
                  <Button className="btn">
                    <Avatar
                      style={{
                        marginRight: 10,
                        backgroundColor: "white",
                        color: "black",
                        // border: "1px solid #A5A5A5",
                        cursor: "hover",
                      }}
                      icon={<GoogleOutlined />}
                    />
                    Login with Google
                  </Button>

                  <Button className="btn">
                    <Avatar
                      shape="square"
                      style={{
                        marginRight: 10,
                        backgroundColor: "white",
                        color: "black",
                        // border: "1px solid #A5A5A5",
                        cursor: "hover",
                      }}
                      icon={<FacebookOutlined />}
                    />
                    Login with Facebook
                  </Button>
                </div>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
