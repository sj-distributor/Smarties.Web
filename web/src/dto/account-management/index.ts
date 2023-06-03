import { Dispatch, SetStateAction } from "react";

export interface IUserAccountResponse {
  id: string;
  userName: string;
  state: boolean;
  createDate: string;
}

export interface ICreateUserRequest {
  userName: string;
  password?: string;
  confirmPassword?: string;
}

export interface IUpdateUserInformationRequest extends ICreateUserRequest {
  id: string;
  originalPassword?: string;
  index?: number;
}

export interface IUserPublicFunctionProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export interface IChangeUserStateAndDeleteUserPublicProps
  extends IUserPublicFunctionProps {
  loading: boolean;
  updateUserInformation: IUpdateUserInformationRequest;
}

export interface ICreateUserProps extends IUserPublicFunctionProps {
  loading: boolean;
  isOpenAddUserModal: boolean;
  onConfirmCreateUserAccount: () => void;
  setAddUserName: Dispatch<SetStateAction<string>>;
  setAddUserPassword: Dispatch<SetStateAction<string>>;
  setConfirmUserPassword: Dispatch<SetStateAction<string>>;
}

export interface IChangeUserStateProps
  extends IChangeUserStateAndDeleteUserPublicProps {
  isOpenChangeStateModal: boolean;
}

export interface IUpdateUserInformationProps extends IUserPublicFunctionProps {
  loading: boolean;
  isOpenEditModal: boolean;
  updateUserInformation: IUpdateUserInformationRequest;
  onConfirmUpdateUserInformation: () => void;
  setUpdateUserInformation: React.Dispatch<
    React.SetStateAction<IUpdateUserInformationRequest>
  >;
}

export interface IDeleteUserProps
  extends IChangeUserStateAndDeleteUserPublicProps {
  isOpenDeleteModal: boolean;
}
