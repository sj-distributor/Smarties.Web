import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Input, Modal } from "antd";

import { IUpdateUserInformationProps } from "./props";

export const EditUserInformationModal = (
  props: IUpdateUserInformationProps
) => {
  const {
    loading,
    isOpenEditModal,
    updateUserInformation,
    onConfirm,
    onCancel,
    onConfirmUpdateUserInformation,
    setUpdateUserInformation,
  } = props;

  const titleStyle = "text-[.875rem] font-medium mb-[.5rem]";

  return (
    <Modal
      width={420}
      closable={false}
      onOk={onConfirm}
      onCancel={onCancel}
      open={isOpenEditModal}
      title={
        <div className="flex items-center">
          <ExclamationCircleOutlined className="text-[orange] text-[1.25rem] mr-[.5rem]" />
          <div>更改用户账号信息</div>
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
          onClick={onConfirmUpdateUserInformation}
          className="font-medium"
        >
          确定
        </Button>,
      ]}
    >
      <form>
        <div className="my-[2rem]">
          <div className={titleStyle}>用户名</div>
          <Input
            size="large"
            autoComplete="false"
            autoCapitalize="false"
            className="text-[.875rem]"
            value={updateUserInformation.userName}
            onChange={(event) => {
              setUpdateUserInformation((preValue) => {
                return {
                  ...preValue,
                  userName: event.target.value,
                };
              });
            }}
          />
        </div>
        <div className="my-[2rem]">
          <div className={titleStyle}>原密码</div>
          <Input.Password
            size="large"
            placeholder="请输入原密码"
            className="text-[.875rem]"
            autoComplete="new-password"
            value={updateUserInformation.originalPassword}
            onChange={(event) => {
              setUpdateUserInformation((preValue) => {
                return { ...preValue, originalPassword: event.target.value };
              });
            }}
          />
        </div>
        <div className="my-[2rem]">
          <div className={titleStyle}>新密码</div>
          <Input.Password
            size="large"
            placeholder="请输入新密码"
            className="text-[.875rem]"
            autoComplete="new-password"
            value={updateUserInformation.password}
            onChange={(event) => {
              setUpdateUserInformation((preValue) => {
                return { ...preValue, password: event.target.value };
              });
            }}
          />
        </div>
        <div className="my-[2rem]">
          <div className={titleStyle}>确认新密码</div>
          <Input.Password
            size="large"
            className="text-[.875rem]"
            placeholder="请再次输入新密码"
            autoComplete="new-password"
            value={updateUserInformation.confirmPassword}
            onChange={(event) => {
              setUpdateUserInformation((preValue) => {
                return { ...preValue, confirmPassword: event.target.value };
              });
            }}
          />
        </div>
      </form>
    </Modal>
  );
};
