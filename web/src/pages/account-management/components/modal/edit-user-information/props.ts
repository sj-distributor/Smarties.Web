import { IUpdateUserInformationRequest } from "@/dto/account-management";

import { IExcludeCreateUserPublicProps } from "../../props";

export interface IUpdateUserInformationProps
  extends IExcludeCreateUserPublicProps {
  isOpenEditModal: boolean;
  onConfirmUpdateUserInformation: () => void;
  setUpdateUserInformation: React.Dispatch<
    React.SetStateAction<IUpdateUserInformationRequest>
  >;
}
