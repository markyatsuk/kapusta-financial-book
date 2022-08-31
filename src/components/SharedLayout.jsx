import { Outlet } from 'react-router-dom';
import Container from './Container';
// import Header from './Header';
// import Logo from './Logo';

export const SharedLayout = () => {
  return (
    <Container>
      {/* <Header/>
        <Logo/> */}
        {/* <nav></nav> */}
      {/* </Header> */}
      <Outlet />
    </Container>
  );
};
