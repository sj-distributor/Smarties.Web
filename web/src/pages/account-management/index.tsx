import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  FormOutlined,
  ReloadOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Select, Switch, Table } from "antd";

import { IUserAccountResponse, useAction } from "./hook";

export const AccountManagement = () => {
  const {
    userList,
    loading,
    isOpenChangeStateModal,
    isOpenAddUserModal,
    isOpenEditModal,
    isOpenDeleteModal,
    updateUserInformation,
    contextHolder,
    setUserList,
    setInputUserName,
    setSelectUserState,
    setIsOpenChangeStateModal,
    setIsOpenAddUserModal,
    setIsOpenEditModal,
    setIsOpenDeleteModal,
    setAddUserName,
    setAddUserPassword,
    setConfirmUserPassword,
    onConfirm,
    onCancel,
    onReset,
    onConfirmCreateUserAccount,
    setUpdateUserInformation,
    onConfirmUpdateUserInformation,
  } = useAction();

  const columns = [
    {
      title: "用户名",
      dataIndex: "userName",
      key: "userName",
    },
    {
      title: "开通时间",
      dataIndex: "createDate",
      key: "createDate",
    },
    {
      title: "状态",
      dataIndex: "state",
      key: "state",
      render: (text: number) => {
        if (text) {
          return (
            <div className="max-w-max p-[2px_5px] bg-[#66ee71] text-[#fff] font-semibold">
              正在使用
            </div>
          );
        } else {
          return (
            <div className="max-w-max bg-[#fbeedb] p-[2px_5px] text-orange-400  font-semibold">
              已停用
            </div>
          );
        }
      },
    },
    {
      title: "操作",
      width: 240,
      render: (_: string, record: IUserAccountResponse, index: number) => {
        return (
          <div className="flex items-center">
            <div className="flex items-center hover:text-[#1777ff] transition-[300] cursor-pointer mr-[12px]">
              <Switch
                checked={record.state}
                onClick={() => {
                  if (record.state) {
                    setIsOpenChangeStateModal(true);

                    setUpdateUserInformation({
                      id: record.id,
                      userName: record.userName,
                      index: index,
                    });
                  } else {
                    record.state = true;
                    setUserList([...userList]);
                  }
                }}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </div>
            <Button
              type="primary"
              className="flex items-center text-[#fff] px-[8px] font-medium mr-[12px] h-[28px] rounded-none"
              onClick={() => {
                setUpdateUserInformation((prevalue) => {
                  return {
                    ...prevalue,
                    id: record.id,
                    userName: record.userName,
                  };
                });

                setIsOpenEditModal(true);
              }}
            >
              <FormOutlined />
              <div className="ml-[6px]">编辑</div>
            </Button>
            <Button
              type="primary"
              className="flex items-center text-[#fff] px-[8px] font-medium h-[28px] rounded-none"
              danger
              onClick={() => {
                setUpdateUserInformation({
                  id: record.id,
                  userName: record.userName,
                });

                setIsOpenDeleteModal(true);
              }}
            >
              <DeleteOutlined />
              <div className="ml-[6px]">删除</div>
            </Button>
          </div>
        );
      },
    },
  ];

  const titleStyle = "text-[14px] font-medium mb-[8px]";

  return (
    <>
      {contextHolder}
      <div className="pb-[32px] flex justify-between items-center">
        <div className="flex items-center">
          <Input
            className="rounded-none"
            placeholder="请输入用户名"
            allowClear
            autoFocus
            autoComplete="false"
            onChange={(event) => setInputUserName(event.target.value)}
          />
          <Select
            placeholder="请选择状态"
            onChange={(state) => setSelectUserState(state)}
            className="mx-[12px] !rounded-none"
            allowClear
            options={[
              { value: true, label: "正在使用" },
              { value: false, label: "已停用" },
            ]}
          />
          <Button
            type="primary"
            className="mr-[12px] font-semibold rounded-none flex items-center px-[8px]"
          >
            <SearchOutlined />
            <div className="ml-[6px] font-semibold">搜索</div>
          </Button>
          <Button
            type="primary"
            className="font-semibold rounded-none flex items-center px-[8px]"
            onClick={onReset}
          >
            <ReloadOutlined />
            <div className="ml-[6px] font-semibold">重置</div>
          </Button>
        </div>
        <Button
          type="primary"
          className="flex items-center px-[8px] rounded-none"
          onClick={() => setIsOpenAddUserModal(true)}
        >
          <UserAddOutlined />
          <div className="ml-[6px] font-semibold">添加用户</div>
        </Button>
      </div>
      <Table
        className="!rounded-none"
        dataSource={userList}
        columns={columns}
        bordered
        rowKey={(record) => record.id}
        scroll={{ y: 550 }}
        pagination={{
          pageSizeOptions: [10, 20],
          showQuickJumper: true,
          showSizeChanger: true,
        }}
      />
      {/* 添加用户 */}
      <Modal
        width={420}
        open={isOpenAddUserModal}
        title={
          <div className="flex items-center ">
            <UserAddOutlined />
            <div className="ml-[6px]">添加用户</div>
          </div>
        }
        onOk={onConfirm}
        onCancel={onCancel}
        closable={false}
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
          <div className="my-[32px]">
            <div className="text-[14px] mb-[8px] font-medium">用户名</div>
            <Input
              placeholder="请输入用户名"
              size="large"
              className="text-[14px] py-[9.6px]"
              onChange={(event) => setAddUserName(event.target.value)}
              autoComplete="false"
              allowClear
            />
          </div>
          <div className="my-[32px]">
            <div className="text-[14px] mb-[8px] font-medium">密码</div>
            <Input.Password
              placeholder="请输入密码"
              size="large"
              className="text-[14px] py-[9.6px]"
              onChange={(event) => setAddUserPassword(event.target.value)}
              autoComplete="new-password"
              allowClear
            />
          </div>
          <div className="my-[32px]">
            <div className="text-[14px] mb-[8px] font-medium">确认密码</div>
            <Input.Password
              placeholder="请再次输入密码"
              size="large"
              className="text-[14px] py-[9.6px]"
              onChange={(event) => setConfirmUserPassword(event.target.value)}
              autoComplete="new-password"
              allowClear
            />
          </div>
        </form>
      </Modal>
      {/* 更改状态 */}
      <Modal
        open={isOpenChangeStateModal}
        title={
          <div className="flex items-center">
            <ExclamationCircleOutlined className="text-[orange] text-[20px] mr-[8px]" />
            <div>停用账号</div>
          </div>
        }
        onOk={onConfirm}
        onCancel={onCancel}
        closable={false}
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
        <div className="pt-[16px]">
          确认停用用户名为
          <span className="font-semibold px-[6px]">
            {updateUserInformation.userName}
          </span>
          的账号吗？
        </div>
      </Modal>
      {/* 编辑 */}
      <Modal
        width={420}
        open={isOpenEditModal}
        title={
          <div className="flex items-center">
            <ExclamationCircleOutlined className="text-[orange] text-[20px] mr-[8px]" />
            <div>更改用户账号信息</div>
          </div>
        }
        onOk={onConfirm}
        onCancel={onCancel}
        closable={false}
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
          <div className="my-[32px]">
            <div className={titleStyle}>用户名</div>
            <Input
              defaultValue={updateUserInformation.userName}
              size="large"
              className="text-[14px]"
              autoCapitalize="false"
              onChange={(event) => {
                setUpdateUserInformation((preValue) => {
                  return { ...preValue, userName: event.target.value };
                });
              }}
            />
          </div>
          <div className="my-[32px]">
            <div className={titleStyle}>原密码</div>
            <Input.Password
              placeholder="请输入原密码"
              size="large"
              className="text-[14px]"
              autoComplete="new-password"
              onChange={(event) => {
                setUpdateUserInformation((preValue) => {
                  return { ...preValue, originalPassword: event.target.value };
                });
              }}
            />
          </div>
          <div className="my-[32px]">
            <div className={titleStyle}>新密码</div>
            <Input.Password
              placeholder="请输入新密码"
              size="large"
              className="text-[14px]"
              autoComplete="new-password"
              onChange={(event) => {
                setUpdateUserInformation((preValue) => {
                  return { ...preValue, password: event.target.value };
                });
              }}
            />
          </div>
          <div className="my-[32px]">
            <div className={titleStyle}>确认新密码</div>
            <Input.Password
              placeholder="请再次输入新密码"
              size="large"
              className="text-[14px]"
              autoComplete="new-password"
              onChange={(event) => {
                setUpdateUserInformation((preValue) => {
                  return { ...preValue, confirmPassword: event.target.value };
                });
              }}
            />
          </div>
        </form>
      </Modal>
      {/* 删除 */}
      <Modal
        open={isOpenDeleteModal}
        title={
          <div className="flex items-center">
            <ExclamationCircleOutlined className="text-[orange] text-[20px] mr-[8px]" />
            <div>删除</div>
          </div>
        }
        onOk={onConfirm}
        onCancel={onCancel}
        closable={false}
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
        <div className="pt-[16px]">
          确认停用用户名为
          <span className="font-semibold px-[6px]">
            {updateUserInformation.userName}
          </span>
          的账号吗？
        </div>
      </Modal>
    </>
  );
};
