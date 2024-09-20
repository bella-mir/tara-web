import { Button } from "antd";
import React from "react";

export const LogoutButton: React.FC = () => {
  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem("token");
  };

  return <Button onClick={handleLogout}>Logout</Button>;
};
