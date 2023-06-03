import { ExclamationCircleOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";

import { IDeleteUserProps } from "@/dto/account-management";

export const DeleteUserModal = (props: IDeleteUserProps) => {
  const {
    loading,
    isOpenDeleteModal,
    updateUserInformation,
    onConfirm,
    onCancel,
  } = props;

  return (
    <Modal
      closable={false}
      onOk={onConfirm}
      onCancel={onCancel}
      open={isOpenDeleteModal}
      title={
        <div className="flex items-center">
          <ExclamationCircleOutlined className="text-[orange] text-[1.25rem] mr-[.5rem]" />
          <div>删除</div>
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
          onClick={onConfirm}
          className="font-medium"
        >
          确定
        </Button>,
      ]}
    >
      <div className="pt-[1rem]">
        确认停用用户名为
        <span className="font-semibold px-[.375rem]">
          {updateUserInformation.userName}
        </span>
        的账号吗？
      </div>
    </Modal>
  );
};
