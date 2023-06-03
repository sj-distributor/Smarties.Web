import { Button, Input } from "antd";

import { useAction } from "./hook";

export const Login = () => {
  const { setLoginName, setLoginPassword, navigate } = useAction();

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[url(./assets/1.avif)] bg-cover">
      <div className="w-[30rem] rounded-[1.25rem] overflow-hidden">
        <div className="bg-[#fff] h-[100%] p-[3rem_2rem] flex flex-col justify-center relative">
          <div className="font-semibold text-[.8125rem] absolute top-[2.1875rem]">
            欢迎登录!
          </div>
          <div className="p-[15px_0_40px] font-semibold text-[1.375rem]">
            SMARTIES 管理系统
          </div>
          <form>
            <div className="text-[.875rem] mb-[.5rem] font-medium">用户名</div>
            <Input
              placeholder="请输入用户名"
              size="large"
              className="m-[.3rem_0_1rem] text-[.875rem] py-[.6rem]"
              onChange={(event) => setLoginName(event.target.value)}
              autoComplete="false"
              allowClear
            />
            <div className="text-[.875rem] mb-[.5rem] font-medium">密码</div>
            <Input.Password
              placeholder="请输入密码"
              size="large"
              className="m-[.3rem_0_2rem] text-[.875rem] py-[.6rem]"
              onChange={(event) => setLoginPassword(event.target.value)}
              autoComplete="new-password"
              visibilityToggle={false}
              allowClear
            />
            <Button
              type="primary"
              className="w-full hover:opacity-80 !text-[white] font-medium"
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
