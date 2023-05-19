import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { Button, Input } from "antd";

import { useAction } from "./hook";

export const Login = () => {
  const { setLoginName, setLoginPassword, navigate } = useAction();

  const onInputLoginName = (value: string) => setLoginName(value);

  const onInputLoginPassword = (value: string) => setLoginPassword(value);

  return (
    <div className="w-full h-[100vh] flex justify-center items-center bg-[url(./assets/1.avif)] bg-cover">
      <div className="w-[30rem] h-[25rem] rounded-[1.25rem] overflow-hidden">
        <div className="bg-[#fff] h-[100%] p-[2rem] flex flex-col justify-center relative">
          <div className="font-semibold text-[0.75rem] absolute top-[2.1875rem]">
            欢迎登录!
          </div>
          <div className="p-[1.875rem_0_2.1875rem] font-semibold text-[1.375rem] text-center tracking-[.125rem]">
            SMARTIES管理系统
          </div>
          <form>
            <div className="text-[.8rem]">用户名</div>
            <Input
              placeholder="请输入用户名"
              size="large"
              className="m-[0.3rem_0_1rem] text-[0.8rem] py-[0.6rem]"
              onChange={(e) => onInputLoginName(e.target.value)}
              autoComplete="true"
            />
            <div className="text-[.8rem]">密码</div>
            <Input.Password
              placeholder="请输入密码"
              iconRender={(visible) =>
                visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
              }
              size="large"
              className="m-[0.3rem_0_2rem] text-[0.8rem] py-[0.6rem]"
              onChange={(e) => onInputLoginPassword(e.target.value)}
              autoComplete="false"
              visibilityToggle={false}
            />
            <Button
              className="w-full !bg-[#1677ff]"
              size="large"
              type="primary"
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
