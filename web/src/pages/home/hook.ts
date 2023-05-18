import { useState } from "react";

import { RouteList } from "@/routes/route-list";

export const useAction = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const newRouteList = RouteList.map((item) => {
    return Object.assign(
      {},
      { key: item.key, icon: item.icon, label: item.label }
    );
  });

  return { collapsed, setCollapsed, newRouteList };
};
