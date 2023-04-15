import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Form, Section } from './styles';

import { Input } from '../../components/Input';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { NavLink } from '../../components/NavLink';
import { Textarea } from '../../components/Textarea';
import { MovieItem } from '../../components/MovieItem';

import { FiArrowLeft } from "react-icons/fi";

export function New() {
  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  const [title, setTitle] = useState("");
  const [rating, setRating] = useState(null);
  const [description, setDescription] = useState("");

  const navigate = useNavigate();

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(deleted) {
    setTags(prevState => prevState.filter(tag => tag !== deleted))
  }

  function handleDeleteMovie(){
    const confirm = window.confirm("Deseja realmente deletar o filme?");
    if (confirm) {
      navigate(-1)
    }
  }

  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <NavLink 
              title="Voltar"
              icon={FiArrowLeft}
              to="/"
            />
            <h1>Novo filme</h1>
          </header>


            <div>
              <Input placeholder="Título" />
              <Input placeholder="Sua nota (de 0 a 5)" />
            </div>

          <Textarea placeholder="Observações" />

          <Section>
            <h2>Marcadores</h2>
            <div className="tags">
              {
                tags.map((tag, index) => (
                  <MovieItem 
                    key={String(index)}
                    value={tag}
                    onClick={() => handleRemoveTag(tag)} 
                  />
                ))
              }

              <MovieItem 
                isNew 
                placeholder="Novo Marcador"
                value={newTag}
                onChange={e => setNewTag(e.target.value)} 
                onClick={handleAddTag} 
              />
            </div>
          </Section>

          <div>
            <Button 
              title="Excluir filme" 
              className="secondary"
              onClick={handleDeleteMovie}
            />
            
            <Button 
              title="Salvar alterações"
            />
          </div>
        </Form>
      </main>

    </Container>
  )
}