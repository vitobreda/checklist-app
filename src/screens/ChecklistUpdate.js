import React from 'react';
import {ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Switch from '../components/Switch';

function ChecklistUpdate({route}) {
  const {checklist} = route.params;
  const {control, handleSubmit} = useForm({
    defaultValues: {
      ...checklist,
    },
  });

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
          name="type"
          control={control}
          placeholder="Tipo do checklist"
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
        <Switch
          name="had_supervision"
          title="teve supervisão"
          control={control}
        />
        <Button title="Alterar" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Container>
  );
}

export default ChecklistUpdate;
