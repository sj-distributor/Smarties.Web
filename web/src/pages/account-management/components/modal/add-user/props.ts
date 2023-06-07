import { Dispatch } from "react";

import { ICreateUserRequest } from "@/dto/account-management";

import { IUserCommonProps } from "../../props";

export interface ICreateUserProps extends IUserCommonProps {
  isOpenAddUserModal: boolean;
  createUserInformation: ICreateUserRequest;
  onConfirmCreateUserAccount: () => void;
  setCreateUserInformation: Dispatch<React.SetStateAction<ICreateUserRequest>>;
}
