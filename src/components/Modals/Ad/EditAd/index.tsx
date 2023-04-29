import React, { ChangeEvent, useState } from 'react';
import { Formik } from 'formik';
import { isMobile } from 'react-device-detect';

import UIButton from '../../../UI/UIButton';
import DeletePhotoIcon from '../../../Icons/DeletePhotoIcon';
import BackArrowIcon from '../../../Icons/BackArrowIcon';

import { useNavigate, useParams } from 'react-router-dom';
import { useMutation, useQueryClient } from 'react-query';

import { EditAdSchema } from '../../../../schemas';
import { API_URL, SkyvitoService } from '../../../../services/skyvito.service';
import { ApiError, EditAdProps, Images } from '../../../../types/types';

import * as S from '../style';

type Props = {
  title: string | undefined;
  description: string | undefined;
  price: number | undefined;
  img_urls: Images[] | undefined;
  showEditAdForm?: () => void;
};

type Values = {
  title: string;
  description: string;
  price: number;
  file0: string;
  file1: string;
  file2: string;
  file3: string;
  file4: string;
};

const EditAd = ({ title, description, price, img_urls, showEditAdForm }: Props) => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const onHistoryBackHandler = () => {
    navigate(-1);
  };

  const [photo, setPhoto] = useState<File | undefined>();
  const [currentPhoto, setCurrentPhoto] = useState<string | ArrayBuffer | null>();

  const currentPhotoNumber = img_urls?.length || 0;

  const { id } = useParams();

  const { mutateAsync, isError, error, isLoading } = useMutation(
    'edit ad',
    (data: EditAdProps) => SkyvitoService.editAd(data, id as string),
    {
      onSuccess: () => {
        queryClient.invalidateQueries('ads');
        queryClient.invalidateQueries(`ad_${id}`);

        if (showEditAdForm) {
          showEditAdForm();
        }

        onHistoryBackHandler();
      }
    }
  );

  const { mutateAsync: mutateAsyncDeletePhoto } = useMutation(
    'delete photo',
    (url: string) => SkyvitoService.deletePhotoInAd(id as string, url),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`ad_${id}`);
      }
    }
  );

  const { mutateAsync: mutateAsyncAddPhoto } = useMutation(
    'add photo',
    (data: FormData) => SkyvitoService.addPhotoInAd(id as string, data),
    {
      onSuccess: () => {
        queryClient.invalidateQueries(`ad_${id}`);
      }
    }
  );

  const readURL = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();

      reader.onload = function (e) {
        if (e.target) {
          setCurrentPhoto(e.target.result);
        }
      };

      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const createFormData = (photoFile: File | undefined) => {
    const formData = new FormData();

    if (photoFile) {
      formData.append('file', photoFile);
      return formData;
    }

    return null;
  };

  const deletePhotoHandler = async (url: string) => {
    await mutateAsyncDeletePhoto(url);
  };

  const onSubmitHandler = async (values: Values) => {
    const formData = createFormData(photo);

    const fetchData = {
      title: values.title,
      description: values.description,
      price: values.price
    };

    await mutateAsync(fetchData);

    if (formData) {
      await mutateAsyncAddPhoto(formData);
    }

    if (isError) console.log(error);
  };

  return (
    <S.Container>
      <Formik
        initialValues={{
          title: title || '',
          description: description || '',
          price: price || 0,
          file0: `${API_URL}${!img_urls || img_urls[0]?.url}` || '',
          file1: `${API_URL}${!img_urls || img_urls[1]?.url}` || '',
          file2: `${API_URL}${!img_urls || img_urls[2]?.url}` || '',
          file3: `${API_URL}${!img_urls || img_urls[3]?.url}` || '',
          file4: `${API_URL}${!img_urls || img_urls[4]?.url}` || ''
        }}
        validationSchema={EditAdSchema}
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
              <S.Title>Редактировать</S.Title>
            </S.TitleWrapper>
            {!isMobile && <S.Title>Редактировать объявление</S.Title>}
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
              <S.PhotosWrapper>
                {img_urls && img_urls.length < 5 && (
                  <S.PhotoWrapper>
                    <S.PhotoLabel htmlFor={`file${currentPhotoNumber}`}>
                      {photo && (
                        <S.PhotoPreview src={currentPhoto as string} width="90" height="90" />
                      )}
                      <S.PhotoInput
                        type="file"
                        id={`file${currentPhotoNumber}`}
                        name={`file${currentPhotoNumber}`}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          if (e.currentTarget.files) {
                            setFieldValue(`file${currentPhotoNumber}`, e.currentTarget.files[0]);
                            setPhoto(e.currentTarget.files[0]);
                            readURL(e);
                          }
                        }}
                      />
                    </S.PhotoLabel>
                  </S.PhotoWrapper>
                )}
                {img_urls?.map(({ url }, i) => (
                  <S.PhotoWrapper key={url}>
                    <S.DeletePhotoButton onClick={() => deletePhotoHandler(url)}>
                      <DeletePhotoIcon />
                    </S.DeletePhotoButton>
                    <S.PhotoLabel htmlFor={`file${i}`}>
                      <S.PhotoPreview src={`${API_URL}${url}` as string} width="90" height="90" />
                      <S.PhotoInput
                        type="file"
                        id={`file${i}`}
                        name={`file${i}`}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => {
                          if (e.currentTarget.files) {
                            setFieldValue(`file${i}`, e.currentTarget.files[0]);
                          }
                        }}
                      />
                    </S.PhotoLabel>
                  </S.PhotoWrapper>
                ))}
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
              buttonClassType="save"
              text={isLoading ? 'Сохранение' : 'Сохранить'}
              type="submit"
              disabled={!isValid}
              onClick={handleSubmit}
            />
            {isError && <span>{(error as ApiError).message}</span>}
          </S.NewAdForm>
        )}
      </Formik>
    </S.Container>
  );
};

export default EditAd;
