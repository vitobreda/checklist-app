import React from 'react';
import {useController, useForm} from 'react-hook-form';
import {View, Button, Switch, Text} from 'react-native';
import Container from '../components/Container';
import TextInput from '../components/TextInput';

function ChecklistCreate() {
  const {control, handleSubmit} = useForm();

  const onSubmit = data => console.log(data);

  const CustomSwitch = ({name, control}) => {
    const {field} = useController({
      control,
      defaultValue: '',
      name,
    });

    return (
      <View style={{alignItems: 'flex-start'}}>
        <Text>Teve supervisão</Text>
        <Switch value={field.value} onValueChange={field.onChange} />
      </View>
    );
  };

  return (
    <Container>
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
      <CustomSwitch name="had_supervision" control={control} />
      <Button title="Adicionar" onPress={handleSubmit(onSubmit)} />
    </Container>
  );
}

export default ChecklistCreate;
