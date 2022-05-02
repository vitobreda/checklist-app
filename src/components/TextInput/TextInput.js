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
    <Styles.InputText
      value={field.value}
      onChangeText={field.onChange}
      placeholder={placeholder}
    />
  );
}

export default Input;
