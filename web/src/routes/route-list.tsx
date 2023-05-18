import { PieChartOutlined } from "@ant-design/icons";
import { ReactElement } from "react";
import { Link } from "react-router-dom";

import { Test } from "@/pages/test";

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
    key: "test",
    icon: <PieChartOutlined />,
    path: "/test",
    label: <Link to={"/test"}>页面1</Link>,
    component: <Test />,
  },
];
