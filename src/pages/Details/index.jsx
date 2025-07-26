import { Container, Links, Content } from "./styles";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";

export function Details() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirmDelete = confirm("Tem certeza que deseja excluir esta nota?");

    if (confirmDelete) {
      try {
        await api.delete(`/notes/${params.id}`);
        alert("Nota excluída com sucesso!");
        navigate("/");
      } catch (error) {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert(
            "Não foi possível excluir a nota. Verifique sua conexão ou o servidor."
          );
        }
      }
    }
  }

  useEffect(() => {
    async function fetchNote() {
      try {
        const response = await api.get(`/notes/${params.id}`);
        setData(response.data);
      } catch (error) {
        console.error(
          "Erro ao buscar detalhes da nota:",
          error.response?.data?.message || error.message
        );
        alert("Não foi possível carregar os detalhes da nota.");
        navigate("/");
      }
    }
    fetchNote();
  }, [params.id, navigate]);

  return (
    <Container>
      <Header />

      {data && (
        <main>
          <Content>
            <ButtonText title="Excluir Nota" onClick={handleRemove} />
            <h1>{data.title}</h1>
            <p>{data.description}</p>

            {/* Renderiza a seção de Links Úteis apenas se houver links */}
            {data.links && data.links.length > 0 && (
              <Section title="Links Úteis">
                <Links>
                  {data.links.map((link) => (
                    <li key={String(link.id)}>
                      {" "}
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.url}
                      </a>
                    </li>
                  ))}
                </Links>
              </Section>
            )}

            {/* Renderiza a seção de Marcadores apenas se houver tags */}
            {data.tags && data.tags.length > 0 && (
              <Section title="Marcadores">
                {data.tags.map((tag) => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </Section>
            )}
            <Button title="Voltar" onClick={handleBack} />
          </Content>
        </main>
      )}
    </Container>
  );
}
