import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const Wrapper = styled.div`
  width: 800px;
  max-height: 900px;
  padding: 10px 0 10px 35px;
  overflow: hidden;

  @media (${device.mobileL}) {
    width: 100%;
    max-height: 100%;
    padding: 10px 0 10px 10px;
  }
`;

export const Container = styled.section`
  width: 100%;
  max-height: 680px;
  margin-bottom: 50px;
  padding-right: 83px;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 6px;
    background: transparent;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    height: 116px;
    width: 5px;
    background: ${color.scroll};
    border-radius: 10px;
  }

  @media (${device.mobileL}) {
    padding-right: 24px;
    padding-left: 15px;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: none;
  margin-bottom: 10px;
  padding-left: 15px;

  @media (${device.mobileL}) {
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

export const BackArrowWrapper = styled.div`
  color: ${color.textBlack};
`;

export const Title = styled.h1`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: ${color.textBlack};
  margin-bottom: 20px;

  @media (${device.mobileL}) {
    padding-left: 18px;
    margin-bottom: 0;
    font-size: 24px;
    line-height: 120%;
  }
`;

export const ReviewForm = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: flex-start;
  margin-bottom: 30px;
`;

export const FormTitle = styled.h5`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 200%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    display: none;
  }
`;

export const Text = styled.textarea`
  width: 100%;
  height: 100px;
  padding-top: 10px;
  padding-left: 19px;
  font-size: 16px;
  line-height: 150%;
  background: ${color.bgPrimary};
  border: 1px solid ${color.inputBorderInactive};
  border-radius: 6px;
  outline: none;
  resize: none;

  &:focus {
    border-color: ${color.inputBorderActive};
  }

  &::placeholder {
    font-family: 'Roboto Regular', sans-serif;
    font-size: 16px;
    line-height: 150%;
    color: ${color.inputPlaceholder};
  }

  @media (${device.mobileL}) {
    border-radius: 20px;
  }
`;

export const ErrorFieldText = styled.p`
  position: absolute;
  top: 140px;
  width: 100%;
  font-size: 12px;
  line-height: 24px;
  color: ${color.textError};
  text-align: start;

  @media (${device.mobileL}) {
    top: 94px;
  }
`;
