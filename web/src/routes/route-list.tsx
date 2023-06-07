import { PieChartOutlined, UsergroupAddOutlined } from "@ant-design/icons";
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
    key: "accountManagement",
    icon: <UsergroupAddOutlined />,
    path: "/accountManagement",
    label: <Link to={"/accountManagement"}>账号管理</Link>,
    component: <AccountManagement />,
  },
  {
    key: "rightsManagement",
    icon: <PieChartOutlined />,
    path: "/rightsManagement",
    label: <Link to={"/rightsManagement"}>权限管理</Link>,
    component: <RightsManagement />,
  },
];
