import "./style/index.scss";

import {
  CheckOutlined,
  CloseOutlined,
  DeleteOutlined,
  FormOutlined,
  ReloadOutlined,
  SearchOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
import { App, Button, Input, Select, Switch, Table } from "antd";

import { IUserAccountResponse } from "@/dto/account-management";

import { CreateUserModal } from "./components/modal/add-user";
import { ChangeUserStateModal } from "./components/modal/change-user-state";
import { DeleteUserModal } from "./components/modal/detele-user";
import { EditUserInformationModal } from "./components/modal/edit-user-information";
import { useAction } from "./hook";

export const AccountManagement = () => {
  const { message } = App.useApp();

  const {
    userList,
    loading,
    isOpenChangeStateModal,
    isOpenAddUserModal,
    isOpenEditModal,
    isOpenDeleteModal,
    updateUserInformation,
    createUserInformation,
    messageApi,
    contextHolder,
    setUserList,
    setInputUserName,
    setSelectUserState,
    setIsOpenChangeStateModal,
    setIsOpenAddUserModal,
    setIsOpenEditModal,
    setIsOpenDeleteModal,
    onConfirm,
    onCancel,
    onReset,
    onConfirmCreateUserAccount,
    setUpdateUserInformation,
    onConfirmUpdateUserInformation,
    setCreateUserInformation,
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
        return (
          <div
            className={`max-w-max p-[.125rem_.3125rem] font-semibold ${
              text ? "bg-[#00A854] text-[#fff]" : "bg-[#fbeedb] text-orange-400"
            }`}
          >
            {text ? "正在使用" : "已停用"}
          </div>
        );
      },
    },
    {
      title: "操作",
      width: 165,
      render: (_: string, record: IUserAccountResponse, index: number) => {
        return (
          <div className="flex items-center">
            <div className="flex items-center hover:text-[#1777ff] transition-[300] cursor-pointer mr-[.75rem]">
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

                    messageApi.success("操作成功");
                  }
                }}
                checkedChildren={<CheckOutlined />}
                unCheckedChildren={<CloseOutlined />}
              />
            </div>

            <Button
              type="primary"
              className="flex items-center text-[#fff] text-[1rem] px-[.375rem] font-medium mr-[.75rem] h-[1.75rem] rounded-none"
              onClick={() => {
                setUpdateUserInformation((preValue) => {
                  return {
                    ...preValue,
                    id: record.id,
                    userName: record.userName,
                  };
                });

                setIsOpenEditModal(true);
              }}
            >
              <FormOutlined />
            </Button>
            <Button
              danger
              type="primary"
              className="flex items-center text-[#fff] text-[1rem] px-[.375rem] font-medium h-[1.75rem] rounded-none"
              onClick={() => {
                setUpdateUserInformation({
                  id: record.id,
                  userName: record.userName,
                });

                setIsOpenDeleteModal(true);
              }}
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      {contextHolder}
      <div className="pb-[2rem] flex justify-between items-center">
        <div className="flex items-center">
          <Input
            allowClear
            autoFocus
            autoComplete="false"
            className="rounded-none"
            placeholder="请输入用户名"
            onChange={(event) => setInputUserName(event.target.value)}
          />
          <Select
            allowClear
            placeholder="请选择状态"
            className={`mx-[.75rem]`}
            onChange={(state) => setSelectUserState(state)}
            options={[
              { value: true, label: "正在使用" },
              { value: false, label: "已停用" },
            ]}
          />
          <Button
            type="primary"
            className="mr-[.75rem] font-semibold rounded-none flex items-center px-[.5rem]"
          >
            <SearchOutlined />
            <div
              className="ml-[.375rem] font-semibold"
              onClick={() => message.success("111")}
            >
              搜索
            </div>
          </Button>
          <Button
            type="primary"
            className="font-semibold rounded-none flex items-center px-[.5rem]"
            onClick={onReset}
          >
            <ReloadOutlined />
            <div className="ml-[.375rem] font-semibold">重置</div>
          </Button>
        </div>
        <Button
          type="primary"
          className="flex items-center px-[.5rem] rounded-none"
          onClick={() => setIsOpenAddUserModal(true)}
        >
          <UserAddOutlined />
          <div className="ml-[.375rem] font-semibold">添加用户</div>
        </Button>
      </div>
      <Table
        bordered
        columns={columns}
        scroll={{ y: 550 }}
        dataSource={userList}
        className="!rounded-none"
        rowKey={(record) => record.id}
        pagination={{
          pageSizeOptions: [10, 20, 30],
          showQuickJumper: true,
          showSizeChanger: true,
        }}
      />
      <CreateUserModal
        loading={loading}
        isOpenAddUserModal={isOpenAddUserModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        createUserInformation={createUserInformation}
        setCreateUserInformation={setCreateUserInformation}
        onConfirmCreateUserAccount={onConfirmCreateUserAccount}
      />
      <ChangeUserStateModal
        loading={loading}
        isOpenChangeStateModal={isOpenChangeStateModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        updateUserInformation={updateUserInformation}
      />
      <EditUserInformationModal
        loading={loading}
        isOpenEditModal={isOpenEditModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        updateUserInformation={updateUserInformation}
        setUpdateUserInformation={setUpdateUserInformation}
        onConfirmUpdateUserInformation={onConfirmUpdateUserInformation}
      />
      <DeleteUserModal
        loading={loading}
        isOpenDeleteModal={isOpenDeleteModal}
        onConfirm={onConfirm}
        onCancel={onCancel}
        updateUserInformation={updateUserInformation}
      />
    </>
  );
};
