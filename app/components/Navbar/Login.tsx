import useRegisterModal from "@/app/hooks/useRegisterModal";
import React from "react";

function Login() {
  const register = useRegisterModal();

  return (
    <div>
      <p onClick={register.onOpen}>Log in</p>
      <p onClick={register.onClose}>Sign Up</p>
    </div>
  );
}

export default Login;
