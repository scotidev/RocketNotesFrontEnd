import { Container, Profile, Logout } from "./styles";

import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/scotidev.png" alt="foto do usuário" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Gabriel Scoti</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
