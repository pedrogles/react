import { useRef, useState } from "react";
import { InputLogin, ButtonLogin } from "../index";

interface ILoginDataProps {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const [loginData, setLoginData] = useState<ILoginDataProps>({
    email: "",
    password: "",
  });
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(loginData);
    console.log(emailRef.current);
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputLogin
        ref={emailRef}
        id="email"
        label="Email: "
        type="text"
        value={loginData.email}
        onChange={(newValue) =>
          setLoginData({ email: newValue, password: loginData.password })
        }
      />
      <InputLogin
        id="password"
        label="Senha: "
        type="password"
        value={loginData.password}
        onChange={(newValue) =>
          setLoginData({ password: newValue, email: loginData.email })
        }
      />
      <ButtonLogin type="submit">Entrar</ButtonLogin>
    </form>
  );
};
