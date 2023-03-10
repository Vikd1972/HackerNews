import React from 'react';

import ButtonWrapper from './Button.styles';

type ButtonType = {
  children: JSX.Element;
  onClick: () => void;
};

export const Button: React.FC<ButtonType> = (props) => {
  return (
    <ButtonWrapper
      onClick={props.onClick}
    >
      {props.children}
    </ButtonWrapper>
  );
};

export default Button;
