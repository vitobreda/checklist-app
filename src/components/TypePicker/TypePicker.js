import React from 'react';
import Styles from './TypePicker.styles';
import {useController} from 'react-hook-form';
import StyledComponents from 'styled-components';

function TypePicker({name, control}) {
  const {field} = useController({
    control,
    defaultValue: '',
    name,
  });

  return (
    <Styles.Container>
      <Styles.Description>Tipo</Styles.Description>
      <Styles.PickerWrapper>
        <Styles.TypePicker
          selectedValue={field.value}
          onValueChange={field.onChange}>
          <Styles.TypeItem label="BPA" value="BPA" />
          <Styles.TypeItem label="Antibiótico" value="Antibiótico" />
          <Styles.TypeItem label="BPF" value="BPF" />
        </Styles.TypePicker>
      </Styles.PickerWrapper>
    </Styles.Container>
  );
}

export default TypePicker;
