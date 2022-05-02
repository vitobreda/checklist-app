import React from 'react';
import Styles from './Switch.styles';
import {useController} from 'react-hook-form';

function Switch({name, control, title}) {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>
      <Styles.Switch value={field.value} onValueChange={field.onChange} />
    </Styles.Container>
  );
}

export default Switch;
