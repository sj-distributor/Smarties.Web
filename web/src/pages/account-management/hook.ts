import { message } from "antd";
import { clone } from "ramda";
import { useState } from "react";

import {
  IUpdateUserInformationRequest,
  IUserAccountResponse,
} from "@/dto/account-management";

export const useAction = () => {
  const [userList, setUserList] = useState<IUserAccountResponse[]>([
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

  const [loading, setLoading] = useState<boolean>(false);

  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState<boolean>(false);

  const [isOpenChangeStateModal, setIsOpenChangeStateModal] =
    useState<boolean>(false);

  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const [addUserName, setAddUserName] = useState<string>("");

  const [addUserPassword, setAddUserPassword] = useState<string>("");

  const [confirmUserPassword, setConfirmUserPassword] = useState<string>("");

  const initUserInformation: IUpdateUserInformationRequest = {
    id: "",
    userName: "",
    originalPassword: "",
    password: "",
    confirmPassword: "",
    index: 0,
  };

  const [updateUserInformation, setUpdateUserInformation] =
    useState<IUpdateUserInformationRequest>(initUserInformation);

  const [messageApi, contextHolder] = message.useMessage();

  const prompt = (msg: string) => messageApi.info(msg);

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
    }
  };

  const onConfirm = () => {
    setLoading(true);

    if (isOpenChangeStateModal) {
      const newUserList = clone(userList);

      newUserList[updateUserInformation.index as number].state = false;
      setUserList(newUserList);
    }

    setTimeout(() => {
      setLoading(false);
      onCancel();
    }, 1000);
  };

  const onReset = () => {
    inputUserName !== "" && setInputUserName("");
    selectUserState !== null && setSelectUserState(null);
  };

  const onConfirmCreateUserAccount = () => {
    if (addUserName === "") {
      prompt("请输入用户名");
    } else if (addUserPassword === "") {
      prompt("请输入密码");
    } else if (confirmUserPassword === "") {
      prompt("请再次输入密码");
    } else if (addUserPassword !== confirmUserPassword) {
      prompt("两次密码不相同");
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        messageApi.success("创建成功");
        onCancel();
      }, 1000);
    }
  };

  const onConfirmUpdateUserInformation = () => {
    if (updateUserInformation.userName === "") {
      prompt("请输入用户名");
    } else if (updateUserInformation.originalPassword === "") {
      prompt("请输入的原密码");
    } else if (updateUserInformation.password === "") {
      prompt("请新密码");
    } else if (updateUserInformation.confirmPassword === "") {
      prompt("请再次输入新密码");
    } else if (
      updateUserInformation.password !== updateUserInformation.confirmPassword
    ) {
      prompt("两次密码不相同");
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        messageApi.success("更新成功");
        onCancel();
        setUpdateUserInformation(initUserInformation);
      }, 1000);
    }
  };

  return {
    userList,
    inputUserName,
    selectUserState,
    loading,
    isOpenChangeStateModal,
    isOpenAddUserModal,
    isOpenEditModal,
    isOpenDeleteModal,
    addUserName,
    addUserPassword,
    confirmUserPassword,
    updateUserInformation,
    contextHolder,
    initUserInformation,
    setUserList,
    setInputUserName,
    setSelectUserState,
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
    onConfirmCreateUserAccount,
    setUpdateUserInformation,
    onConfirmUpdateUserInformation,
  };
};
