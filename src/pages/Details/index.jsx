import { Container, Links } from "./styles"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"
 
 export function Details() {
    return (
        <Container>
            <Header />

            <Section>
                <Links>
                    <li><a href="https://rocketseat.com.br">Link 1</a></li>
                    <li><a href="https://rocketseat.com.br">Link 2</a></li>
                </Links>
            </Section>

            <Section title="Marcadores">
                <Tag title="express" />
                <Tag title="node.js" />
            </Section>

            <Button title="Voltar" />
                        
        </Container>
    )
 }