import { message } from "antd";
import { clone } from "ramda";
import { useEffect, useState } from "react";

import { IUserAccount } from ".";

export const useAction = () => {
  const [userList, setUserList] = useState<IUserAccount[]>([
    {
      id: "1",
      userName: "testEnable1",
      state: true,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "2",
      userName: "testEnable2",
      state: true,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "3",
      userName: "testEnable3",
      state: true,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "4",
      userName: "testEnable4",
      state: true,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "5",
      userName: "testEnable5",
      state: true,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "6",
      userName: "testEnable6",
      state: true,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "7",
      userName: "testDisenable1",
      state: false,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "8",
      userName: "testDisenable2",
      state: false,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "9",
      userName: "testDisenable3",
      state: false,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "10",
      userName: "testDisenable4",
      state: false,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "11",
      userName: "testDisenable5",
      state: false,
      createDate: "2023-05-31 14:00",
    },
    {
      id: "12",
      userName: "testDisenable6",
      state: false,
      createDate: "2023-05-31 14:00",
    },
  ]);

  const [inputUserName, setInputUserName] = useState<string>("");

  const [selectUserState, setSelectUserState] = useState<boolean | null>(null);

  const [selectUserInformation, setSelectUserInformation] = useState<{
    userName: string;
    index: number;
  }>({
    userName: "",
    index: 0,
  });

  const [loading, setLoading] = useState<boolean>(false);

  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState<boolean>(false);

  const [isOpenChangeStateModal, setIsOpenChangeStateModal] =
    useState<boolean>(false);

  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const [addUserName, setAddUserName] = useState<string>("");

  const [addUserPassword, setAddUserPassword] = useState<string>("");

  const [confirmUserPassword, setConfirmUserPassword] = useState<string>("");

  const [editUserInformation, setEditUserInformation] = useState<IUserAccount>({
    id: "",
    userName: "",
    state: true,
    createDate: "",
  });

  const onConfirm = () => {
    setLoading(true);

    if (isOpenChangeStateModal) {
      const newUserList = clone(userList);

      newUserList[selectUserInformation.index].state = false;
      setUserList(newUserList);
    }

    setTimeout(() => {
      setLoading(false);
      onCancel();
    }, 500);
  };

  const onCancel = () => {
    switch (true) {
      case isOpenAddUserModal:
        return setIsOpenAddUserModal(false);
      case isOpenChangeStateModal:
        return setIsOpenChangeStateModal(false);
      case isOpenEditModal:
        return setIsOpenEditModal(false);
      case isOpenDeleteModal:
        return setIsOpenDeleteModal(false);
      default:
        break;
    }
  };

  const onReset = () => {
    inputUserName !== "" && setInputUserName("");
    selectUserState !== null && setSelectUserState(null);
  };

  const onCreateUserAccount = () => {
    if (addUserName === "") {
      message.info("请输入用户名");
    } else if (addUserPassword === "") {
      message.info("请输入密码");
    } else if (confirmUserPassword === "") {
      message.info("请再次输入密码");
    } else if (addUserPassword !== confirmUserPassword) {
      message.info("二次密码不相同");
    } else {
      message.success("创建成功");
      setIsOpenAddUserModal(false);
    }
  };

  return {
    userList,
    inputUserName,
    selectUserState,
    selectUserInformation,
    loading,
    isOpenChangeStateModal,
    isOpenAddUserModal,
    isOpenEditModal,
    isOpenDeleteModal,
    addUserName,
    addUserPassword,
    confirmUserPassword,
    editUserInformation,
    setUserList,
    setInputUserName,
    setSelectUserState,
    setSelectUserInformation,
    setLoading,
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
    onCreateUserAccount,
    setEditUserInformation,
  };
};
