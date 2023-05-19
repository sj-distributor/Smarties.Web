import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PoweroffOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Dropdown, Layout, Menu, MenuProps, Space, theme } from "antd";
import { Link, Outlet } from "react-router-dom";

import { RouteList } from "@/routes/route-list";

import { useAction } from "./hook";

export const Home = () => {
  const { Header, Sider, Content } = Layout;

  const { collapsed, setCollapsed } = useAction();

  const newRouteList = RouteList.map((item) => {
    return Object.assign(
      {},
      { key: item.key, icon: item.icon, label: item.label }
    );
  });

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <div className="flex items-center">
          <PoweroffOutlined className="pr-[0.6rem]" />
          <Link to="/login">退出登录</Link>
        </div>
      ),
    },
  ];

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  return (
    <Layout className="h-[100vh]">
      <Sider
        breakpoint="lg"
        trigger={null}
        collapsible
        collapsed={collapsed}
        className="!bg-white"
      >
        <div
          className={`font-bold flex items-center duration-300 h-[4rem] ${
            collapsed ? "pl-[0.5rem] text-[1rem]" : "pl-[1.8rem] text-[1.3rem]"
          }`}
        >
          Smarties
          <span
            className={`duration-50 pl-[0.3rem] ${
              collapsed ? "opacity-0" : "opcity-100"
            }`}
          >
            Web
          </span>
        </div>
        <Menu
          className="!border-e-0"
          mode="inline"
          defaultOpenKeys={["accountmanagement"]}
          defaultSelectedKeys={["accountmanagement"]}
          items={newRouteList}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            background: colorBgContainer,
          }}
          className="h-[4rem] flex justify-between p-[0_2rem_0_0]"
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            className="!w-[4rem] h-[4rem] flex justify-center items-center"
          />
          <Dropdown
            menu={{ items }}
            placement="bottomLeft"
            arrow
            trigger={["click"]}
          >
            <a>
              <div className="flex items-center text-[1rem]">
                <UserOutlined />
                <div className="block ml-[0.5rem]">User</div>
              </div>
            </a>
          </Dropdown>
        </Header>
        <Content
          style={{
            margin: "1.5rem",
            padding: "1.5rem",
            background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
