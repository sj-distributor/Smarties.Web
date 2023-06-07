import { IUpdateUserInformationRequest } from "@/dto/account-management";

export interface IUserCommonProps {
  loading: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}

export interface IExcludeCreateUserPublicProps extends IUserCommonProps {
  updateUserInformation: IUpdateUserInformationRequest;
}
