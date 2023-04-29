import styled from 'styled-components';
import { color } from '../../styles/colors';
import { device } from '../../styles/sizes';
import { motion } from 'framer-motion';

export const Container = styled.main`
  padding: 30px 141px 79px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (${device.mobileL}) {
    padding-right: 16px;
    padding-left: 20px;
  }
`;

export const Motion = styled(motion.div)`
  width: 100%;
`;

export const ProfileContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (${device.mobileL}) {
    gap: 20px;
  }
`;

export const Title = styled.h1`
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-size: 40px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    max-width: 171px;
    font-size: 24px;
    line-height: 120%;
  }
`;

export const FormTitle = styled.h3`
  margin-bottom: 20px;
  font-family: 'Roboto Bold', system-ui, -apple-system, sans-serif;
  font-size: 32px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 18px;
    line-height: 100%;
  }
`;

export const FormContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap: 50px;

  @media (${device.mobileL}) {
    flex-direction: column;
  }
`;
