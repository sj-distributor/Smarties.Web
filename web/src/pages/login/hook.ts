import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useAction = () => {
  const [loginName, setLoginName] = useState<string>("");

  const [loginPassword, setLoginPassword] = useState<string>("");

  const navigate = useNavigate();

  return {
    loginName,
    loginPassword,
    setLoginName,
    setLoginPassword,
    navigate,
  };
};
