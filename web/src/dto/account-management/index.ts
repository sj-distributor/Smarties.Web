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
