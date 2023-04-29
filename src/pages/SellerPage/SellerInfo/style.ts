import styled from 'styled-components';
import { color } from '../../../styles/colors';
import { device } from '../../../styles/sizes';

export const Container = styled.section`
  padding-top: 30px;
  display: flex;
  flex-direction: column;
  margin-bottom: 44px;
`;

export const Title = styled.h1`
  font-size: 40px;
  line-height: 220%;
  color: ${color.textBlack};

  @media (${device.mobileL}) {
    font-size: 24px;
    line-height: 120%;
  }
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

export const SellerAvatar = styled.div`
  width: 170px;
  height: 170px;
  background: ${color.bgSkeleton};
  border-radius: 50%;

  @media (${device.mobileL}) {
    width: 132px;
    height: 132px;
    align-self: center;
  }
`;

export const SellerBlock = styled.div`
  margin-top: 34px;
  display: flex;
  gap: 50px;

  @media (${device.mobileL}) {
    gap: 30px;
    flex-direction: column;
  }
`;

export const SellerInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (${device.mobileL}) {
    order: -1;
  }
`;

export const SellerInfo = styled(SellerInfoWrapper)`
  gap: 10px;

  @media (${device.mobileL}) {
    gap: 6px;
  }
`;

export const SellerName = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-size: 20px;
  line-height: 130%;
  font-weight: 700;
  color: ${color.textBlack};
`;

export const SellerDate = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 200%;
  color: ${color.textGray};

  @media (${device.mobileL}) {
    line-height: 130%;
  }
`;

export const CityText = styled.p`
  font-family: 'Noto Sans', sans-serif;
  font-size: 16px;
  line-height: 130%;
  color: ${color.textGray};
`;
