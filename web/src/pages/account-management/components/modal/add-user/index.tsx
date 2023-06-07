import { UserAddOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";

import { ICreateUserProps } from "./props";

export const CreateUserModal = (props: ICreateUserProps) => {
  const {
    loading,
    isOpenAddUserModal,
    createUserInformation,
    onConfirm,
    onCancel,
    onConfirmCreateUserAccount,
    setCreateUserInformation,
  } = props;

  return (
    <Modal
      width={420}
      closable={false}
      onOk={onConfirm}
      onCancel={onCancel}
      open={isOpenAddUserModal}
      title={
        <div className="flex items-center ">
          <UserAddOutlined />
          <div className="ml-[.375rem]">添加用户</div>
        </div>
      }
      footer={[
        <Button
          key="back"
          onClick={onCancel}
          className="hover:bg-[#fff] font-medium"
        >
          取消
        </Button>,
        <Button
          key="submit"
          type="primary"
          loading={loading}
          onClick={onConfirmCreateUserAccount}
          className="font-medium"
        >
          确定
        </Button>,
      ]}
    >
      <form>
        <div className="my-[2rem]">
          <div className="text-[.875rem] mb-[.5rem] font-medium">用户名</div>
          <Input
            allowClear
            size="large"
            autoComplete="false"
            placeholder="请输入用户名"
            className="text-[.875rem] py-[.6rem]"
            value={createUserInformation.userName}
            onChange={(event) => {
              setCreateUserInformation((preValue) => {
                return { ...preValue, userName: event.target.value };
              });
            }}
          />
        </div>
        <div className="my-[2rem]">
          <div className="text-[.875rem] mb-[.5rem] font-medium">密码</div>
          <Input.Password
            allowClear
            size="large"
            placeholder="请输入密码"
            autoComplete="new-password"
            className="text-[.875rem] py-[.6rem]"
            value={createUserInformation.password}
            onChange={(event) => {
              setCreateUserInformation((preValue) => {
                return { ...preValue, password: event.target.value };
              });
            }}
          />
        </div>
        <div className="my-[2rem]">
          <div className="text-[.875rem] mb-[.5rem] font-medium">确认密码</div>
          <Input.Password
            allowClear
            size="large"
            placeholder="请再次输入密码"
            autoComplete="new-password"
            className="text-[.875rem] py-[.6rem]"
            value={createUserInformation.confirmPassword}
            onChange={(event) => {
              setCreateUserInformation((preValue) => {
                return { ...preValue, confirmPassword: event.target.value };
              });
            }}
          />
        </div>
      </form>
    </Modal>
  );
};
