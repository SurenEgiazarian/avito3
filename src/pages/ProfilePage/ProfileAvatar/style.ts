import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const AvatarForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const AvatarSkeleton = styled.div`
  width: 170px;
  height: 170px;
  background: ${color.bgSkeleton};
  border-radius: 50%;
`;

export const AvatarWrapper = styled(AvatarSkeleton)`
  width: 170px;
  height: 170px;
  border-radius: 50%;

  @media (${device.mobileL}) {
    width: 132px;
    height: 132px;
  }
`;

export const AvatarEdit = styled.input`
  display: none;
`;

export const AvatarLabel = styled.label`
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlue};
  cursor: pointer;

  &:hover {
    color: ${color.textBlueHover};
  }
`;
