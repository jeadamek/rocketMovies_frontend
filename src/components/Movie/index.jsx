import { Container, Title, Description } from './styles';

import { Ratings } from '../Ratings';
import { Tag } from '../Tag';

export function Movie({ data, ...rest }){
  return(
    <Container {...rest}>
      <Title>
        <h1>{data.title}</h1>
        <Ratings rating={data.rating} className="cardRating" />
      </Title>

      <Description>
        {data.description}
      </Description>

      {
        data.tags &&
        <footer>
          {
            data.tags.map(tag => <Tag key={tag.id} title={tag.name} className="cardTag" />)
          }
        </footer>
      }
    </Container>
  )
}