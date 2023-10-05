"use client";

import React from "react";

interface MenuItemProps {
  onClick: () => void;
  label: string;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label }) => {
  return (
    <div onClick={onClick}>
      <div>{label}</div>
    </div>
  );
};

export default MenuItem;