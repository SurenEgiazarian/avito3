import { Outlet } from 'react-router-dom';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import * as S from './style';

const MainLayout = () => {
  return (
    <S.Container>
      <Header />
      <Outlet />
      <Footer />
    </S.Container>
  );
};

export default MainLayout;
