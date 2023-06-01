import { useState } from "react";

import { IUserAccount } from ".";

export const useAction = () => {
  const [userList, setUserList] = useState<IUserAccount[]>([
    {
      id: "false",
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

  const [loading, setLoading] = useState(false);

  const [open, setOpen] = useState(false);

  return {
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
  };
};
