import { Outlet } from 'react-router-dom';
import Container from './Container';

export const SharedLayout = () => {
  return (
    <Container>
      {/* <Header>
        <Logo></Logo>
        <nav></nav>
      </Header> */}
      <Outlet />
    </Container>
  );
};
