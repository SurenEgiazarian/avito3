import React, { ChangeEvent, useState } from 'react';
import { Formik } from 'formik';
import { isMobile } from 'react-device-detect';

import UIButton from '../../../../components/UI/UIButton';
import BackArrowIcon from '../../../../components/Icons/BackArrowIcon';

import { useMutation, useQueryClient } from 'react-query';
import { SkyvitoService } from '../../../../services/skyvito.service';
import { NewAdSchema } from '../../../../schemas';
import { useNavigate } from 'react-router-dom';

import { ApiError, NewAdProps, NewAdPropsNoPhoto } from '../../../../types/types';

import * as S from '../../../../components/Modals/Ad/style';

type Values = {
  title: string;
  description: string;
  price: number;
  file1: string;
  file2: string;
  file3: string;
  file4: string;
  file5: string;
};

type Props = {
  showCreateAdForm?: () => void;
};

const NewAd = ({ showCreateAdForm }: Props) => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const onHistoryBackHandler = () => {
    navigate(-1);
  };

  const { mutateAsync, isError, error, isLoading } = useMutation(
    'create ad',
    ({ title, description, price, data }: NewAdProps) =>
      SkyvitoService.createAd({ title, description, price, data }),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('ads');

        if (showCreateAdForm) {
          showCreateAdForm();
        }

        navigate('/');
      }
    }
  );

  const {
    mutateAsync: mutateAsyncNoPhoto,
    isError: isErrorNoPhoto,
    error: errorNoPhoto,
    isLoading: isLoadingNoPhoto
  } = useMutation(
    'create ad no photo',
    (data: NewAdPropsNoPhoto) => SkyvitoService.createAdNoPhoto(data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('ads');
        if (showCreateAdForm) {
          showCreateAdForm();
        }
      }
    }
  );

  const [photo1, setPhoto1] = useState<string | ArrayBuffer | null>();
  const [photo2, setPhoto2] = useState<string | ArrayBuffer | null>();
  const [photo3, setPhoto3] = useState<string | ArrayBuffer | null>();
  const [photo4, setPhoto4] = useState<string | ArrayBuffer | null>();
  const [photo5, setPhoto5] = useState<string | ArrayBuffer | null>();

  const readURL = (e: ChangeEvent<HTMLInputElement>, numberOfPhoto: string) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          switch (numberOfPhoto) {
            case '1':
              setPhoto1(e.target.result);
              break;
            case '2':
              setPhoto2(e.target.result);
              break;
            case '3':
              setPhoto3(e.target.result);
              break;
            case '4':
              setPhoto4(e.target.result);
              break;
            case '5':
              setPhoto5(e.target.result);
              break;
            default:
              setPhoto1(e.target.result);
          }
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const createFormData = (values: Values) => {
    const formData = new FormData();

    const { file1, file2, file3, file4, file5 } = values;
    const photosArray = [file1, file2, file3, file4, file5];

    for (let i = 0; i < photosArray.length; i++) {
      if (photosArray[i]) {
        formData.append('files', photosArray[i]);
      }
    }

    if (photosArray.every((file) => file === '')) return null;

    return formData;
  };

  const onSubmitHandler = async (values: Values) => {
    const formData = createFormData(values);

    const fetchData = {
      title: values.title,
      description: values.description,
      price: values.price,
      data: formData
    };

    const fetchDataNoPhoto = {
      title: values.title,
      description: values.description,
      price: values.price
    };

    if (formData) {
      await mutateAsync(fetchData);
    } else {
      await mutateAsyncNoPhoto(fetchDataNoPhoto);
    }

    if (isError || isErrorNoPhoto) console.log(error || errorNoPhoto);
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          title: '',
          description: '',
          price: 0,
          file1: '',
          file2: '',
          file3: '',
          file4: '',
          file5: ''
        }}
        validationSchema={NewAdSchema}
        onSubmit={async (values: Values) => {
          await onSubmitHandler(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleSubmit,
          handleChange,
          handleBlur,
          setFieldValue,
          isValid
        }) => (
          <S.NewAdForm>
            <S.TitleWrapper>
              <S.BackArrowWrapper onClick={onHistoryBackHandler}>
                <BackArrowIcon />
              </S.BackArrowWrapper>
              <S.Title>Новое объявление</S.Title>
            </S.TitleWrapper>
            {!isMobile && <S.Title>Новое объявление</S.Title>}
            <S.LabelWrapper>
              <S.Label htmlFor="title">Название</S.Label>
              <S.NameInput
                type="text"
                name="title"
                placeholder="Введите название"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              {errors.title && touched.title && (
                <S.ErrorFieldTitle>{errors.title}</S.ErrorFieldTitle>
              )}
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.Label htmlFor="description">Описание</S.Label>
              <S.DescriptionInput
                name="description"
                placeholder="Введите описание"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
              {errors.description && touched.description && (
                <S.ErrorFieldDescription>{errors.description}</S.ErrorFieldDescription>
              )}
            </S.LabelWrapper>
            <S.LabelWrapper>
              <S.PhotoTitlesWrapper>
                <S.PhotoWrapperTitle>Фотографии товара</S.PhotoWrapperTitle>
                <S.PhotoWrapperSubTitle>не более 5 штук</S.PhotoWrapperSubTitle>
              </S.PhotoTitlesWrapper>
              <S.PhotosWrapper>
                <S.PhotoWrapper>
                  <S.PhotoLabel htmlFor={'file1'}>
                    {photo1 && <S.PhotoPreview src={photo1 as string} width="90" height="90" />}
                    <S.PhotoInput
                      type="file"
                      id="file1"
                      name="file1"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.currentTarget.files) {
                          setFieldValue('file1', e.currentTarget.files[0]);
                          readURL(e, '1');
                        }
                      }}
                    />
                  </S.PhotoLabel>
                </S.PhotoWrapper>
                <S.PhotoWrapper>
                  <S.PhotoLabel htmlFor={'file2'}>
                    {photo2 && <S.PhotoPreview src={photo2 as string} width="90" height="90" />}
                    <S.PhotoInput
                      type="file"
                      id="file2"
                      name="file2"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.currentTarget.files) {
                          setFieldValue('file2', e.currentTarget.files[0]);
                          readURL(e, '2');
                        }
                      }}
                    />
                  </S.PhotoLabel>
                </S.PhotoWrapper>
                <S.PhotoWrapper>
                  <S.PhotoLabel htmlFor={'file3'}>
                    {photo3 && <S.PhotoPreview src={photo3 as string} width="90" height="90" />}
                    <S.PhotoInput
                      type="file"
                      id="file3"
                      name="file3"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.currentTarget.files) {
                          setFieldValue('file3', e.currentTarget.files[0]);
                          readURL(e, '3');
                        }
                      }}
                    />
                  </S.PhotoLabel>
                </S.PhotoWrapper>
                <S.PhotoWrapper>
                  <S.PhotoLabel htmlFor={'file4'}>
                    {photo4 && <S.PhotoPreview src={photo4 as string} width="90" height="90" />}
                    <S.PhotoInput
                      type="file"
                      id="file4"
                      name="file4"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.currentTarget.files) {
                          setFieldValue('file4', e.currentTarget.files[0]);
                          readURL(e, '4');
                        }
                      }}
                    />
                  </S.PhotoLabel>
                </S.PhotoWrapper>
                <S.PhotoWrapper>
                  <S.PhotoLabel htmlFor={'file5'}>
                    {photo5 && <S.PhotoPreview src={photo5 as string} width="90" height="90" />}
                    <S.PhotoInput
                      type="file"
                      id="file5"
                      name="file5"
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        if (e.currentTarget.files) {
                          setFieldValue('file5', e.currentTarget.files[0]);
                          readURL(e, '5');
                        }
                      }}
                    />
                  </S.PhotoLabel>
                </S.PhotoWrapper>
              </S.PhotosWrapper>
            </S.LabelWrapper>
            <S.PriceWrapper>
              <S.Label htmlFor="price">Цена</S.Label>
              <S.PriceWrapper>
                <S.PriceInput
                  type="number"
                  name="price"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.price}
                />
                <S.PriceCurrency>₽</S.PriceCurrency>
                {errors.price && touched.price && (
                  <S.ErrorFieldPrice>{errors.price}</S.ErrorFieldPrice>
                )}
              </S.PriceWrapper>
            </S.PriceWrapper>
            <UIButton
              buttonClassType="edit"
              text={isLoading || isLoadingNoPhoto ? 'Отправка' : 'Опубликовать'}
              type="submit"
              disabled={!isValid || isLoading || isLoadingNoPhoto}
              onClick={handleSubmit}
            />
            {isError && <span>{(error as ApiError).message}</span>}
            {isErrorNoPhoto && <span>{(errorNoPhoto as ApiError).message}</span>}
          </S.NewAdForm>
        )}
      </Formik>
    </S.Container>
  );
};

export default NewAd;
