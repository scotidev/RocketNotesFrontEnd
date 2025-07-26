import { Container, Form, Avatar } from "./style";

import { FiArrowLeft, FiUser, FiMail, FiLock } from "react-icons/fi";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Link } from "react-router-dom";
import { useState } from "react";
import { api } from "../../services/api.js";
import { useAuth } from "../../hooks/auth.jsx";

export function Profile() {
  const { user, signIn } = useAuth();

  const [name, setName] = useState(user.name);
  const [email, setEmail] = useState(user.email);
  const [passwordOld, setPasswordOld] = useState("");
  const [passwordNew, setPasswordNew] = useState("");

  async function handleUpdate() {
    const updated = {
      name,
      email,
      password: passwordNew,
      old_password: passwordOld,
    };

    const userUpdated = Object.assign(user, updated);

    try {
      await api.put("/users", userUpdated);

      localStorage.setItem("@rocketnotes:user", JSON.stringify(userUpdated));
      signIn({
        email: userUpdated.email,
        password: passwordNew || passwordOld,
      });

      alert("Perfil atualizado com sucesso!");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert(
          "Não foi possível atualizar o perfil. Verifique sua conexão ou o servidor."
        );
      }
    }
  }
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/scotidev.png" alt="Foto do usuário" />
        </Avatar>
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
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
          value={passwordOld}
          onChange={(e) => setPasswordOld(e.target.value)}
        />

        <Input
          placeholder="Nova Senha"
          type="password"
          icon={FiLock}
          value={passwordNew}
          onChange={(e) => setPasswordNew(e.target.value)}
        />

        <Button title="Salvar" onClick={handleUpdate} />
      </Form>
    </Container>
  );
}
