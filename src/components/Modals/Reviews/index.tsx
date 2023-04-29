import { isMobile } from 'react-device-detect';

import UIButton from '../../UI/UIButton';
import CurrentReviews from './CurrentReviews';
import { Formik } from 'formik';
import BackArrowIcon from '../../Icons/BackArrowIcon';

import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { SkyvitoService } from '../../../services/skyvito.service';
import { ReviewSchema } from '../../../schemas';
import { ApiError, NewReview } from '../../../types/types';

import * as S from './style';

type Values = {
  text: string;
};

const Reviews = () => {
  const { id } = useParams();
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const { mutateAsync, isError, error, isLoading } = useMutation(
    'edit ad',
    (data: NewReview) => SkyvitoService.addReview(id as string, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('reviews');
      }
    }
  );

  const onSubmitHandler = async (values: Values) => {
    await mutateAsync({ text: values.text });

    if (isError) console.log(error);
  };

  const onHistoryBackHandler = () => {
    navigate(-1);
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <S.BackArrowWrapper onClick={onHistoryBackHandler}>
          <BackArrowIcon />
        </S.BackArrowWrapper>
        <S.Title>Отзывы о товаре</S.Title>
      </S.TitleWrapper>
      {!isMobile && <S.Title>Отзывы о товаре</S.Title>}
      <S.Container>
        <Formik
          initialValues={{
            text: ''
          }}
          validationSchema={ReviewSchema}
          onSubmit={async (values: Values) => {
            await onSubmitHandler(values);
          }}
        >
          {({ values, errors, touched, handleSubmit, handleChange, handleBlur, isValid }) => (
            <S.ReviewForm>
              <S.FormTitle>Добавить отзыв</S.FormTitle>
              <S.Text
                name="text"
                placeholder="Введите отзыв"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.text}
              />
              {errors.text && touched.text && <S.ErrorFieldText>{errors.text}</S.ErrorFieldText>}
              <UIButton
                onClick={handleSubmit}
                buttonClassType={'review'}
                text={isLoading ? 'Отправка...' : 'Опубликовать'}
                type="submit"
                disabled={!isValid}
              />
              {isError && <span>{(error as ApiError).message}</span>}
            </S.ReviewForm>
          )}
        </Formik>
        <CurrentReviews />
      </S.Container>
    </S.Wrapper>
  );
};

export default Reviews;
