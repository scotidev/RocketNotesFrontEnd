import { Container, Brand, Menu, Search, Content, NewNote } from "./styles.js";

import { FiPlus, FiSearch } from "react-icons/fi";

import { Header } from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input/index.jsx";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note/index.jsx";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { api } from "../../services/api.js";

export function Home() {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [notes, setNotes] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleTagSelected(tagName) {
    if (tagName === "Todos") {
      setSelectedTags([]);
    } else {
      const alreadySelected = selectedTags.includes(tagName);

      if (alreadySelected) {
        setSelectedTags((prevState) =>
          prevState.filter((tag) => tag !== tagName)
        );
      } else {
        setSelectedTags((prevState) => [...prevState, tagName]);
      }
    }
  }

  // --- useEffect para buscar as tags disponíveis ---
  useEffect(() => {
    async function fetchTags() {
      try {
        const response = await api.get("/tags");
        setTags(response.data.tags);
      } catch (error) {
        console.error(
          "Erro ao buscar tags:",
          error.response?.data?.message || error.message
        );
      }
    }
    fetchTags();
  }, []);

  // --- useEffect para buscar as notas ---
  useEffect(() => {
    async function fetchNotes() {
      try {
        const tagsFilter =
          selectedTags.length > 0 ? selectedTags.join(",") : "";

        const response = await api.get(
          `/notes?title=${search}&tags=${tagsFilter}`
        );
        setNotes(response.data.notesWithTags);
      } catch (error) {
        console.error(
          "Erro ao buscar notas:",
          error.response?.data?.message || error.message
        );
      }
    }
    fetchNotes();
  }, [selectedTags, search]);

  return (
    <Container>
      <Brand>
        <h1>RocketNotes</h1>
      </Brand>

      <Header />

      <Menu>
        <li>
          <ButtonText
            title="Todos"
            isActive={selectedTags.length === 0}
            onClick={() => handleTagSelected("Todos")}
          />
        </li>
        {tags.map((tag) => (
          <li key={String(tag.id)}>
            <ButtonText
              title={tag.name}
              isActive={selectedTags.includes(tag.name)}
              onClick={() => handleTagSelected(tag.name)}
            />
          </li>
        ))}
      </Menu>

      <Search>
        <Input
          placeholder="Pesquisar pelo título"
          icon={FiSearch}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Search>

      <Content>
        <Section title="Minhas Notas">
          {notes.length > 0 ? (
            notes.map((note) => (
              <Note
                key={String(note.id)}
                data={note}
                onClick={() => handleDetails(note.id)}
              />
            ))
          ) : (
            <p>Nenhuma nota encontrada.</p>
          )}
        </Section>
      </Content>

      <NewNote to="/new">
        <FiPlus />
        Criar nota
      </NewNote>
    </Container>
  );
}
