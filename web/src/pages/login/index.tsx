import { Button, Input } from "antd";

import { useAction } from "./hook";

export const Login = () => {
  const { setLoginName, setLoginPassword, navigate } = useAction();

  const onInputLoginName = (value: string) => setLoginName(value);

  const onInputLoginPassword = (value: string) => setLoginPassword(value);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[#f6f6f6]">
      <div className="w-[800px] h-[500px] flex rounded-[20px] overflow-hidden">
        <div className="w-[50%] bg-[url('./assets/bg.png')] bg-cover" />
        <div className="w-[50%] bg-[#fff] p-[2rem] flex justify-center items-center">
          <div className="w-full">
            <div className="font-semibold text-[1.3rem]">欢迎回来!</div>
            <div className="p-[0.8rem_0_2rem] font-semibold text-[1rem]">
              Smarties Web Management System
            </div>
            <form action="">
              <div className="text-[0.8rem]">用户名</div>
              <Input
                placeholder="请输入用户名"
                size="large"
                className="m-[0.3rem_0_1rem] text-[0.8rem] py-[0.6rem]"
                allowClear
                onChange={(e) => onInputLoginName(e.target.value)}
                autoComplete="true"
              />
              <div className="text-[0.8rem]">密码</div>
              <Input.Password
                placeholder="请输入密码"
                size="large"
                className="m-[0.3rem_0_2rem] text-[0.8rem] py-[0.6rem]"
                allowClear
                onChange={(e) => onInputLoginPassword(e.target.value)}
                autoComplete="false"
              />
              <Button
                className="w-full !bg-[#1677ff] hover:bg-sky-700"
                size="large"
                type="primary"
                onClick={() => navigate("/test")}
              >
                登录
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
