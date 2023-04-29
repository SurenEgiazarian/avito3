import * as S from './style';

type Props = {
  description: string | undefined;
};

const AdDescription = ({ description }: Props) => {
  return (
    <S.Container>
      <S.Title>Описание товара</S.Title>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
};

export default AdDescription;
