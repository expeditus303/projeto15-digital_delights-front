import axios from "axios";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";
import { FormContainer, SignInContainer, TextContainer, Title } from "./SignInCss";

export default function SignInPage({ selectedProductBeforeLogin }) {
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
      const promisse = await axios.post(`${process.env.REACT_APP_API_URL}/sign-in`, body);

      success(promisse);
      console.log(promisse.data.token)
      console.log("logado com sucesso")
    } catch (err) {
      alert(err.response.data)
    }
  }

  function success(promisse) {
    setUser(promisse.data.token);
    sessionStorage.setItem("tokenLocal", promisse.data.token)

    if(selectedProductBeforeLogin === undefined) return navigate("/")

    navigate(`/product/${selectedProductBeforeLogin}`)
  }

  return (
    <SignInContainer>
      <Title>Digital Delights</Title>

      <FormContainer>
        <form onSubmit={signIn}>
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Sign In</button>
        </form>

        <TextContainer>
          <Link to="/sign-up">
            <h3>First time? Sign Up!</h3>
          </Link>
        </TextContainer>
      </FormContainer>
    </SignInContainer>
  );
}

