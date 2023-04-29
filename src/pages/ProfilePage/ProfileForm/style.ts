import styled from 'styled-components';
import { Field, Form } from 'formik';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const EditForm = styled(Form)`
  width: 100%;
  max-width: 614px;
  margin-bottom: 70px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 14px;
  row-gap: 20px;

  @media (${device.mobileL}) {
    max-width: 300px;
    margin-bottom: 40px;
  }
`;

export const Controls = styled.div`
  position: relative;
  display: flex;
  flex-direction: column-reverse;
  flex-wrap: wrap;
  gap: 4px;
`;

export const LargeControls = styled(Controls)`
  width: 100%;
  margin-bottom: 10px;
`;

export const SmallLabel = styled.label`
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 4px;
  font-family: 'Roboto Regular', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textLabel};

  @media (${device.mobileL}) {
    width: 279px;
    padding-left: 10px;
  }
`;

export const LargeLabel = styled(SmallLabel)`
  min-width: 100%;
`;

export const SmallInput = styled(Field)`
  width: 300px;
  height: 50px;
  padding-left: 19px;
  font-family: 'Roboto Regular', system-ui, -apple-system, sans-serif;
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlack};
  border: 1px solid ${color.inputBorderInactive};
  border-radius: 6px;

  &:focus + label {
    color: ${color.textBlue};
  }

  @media (${device.mobileL}) {
    width: 279px;
    border-radius: 30px;
  }
`;

export const LargeInput = styled(SmallInput)`
  width: 100%;
`;

export const ErrorFieldName = styled.span`
  position: absolute;
  top: 82px;
  font-size: 12px;
  color: ${color.textError};
`;
