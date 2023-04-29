import styled from 'styled-components';
import { color } from '../../../../styles/colors';

export const Container = styled.div`
  width: 100%;
  min-height: 440px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ReviewContainer = styled.div`
  display: flex;
  gap: 12px;
`;

export const SellerAvatar = styled.div`
  width: 40px;
  height: 40px;
  background: ${color.bgSkeleton};
  border-radius: 50%;
`;

export const ReviewInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthorInfo = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 12px;
`;

export const AuthorName = styled.span`
  font-family: 'Noto Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 200%;
  color: ${color.textBlack};
`;

export const Date = styled(AuthorName)`
  font-weight: 400;
  color: ${color.textGray};
`;

export const ReviewTitle = styled(AuthorName)``;

export const ReviewText = styled.p`
  font-size: 16px;
  line-height: 150%;
  color: ${color.textBlack};
`;
