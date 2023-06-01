import { Button, Input } from "antd";

import { useAction } from "./hook";

export const Login = () => {
  const { setLoginName, setLoginPassword, navigate } = useAction();

  const onInputLoginName = (value: string) => setLoginName(value);

  const onInputLoginPassword = (value: string) => setLoginPassword(value);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[url(./assets/1.avif)] bg-cover">
      <div className="w-[30rem] rounded-[1.25rem] overflow-hidden">
        <div className="bg-[#fff] h-[100%] p-[3rem_2rem] flex flex-col justify-center relative">
          <div className="font-semibold text-[.8125rem] absolute top-[2.1875rem]">
            欢迎登录!
          </div>
          <div className="p-[1.875rem_0_2.1875rem] font-semibold text-[1.375rem]">
            SMARTIES 管理系统
          </div>
          <form>
            <div className="text-[.8rem]">用户名</div>
            <Input
              placeholder="请输入用户名"
              size="large"
              className="m-[.3rem_0_1rem] text-[.8rem] py-[.6rem]"
              onChange={(event) => onInputLoginName(event.target.value)}
              autoComplete="true"
            />
            <div className="text-[.8rem]">密码</div>
            <Input.Password
              placeholder="请输入密码"
              size="large"
              className="m-[.3rem_0_2rem] text-[.8rem] py-[.6rem]"
              onChange={(event) => onInputLoginPassword(event.target.value)}
              autoComplete="false"
              visibilityToggle={false}
            />
            <Button
              className="w-full bg-gradient-to-tr from-[#74bfc8] to-[#5c5cb4] hover:opacity-80 !text-[white]"
              size="large"
              onClick={() => navigate("/accountManagement")}
            >
              登录
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
