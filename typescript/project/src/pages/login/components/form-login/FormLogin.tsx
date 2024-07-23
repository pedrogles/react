import { useRef, useState } from "react";
import { InputLogin, ButtonLogin } from "../index";
import { useNavigate } from "react-router-dom";
import { useLoggedUser } from "../../../../shared/hooks";

interface ILoginDataProps {
  email: string;
  password: string;
};

export const FormLogin = () => {
  const [loginData, setLoginData] = useState<ILoginDataProps>({
    email: "",
    password: "",
  });

  const passwordRef = useRef<HTMLInputElement>(null);
  const navegate = useNavigate();
  const { setLoggedUser } = useLoggedUser();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoggedUser(loginData.email)
    navegate("/pagina-inicial")
  };
  return (
    <form onSubmit={handleSubmit}>
      <h1>Login</h1>
      <InputLogin
        id="email"
        label="Email: "
        type="text"
        value={loginData.email}
        onChange={(newValue) =>
          setLoginData({ email: newValue, password: loginData.password })}
        onPressEnter={() => passwordRef.current?.focus()}
      />
      <InputLogin
        ref={passwordRef}
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
