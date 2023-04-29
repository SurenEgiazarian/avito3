import UIButton from '../UI/UIButton';

import { useState } from 'react';

import * as S from './style';

type Props = {
  phone: string;
};

const SellerPhone = ({ phone }: Props) => {
  const [showPhone, setShowPhone] = useState(false);

  const hidePhone = () => {
    if (!phone) {
      return 'Номер не указан';
    }
    return phone.substring(0, phone.length - 7) + 'XXX XXX';
  };

  const hidePhoneHandler = () => {
    if (!phone) return;

    setShowPhone((prevState) => !prevState);
  };

  return (
    <UIButton buttonClassType="phone" onClick={hidePhoneHandler}>
      <S.PhoneNumber>
        <span>Показать телефон</span>
        <span>{showPhone ? phone : hidePhone()}</span>
      </S.PhoneNumber>
    </UIButton>
  );
};

export default SellerPhone;
