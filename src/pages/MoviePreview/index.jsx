import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Container, Content, MovieInfo, TitleRating, AuthorInfo, Description } from "./styles";

import { api } from "../../services/api";

import { Tag } from "../../components/Tag";
import { Header } from "../../components/Header";
import { NavLink } from "../../components/NavLink";
import { Ratings } from "../../components/Ratings";
import { ButtonText } from "../../components/ButtonText";

import { BiTime } from 'react-icons/bi';
import { FiArrowLeft } from 'react-icons/fi';

export function MoviePreview() {
  const [data, setData] = useState(null);

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchMovie(){
      const response = await api.get(`/ratings/${params.id}`);
      setData(response.data);
      console.log(data);
    }

    fetchMovie();
  }, []);

  return(
    <Container>
      <Header />

      {
        data &&
        <main>
          <div className="buttons">
            <NavLink 
              title='voltar' 
              icon={FiArrowLeft} 
              to="/"
            />
            <ButtonText title='Apagar Filme' />
          </div>
            
          <Content>
            <MovieInfo>
              <TitleRating>
                <h1>
                  {data.title}
                </h1>
                <Ratings rating={data.rating} />
              </TitleRating>

              <AuthorInfo>
                <div>
                  <img 
                    src="https://github.com/jeadamek.png" 
                    alt="Foto do Usuário"
                  />
                  <span>Jessica Adamek</span>
                </div>

                <div>
                  <BiTime />
                  <span>
                    {data.create_at}
                  </span>
                </div>
              </AuthorInfo>

            </MovieInfo>

            <div className="tags">
              {
                data.tags.map(tag => (
                  <Tag 
                    key={String(tag.id)}
                    title={tag.name} />
                ))
              }
            </div>

            <Description>
              <p>
                {data.description}
              </p>
            </Description>
          </Content>

        </main>
      }
    </Container>
  )
}