import React from 'react';
import Styles from './Column.styles';

function Column({title, description}) {
  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Description>{description}</Styles.Description>
    </Styles.Container>
  );
}

export default Column;
