import {
  CheckOutlined,
  CloseOutlined,
  CloseSquareOutlined,
  DeleteOutlined,
  ExclamationCircleOutlined,
  FormOutlined,
  IdcardOutlined,
} from "@ant-design/icons";
import { Button, Input, Modal, Select, Switch, Table } from "antd";
import { clone } from "ramda";

import { useAction } from "./hook";

export interface IUserAccount {
  id: string;
  userName: string;
  state: boolean;
  createDate: string;
}

export const AccountManagement = () => {
  const {
    userList,
    inputUserName,
    selectUserState,
    selectUserInformation,
    loading,
    open,
    setUserList,
    setInputUserName,
    setSelectUserState,
    setSelectUserInformation,
    setLoading,
    setOpen,
  } = useAction();

  const onChangeInputUserName = (value: string) => {
    setInputUserName(value);
  };

  const onChangeSelectUserState = (state: boolean) => {
    setSelectUserState(state);
  };

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);

    setTimeout(() => {
      const newUserList = clone(userList);

      newUserList[selectUserInformation.index].state = false;
      setUserList(newUserList);
      setLoading(false);
      setOpen(false);
    }, 500);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  const onReset = () => {
    inputUserName !== "" && setInputUserName("");
    selectUserState !== null && setSelectUserState(null);
  };

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
            <div className="max-w-max p-[2px_5px] bg-[#66ee71] text-[#fff] rounded-[5px] font-bold">
              正在使用
            </div>
          );
        } else {
          return (
            <div className="max-w-max bg-[#fbeedb] p-[2px_5px] text-orange-400 rounded-[5px] font-bold">
              已停用
            </div>
          );
        }
      },
    },
    {
      title: "操作",
      width: 260,
      render: (_: string, record: IUserAccount, index: number) => {
        return (
          <div className="flex items-center">
            <div className="flex items-center hover:text-[#1777ff] transition-[300] cursor-pointer mr-[12px]">
              <Switch
                checked={record.state}
                onClick={() => {
                  if (record.state) {
                    showModal();
                    setSelectUserInformation({
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
              className="flex items-center text-[#fff] pr-[0] pl-[8px] font-bold mr-[12px] h-[28px]"
            >
              <FormOutlined className="text-[16px]" />
              <div className="opacity-90 ml-[-1px]">【编辑】</div>
            </Button>
            <Button
              type="primary"
              className="flex items-center text-[#fff] pr-[2px] pl-[8px] font-bold h-[28px]"
              danger
            >
              <DeleteOutlined className="text-[16px]" />
              <div className="opacity-90 ml-[-3px]">【删除】</div>
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <>
      <div className="pb-[32px] flex justify-between items-center">
        <div className="flex items-center">
          <Input
            placeholder="请输入用户名"
            allowClear
            onChange={(event) => onChangeInputUserName(event.target.value)}
          />
          <Select
            placeholder="请选择状态"
            onChange={(state) => onChangeSelectUserState(state)}
            className="mx-[12px]"
            allowClear
            options={[
              { value: true, label: "正在使用" },
              { value: false, label: "已停用" },
            ]}
          />
          <Button type="primary" className="mr-[12px] font-bold">
            搜索
          </Button>
          <Button type="primary" className="font-bold" onClick={onReset}>
            重置
          </Button>
        </div>
        <Button type="primary" className="flex items-center px-[8px]">
          <IdcardOutlined className="text-[16px] text-[#fff] mr-[6px]" />
          <div className="font-bold">添加用户</div>
        </Button>
      </div>
      <Table
        dataSource={userList}
        columns={columns}
        bordered
        rowKey={(record) => {
          return record.id;
        }}
        scroll={{ y: 560 }}
        pagination={{
          pageSizeOptions: [10, 20],
          showQuickJumper: true,
          showTitle: true,
        }}
      />
      <Modal
        open={open}
        title={
          <div className="flex items-center">
            <ExclamationCircleOutlined className="text-[orange] text-[20px] mr-[8px]" />
            <div>停用</div>
          </div>
        }
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<CloseSquareOutlined className="text-[18px] mb-[-3px]" />}
        footer={[
          <Button key="back" onClick={handleCancel}>
            取消
          </Button>,
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            确认
          </Button>,
        ]}
      >
        <div>
          确认停用用户名为
          <span className="font-bold px-[6px]">
            {selectUserInformation.userName}
          </span>
          的账号吗？
        </div>
      </Modal>
    </>
  );
};
