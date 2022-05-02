import React from 'react';
import {useForm} from 'react-hook-form';
import {ScrollView} from 'react-native';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import TypePicker from '../components/TypePicker';
import Button from '../components/Button';
import Switch from '../components/Switch';

function ChecklistCreate() {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => console.log(data);

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextInput
          name="from.name"
          control={control}
          placeholder="Nome do fazendeiro"
        />
        <TextInput
          name="farmer.name"
          control={control}
          placeholder="Nome da fazenda"
        />
        <TextInput
          name="farmer.city"
          control={control}
          placeholder="Nome da cidade"
        />
        <TextInput
          name="to.name"
          control={control}
          placeholder="Nome do supervisor"
        />

        <TextInput
          name="amount_of_milk_produced"
          control={control}
          placeholder="Quantidade de leite"
        />
        <TextInput
          name="number_of_cows_head"
          control={control}
          placeholder="Quantidade de cabeça de gado"
        />
        <TypePicker name="type" control={control} />
        <Switch
          name="had_supervision"
          title="Teve supervisão"
          control={control}
        />
        <Button title="Adicionar" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Container>
  );
}

export default ChecklistCreate;
