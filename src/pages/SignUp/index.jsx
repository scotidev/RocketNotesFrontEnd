import { Container, Form, Background } from "./styles";

import { FiMail, FiLock, FiUser } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  async function handleSignUp() {
    try {
      await api.post("/users", { name, email, password });

      console.log("Usuário cadastrado com sucesso!");

      navigate("/");
    } catch (error) {
      if (error.response) {
        console.log("Erro de cadastro:", error.response.data.message);
      } else {
        console.log(
          "Não foi possível conectar. Verifique sua conexão ou o servidor."
        );
      }
    }
  }

  return (
    <Container>
      <Background />

      <Form>
        <h1>RocketNotes</h1>
        <p>Aplicação para salvar e gerenciar seus links úteis</p>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <Button title="Cadastrar" onClick={handleSignUp} />

        <Link to="/">Voltar para Login</Link>
      </Form>
    </Container>
  );
}
