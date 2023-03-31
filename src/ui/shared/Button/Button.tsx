import React from 'react';

import Button from '@mui/material/Button';

// import ButtonWrapper from './Button.styles';

type ButtonType = {
  children: JSX.Element;
  onClick: () => void;
};

export const MyButton: React.FC<ButtonType> = (props) => {
  return (
    <Button
      color="inherit"
      variant="outlined"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};

export default MyButton;
