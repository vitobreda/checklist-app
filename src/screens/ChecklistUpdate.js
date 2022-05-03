import React, {useCallback} from 'react';
import {ScrollView} from 'react-native';
import {useForm} from 'react-hook-form';
import Container from '../components/Container';
import TextInput from '../components/TextInput';
import Button from '../components/Button';
import Switch from '../components/Switch';
import TypePicker from '../components/TypePicker';
import ChecklistContext from '../models/Checklist';

const {useRealm} = ChecklistContext;

function ChecklistUpdate({route}) {
  const realm = useRealm();
  const {checklist} = route.params;
  const {control, handleSubmit} = useForm({
    defaultValues: checklist,
  });

  const handleUpdateChecklist = useCallback(
    updated_checklist => {
      realm.write(() => {
        checklist.type = updated_checklist.type;
        checklist.amount_of_milk_produced =
          updated_checklist.amount_of_milk_produced;
        checklist.number_of_cows_head = updated_checklist.number_of_cows_head;
        checklist.had_supervision = updated_checklist.had_supervision;
        checklist.farmer = updated_checklist.farmer;
        checklist.from = updated_checklist.from;
        checklist.to = updated_checklist.to;
        checklist.updated_at = new Date();
      });
    },
    [realm, checklist],
  );

  const onSubmit = data => {
    handleUpdateChecklist(data);
  };

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
        <Button title="Alterar" onPress={handleSubmit(onSubmit)} />
      </ScrollView>
    </Container>
  );
}

export default ChecklistUpdate;
