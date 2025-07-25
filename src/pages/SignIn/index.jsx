import { Container, Form, Background } from "./styles";

import { FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { useState } from "react";
import { useAuth } from "../../hooks/auth.jsx";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  async function handleSignIn() {
    await signIn({ email, password });
  }

  return (
    <Container>
      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Faça seu Login</h2>

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Entrar" onClick={handleSignIn} />

        <Link to="/register">Criar conta</Link>
      </Form>
      <Background />
    </Container>
  );
}
