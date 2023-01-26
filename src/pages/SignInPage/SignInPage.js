import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { URL } from "../../constants/REACT_APP_API_URL";
import { UserContext } from "../../context/UserContext";

export default function SignInPage() {
  const { setUser } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  async function signIn(event) {
    event.preventDefault();

    const body = {
      email,
      password,
    };

    try {
      const promisse = await axios.post(URL + "sign-in", body);

      success(promisse);
      console.log(promisse.data.token)
      console.log("logado com sucesso")
    } catch (err) {
      console.log(err);
    }
  }

  function success(promisse) {
    setUser(promisse.data.token);
    sessionStorage.setItem("tokenLocal", promisse.data.token)
    navigate("/")
  }

  return (
    <SignInContainer>
      <Title>Digital Delights</Title>

      <FormContainer>
        <form onSubmit={signIn}>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </form>

        <TextContainer>
          <Link to="/sign-up">
            <h3>Ainda não tem uma conta? Faça uma agora!</h3>
          </Link>
        </TextContainer>
      </FormContainer>
    </SignInContainer>
  );
}

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  height: 100vh;
  max-height: 100vh;
  width: 100vw;
  max-width: 412px;
  position: relative;
  padding: 25px 25px;
`;

export const Title = styled.h1`
  font-family: Tenor Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  color: #fff;
`;
export const FormContainer = styled.div`
  display: flex;
  margin: 30px 0 25px;
  flex-direction: column;
  align-items: center;
  width: 326px;
  height: 446px;

  input {
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;
    width: 326px;
    height: 58px;
    margin-bottom: 13px;
    padding: 10px;
    border: none;
    border-radius: 5px;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    background-color: ${(props) => (props.disabled ? "#F2F2F2" : "#FFFFFF")};
    color: ${(props) => (props.disabled ? "#AFAFAF" : "#666666")};

    &::placeholder {
      font-family: Tenor Sans;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      color: #000000;
    }
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000000;

    :focus::placeholder {
      color: transparent;
    }
  }
  button {
    width: 326px;
    height: 46px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    pointer-events: ${(props) => (props.disabled ? "none" : "all")};
    opacity: ${(props) => (props.disabled ? 0.7 : 1)};
    font-size: 20px;
    line-height: 26px;
    text-align: center;
    background: #fff;
    margin-top: 40px;
    &:hover {
      background: #e8ebef;
    }
    s &:active {
      background: #e8ebef;
    }
    &:focus {
      outline: none;
    }
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #000;
  }
`;
export const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  h3 {
    font-size: 14px;
    line-height: 17px;
    text-decoration: none;
    color: #ffffff;
    font-family: Tenor Sans;
    font-style: normal;
    font-weight: 400;
    font-size: 15px;
  }
  a {
    color: #fff;
  }
`;
