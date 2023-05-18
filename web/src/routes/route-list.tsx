import { PieChartOutlined } from "@ant-design/icons";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { AccountManagement } from "@/pages/account-management";
import { RightsManagement } from "@/pages/rights-management";

interface IChildRouteDto {
  key: string;
  path: string;
  label: ReactElement;
  component: ReactElement;
}

export interface IRouteListDto {
  key: string;
  icon: ReactElement;
  path: string;
  label: ReactElement;
  component: ReactElement;
  children?: IChildRouteDto[];
}

export const RouteList: IRouteListDto[] = [
  {
    key: "accountmanagement",
    icon: <PieChartOutlined />,
    path: "/accountmanagement",
    label: <Link to={"/accountmanagement"}>账号管理</Link>,
    component: <AccountManagement />,
  },
  {
    key: "rightsmanagement",
    icon: <PieChartOutlined />,
    path: "/rightsmanagement",
    label: <Link to={"/rightsmanagement"}>权限管理</Link>,
    component: <RightsManagement />,
  },
];
