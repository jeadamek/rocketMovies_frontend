import { Container } from './style';

export function NavLink({ title, icon: Icon, ...rest }) {
  return (
    <Container
      {...rest}
    >
      {Icon && <Icon size={20} />}
      {title}
    </Container>
  )
}