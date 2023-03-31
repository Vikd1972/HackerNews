import React from 'react';

import ItemNoteWrapper from './ItemNote.styles';

type ItemNoteType = {
  children: JSX.Element;
  text: string | number;
};

export const ItemNote: React.FC<ItemNoteType> = (props) => {
  return (
    <ItemNoteWrapper>
      <div className="icon">
        {props.children}
      </div>
      <p className="text">
        {props.text}
      </p>
    </ItemNoteWrapper>
  );
};

export default ItemNote;
