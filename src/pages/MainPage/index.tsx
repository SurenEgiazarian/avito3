import { motion } from 'framer-motion';

import Search from './Search';
import Ads from './Ads';

import * as S from './style';

const MainPage = () => {
  return (
    <S.Main>
      <Search />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Ads />
      </motion.div>
    </S.Main>
  );
};

export default MainPage;
