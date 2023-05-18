import { PieChartOutlined } from "@ant-design/icons";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Management } from "@/pages/management";
import { SetUp } from "@/pages/set-up";

interface IChildRouteDto {
  key: string;
  icon: ReactElement;
  path: string;
  label: ReactElement;
  component: ReactElement;
  children?: IChildRouteDto[];
}

export interface IRouteListDto {
  key: string;
  icon: ReactElement;
  path: string;
  label: ReactElement;
  component?: ReactElement;
  children?: IChildRouteDto[];
}

export const RouteList: IRouteListDto[] = [
  {
    key: "management",
    icon: <PieChartOutlined />,
    path: "/management",
    label: <Link to={"/management"}>管理页</Link>,
    component: <Management />,
  },
  {
    key: "setup",
    icon: <PieChartOutlined />,
    path: "/set-up",
    label: <Link to={"/set-up"}>设置页</Link>,
    component: <SetUp />,
  },
];
