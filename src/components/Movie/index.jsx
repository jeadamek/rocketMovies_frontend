import { Container, Title, Description } from './styles';

import { Tag } from '../../components/Tag';
import { Ratings } from '../Ratings';

export function Movie({ data, ...rest }){
  return(
    <Container {...rest}>
      <Title>
        <h1>{data.title}</h1>
        <Ratings rating={4} className="cardRating" />
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