import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/sizes';
import { motion } from 'framer-motion';

export const Container = styled.main`
  padding-right: 141px;
  padding-left: 141px;
  padding-bottom: 66px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (${device.mobileL}) {
    padding-right: 16px;
    padding-left: 20px;
    align-items: center;
  }
`;

export const Motion = styled(motion.div)`
  width: 100%;
`;

export const Message = styled.p`
  width: 100%;
  text-align: center;
  font-size: 36px;
  color: ${color.textGray};
`;
