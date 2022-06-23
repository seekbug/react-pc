import { Card, Button, Checkbox, Form, Input, message } from "antd";
import logo from "@/assets/logo.png";
import "./index.scss";
import React from "react";
import { useStore } from "@/store";
import { useNavigate } from "react-router-dom";

function Login() {
  const { loginStore } = useStore();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      await loginStore.setToken({
        mobile: values.username,
        code: values.password,
      });
      navigate("/", { replace: true });
      message.success("登录成功");
    } catch (e) {
      message.error(e.response?.data.message || "登录失败");
    }
  };

  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        <Form
          validateTrigger={["onBlur", "onChange"]}
          name="basic"
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            label="手机号"
            name="username"
            rules={[
              { required: true, message: "请输入手机号!" },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "请输入正确的手机号格式",
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="密码"
            name="password"
            rules={[
              { required: true, message: "请输入密码!" },
              {
                len: 6,
                message: "请输入6位密码",
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 4, span: 16 }}
          >
            <Checkbox>我已阅读并同意「用户协议」和「隐私条款」</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" block htmlType="submit">
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
