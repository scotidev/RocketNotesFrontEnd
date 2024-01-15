import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { NoteItem } from "../../components/NoteItem"
import { Textarea } from "../../components/Textarea"
import { Section } from "../../components/Section"
import { Container, Form } from "./styles"

export function New() {
    return(
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                    <h1>Criar Nota</h1>
                    <a href="/">Voltar</a>
                    </header>
                    <Input placeholder="Título" />
                    <Textarea placeholder="Observações" />
                    <Section title="Links úteis">
                        <NoteItem value="https://rocketseat.com.br" />
                        <NoteItem isNew placeholder="Novo Link"/>
                    </Section>
                </Form>
            </main>
        </Container>
    )
}