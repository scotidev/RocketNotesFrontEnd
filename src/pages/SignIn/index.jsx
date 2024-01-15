import { Container, Form } from "./styles";
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FiMail, FiLock } from "react-icons/fi"
import { Background } from "./styles";

export function SignIn() {
    return(
        <Container>
            <Form>
                <h1>RocketNotes</h1>
                <p>Aplicação para salvar e gerenciar seus links úteis</p>

                <h2>Faça seu Login</h2>

                <Input 
                placeholder="E-mail"
                type="text"
                icon={FiMail}
                />

                <Input 
                placeholder="Senha"
                type="password"
                icon={FiLock}
                />

                <Button title="Entrar" />

            <a href="">Criar conta</a>
            </Form>
            <Background />
        </Container>
    )
}