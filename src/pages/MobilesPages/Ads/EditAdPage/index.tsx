import React from 'react';

import EditAd from '../../../../components/Modals/Ad/EditAd';

import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

import { SkyvitoService } from '../../../../services/skyvito.service';

const EditAdPage = () => {
  const { id } = useParams();

  const { data: response } = useQuery([`ad_${id}`, id], () => SkyvitoService.getAd(id), {
    enabled: !!id
  });

  return (
    <EditAd
      title={response?.data.title}
      description={response?.data.description}
      price={response?.data.price}
      img_urls={response?.data.images}
    />
  );
};

export default EditAdPage;
