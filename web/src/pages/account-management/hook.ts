import { message } from "antd";
import { clone } from "ramda";
import { useState } from "react";

import {
  ICreateUserRequest,
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

  const initCreateUesrInformation: ICreateUserRequest = {
    userName: "",
    password: "",
    confirmPassword: "",
  };

  const initUpdateUserInformation: IUpdateUserInformationRequest = {
    id: "",
    userName: "",
    originalPassword: "",
    password: "",
    confirmPassword: "",
    index: 0,
  };

  const [inputUserName, setInputUserName] = useState<string>("");

  const [selectUserState, setSelectUserState] = useState<boolean | null>(null);

  const [loading, setLoading] = useState<boolean>(false);

  const [isOpenAddUserModal, setIsOpenAddUserModal] = useState<boolean>(false);

  const [isOpenChangeStateModal, setIsOpenChangeStateModal] =
    useState<boolean>(false);

  const [isOpenEditModal, setIsOpenEditModal] = useState<boolean>(false);

  const [isOpenDeleteModal, setIsOpenDeleteModal] = useState<boolean>(false);

  const [createUserInformation, setCreateUserInformation] =
    useState<ICreateUserRequest>(initUpdateUserInformation);

  const [updateUserInformation, setUpdateUserInformation] =
    useState<IUpdateUserInformationRequest>(initUpdateUserInformation);

  const [messageApi, contextHolder] = message.useMessage();

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

  const onConfirm = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      onCancel();

      if (isOpenChangeStateModal) {
        const newUserList = clone(userList);

        newUserList[updateUserInformation.index as number].state = false;
        setUserList(newUserList);
      }

      message.success("操作成功");
    }, 1000);
  };

  const onReset = () => {
    inputUserName !== "" && setInputUserName("");
    selectUserState !== null && setSelectUserState(null);
  };

  const onConfirmCreateUserAccount = () => {
    if (createUserInformation.userName === "") {
      messageApi.info("请输入用户名");
    } else if (createUserInformation.password === "") {
      messageApi.info("请输入密码");
    } else if (createUserInformation.confirmPassword === "") {
      messageApi.info("请再次输入密码");
    } else if (
      createUserInformation.password !== createUserInformation.confirmPassword
    ) {
      messageApi.info("两次密码不相同");
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        messageApi.success("创建成功");
        onCancel();
        setCreateUserInformation(initCreateUesrInformation);
      }, 1000);
    }
  };

  const onConfirmUpdateUserInformation = () => {
    if (updateUserInformation.userName === "") {
      messageApi.info("请输入用户名");
    } else if (updateUserInformation.originalPassword === "") {
      messageApi.info("请输入的原密码");
    } else if (updateUserInformation.password === "") {
      messageApi.info("请新密码");
    } else if (updateUserInformation.confirmPassword === "") {
      messageApi.info("请再次输入新密码");
    } else if (
      updateUserInformation.password !== updateUserInformation.confirmPassword
    ) {
      messageApi.info("两次密码不相同");
    } else {
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        messageApi.success("更新成功");
        onCancel();
        setUpdateUserInformation(initUpdateUserInformation);
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
    updateUserInformation,
    initUpdateUserInformation,
    createUserInformation,
    messageApi,
    contextHolder,
    setUserList,
    setInputUserName,
    setSelectUserState,
    setLoading,
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
  };
};
