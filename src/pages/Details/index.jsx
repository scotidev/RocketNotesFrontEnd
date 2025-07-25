import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Excluir Nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eaque
            minus voluptas voluptatem molestias. Fugiat quod ullam dolore
            tenetur facere? Quisquam provident qui repellat explicabo fugiat
            itaque porro dolore quia dolorum?
          </p>

          <Section title="Links Úteis">
            <Links>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
              <li>
                <a href="#">https://rocketseat.com.br</a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
            <Tag title="node.js" />
          </Section>

          <Button title="Voltar" />
        </Content>
      </main>
    </Container>
  );
}
