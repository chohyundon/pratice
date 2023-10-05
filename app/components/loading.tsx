"use client";

import React, { useState, useEffect } from "react";
interface MountChildrenProps {
  children: React.ReactNode;
}

export const Loading: React.FC<MountChildrenProps> = ({ children }) => {
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) {
    return null;
  }

  return <>{children}</>;
};
