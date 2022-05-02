import React from 'react';
import Styles from './TextInput.styles';
import {useController} from 'react-hook-form';

function Input({name, control, placeholder}) {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <Styles.Container>
      <Styles.Description>{placeholder}</Styles.Description>
      <Styles.InputText value={field.value} onChangeText={field.onChange} />
    </Styles.Container>
  );
}

export default Input;
