import { Container, Form } from "./styles";

import { Link } from "react-router-dom";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { NoteItem } from "../../components/NoteItem";
import { Textarea } from "../../components/Textarea";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value="https://rocketseat.com.br" />
            <NoteItem isNew placeholder="Novo Link" />
          </Section>
          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Nova tag" />
            </div>
          </Section>

          <Button title="Salvar"></Button>
        </Form>
      </main>
    </Container>
  );
}
