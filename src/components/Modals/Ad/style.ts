import { Field, Form } from 'formik';
import styled from 'styled-components';

import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const Container = styled.div`
  position: relative;
  width: 600px;
  padding: 20px 50px 42px 50px;
  background: ${color.bgPrimary};
  border-radius: 12px;

  @media (${device.mobileL}) {
    width: 320px;
    height: 100%;
    padding: 30px 16px 42px 20px;
  }
`;

export const NewAdForm = styled(Form)`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 32px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 24px;
    line-height: 120%;
  }
`;

export const LabelWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`;

export const Label = styled.label`
  font-family: 'Roboto Regular', sans-serif;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    padding-left: 15px;
  }
`;

export const PhotoLabel = styled.label`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #f0f0f0;
  z-index: -1;
  cursor: pointer;

  &::after,
  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 2px;
    border-radius: 2px;
    background-color: #d9d9d9;
    top: 50%;
    right: calc(50% - (30px / 2));
  }

  &::before {
    transform: rotate(90deg);
  }
`;

export const DeletePhotoButton = styled.div`
  color: red;
  cursor: pointer;
`;

export const PhotoPreview = styled.img`
  width: 100%;
  object-fit: cover;
`;

export const NameInput = styled(Field)`
  width: 100%;
  height: 50px;
  padding-left: 19px;
  font-size: 16px;
  line-height: 150%;
  border: 1px solid ${color.inputBorderInactive};
  border-radius: 6px;

  &::placeholder {
    font-family: 'Roboto Regular', sans-serif;
    font-size: 16px;
    line-height: 150%;
    color: ${color.inputPlaceholder};
  }

  @media (${device.mobileL}) {
    border-radius: 30px;
  }
`;

export const DescriptionInput = styled.textarea`
  width: 100%;
  height: 200px;
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
    color: ${color.inputPlaceholder};
  }

  @media (${device.mobileL}) {
    height: 107px;
    border-radius: 20px;
  }
`;

export const PriceWrapper = styled(LabelWrapper)`
  position: relative;
  width: 180px;

  @media (${device.mobileL}) {
    width: 100%;
  }
`;

export const PriceInput = styled(NameInput)`
  padding-right: 40px;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  @media (${device.mobileL}) {
    width: 100%;
  }
`;

export const PriceCurrency = styled.span`
  position: absolute;
  right: 20px;
  top: 13px;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlack};
`;

export const PhotosWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media (${device.mobileL}) {
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

export const PhotoTitlesWrapper = styled.div`
  display: flex;
  gap: 10px;

  @media (${device.mobileL}) {
    flex-direction: column;
    gap: 0;
  }
`;

export const PhotoWrapperTitle = styled.span`
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 14px;
    line-height: 150%;
  }
`;

export const PhotoWrapperSubTitle = styled.span`
  font-size: 16px;
  line-height: 150%;
  color: ${color.inputPlaceholder};

  @media (${device.mobileL}) {
    font-size: 14px;
    line-height: 150%;
  }
`;

export const PhotoInput = styled.input`
  display: none;
`;

export const PhotoWrapper = styled.div`
  position: relative;
  width: 90px;
  height: 90px;
  z-index: 0;

  @media (${device.mobileL}) {
    width: 85px;
  }
`;

export const ErrorFieldTitle = styled.p`
  position: absolute;
  top: 75px;
  width: 100%;
  font-size: 12px;
  line-height: 24px;
  color: ${color.textError};
  text-align: start;
`;

export const ErrorFieldDescription = styled(ErrorFieldTitle)`
  top: 225px;

  @media (${device.mobileL}) {
    top: 130px;
  }
`;

export const ErrorFieldPrice = styled(ErrorFieldTitle)`
  top: 45px;
`;

export const TitleWrapper = styled.div`
  position: relative;
  display: none;

  @media (${device.mobileL}) {
    display: flex;
    gap: 15px;
    align-items: center;
  }
`;

export const BackArrowWrapper = styled.div`
  color: ${color.textBlack};
`;
