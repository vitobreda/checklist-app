import React from 'react';
import Styles from './Button.styles';

function Button({title, onPress}) {
  return (
    <Styles.Container onPress={onPress}>
      <Styles.Title>{title}</Styles.Title>
    </Styles.Container>
  );
}

export default Button;
