import React from "react";
import Image from "next/image";

export default function Avatar() {
  return (
    <div>
      <Image
        alt="Avatar"
        width="20"
        height="20"
        src="/images/placeholder.jpg"
        style={{ borderRadius: "50%" }}
      ></Image>
    </div>
  );
}
