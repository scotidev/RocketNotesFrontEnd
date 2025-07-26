import { Container, Profile, Logout } from "./styles";

import { RiShutDownLine } from "react-icons/ri";
import { useAuth } from "../../hooks/auth";

export function Header() {
  const { signOut } = useAuth();

  function handleSignOut() {
    signOut();
  }

  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/scotidev.png" alt="foto do usuário" />

        <div>
          <span>Bem-Vindo</span>
          <strong>Usuário</strong>
        </div>
      </Profile>

      <Logout onClick={handleSignOut}>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
