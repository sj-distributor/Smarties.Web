import { useState } from "react";

export const useAction = () => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  return { collapsed, setCollapsed };
};
