import React from 'react';

import * as S from './style';

type buttonClassTypes =
  | 'auth'
  | 'save'
  | 'edit'
  | 'delete'
  | 'placement'
  | 'search'
  | 'signIn'
  | 'signUp'
  | 'signUpSecond'
  | 'phone'
  | 'find'
  | 'review';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onClick?: () => void;
  buttonClassType: buttonClassTypes;
  text?: string;
  children?: React.ReactElement;
}

const UIButton = ({ children, onClick, buttonClassType, text, ...props }: Props) => {
  switch (buttonClassType) {
    case 'save':
      return (
        <S.SaveButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.SaveButton>
      );
    case 'placement':
      return (
        <S.PlacementButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.PlacementButton>
      );
    case 'search':
      return (
        <S.SearchButton onClick={onClick} type="submit" {...props}>
          {text}
          {children}
        </S.SearchButton>
      );
    case 'auth':
      return (
        <S.AuthButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.AuthButton>
      );
    case 'signIn':
      return (
        <S.SignInButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.SignInButton>
      );
    case 'signUp':
      return (
        <S.SignUpButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.SignUpButton>
      );
    case 'signUpSecond':
      return (
        <S.SignUpButtonSecond onClick={onClick} {...props}>
          {text}
          {children}
        </S.SignUpButtonSecond>
      );
    case 'phone':
      return (
        <S.PhoneButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.PhoneButton>
      );
    case 'edit':
      return (
        <S.EditAdButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.EditAdButton>
      );
    case 'delete':
      return (
        <S.DeleteButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.DeleteButton>
      );
    case 'review':
      return (
        <S.ReviewButton onClick={onClick} {...props}>
          {text}
          {children}
        </S.ReviewButton>
      );
    default:
      return <S.SaveButton onClick={onClick} {...props} />;
  }
};

export default UIButton;
