import React from 'react';
import {ScrollView} from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import Info from '../components/Info';
import ChecklistContext from '../models/Checklist';

const {useObject} = ChecklistContext;

function ChecklistDetails({route, navigation}) {
  const {checklist_id} = route.params;
  const checklist = useObject('Checklist', checklist_id);
  const created_at = new Date(checklist.created_at);
  const updated_at = new Date(checklist.updated_at);

  const navigateToChecklistUpdate = () => {
    navigation.navigate('Checklist Update', {checklist});
  };

  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Info.Row>
          <Info.Column
            title="Identificador"
            description={checklist.id.toString()}
          />
          <Info.Column title="Tipo" description={checklist.type} />
        </Info.Row>
        <Info.Row>
          <Info.Column
            title="Quant. leite"
            description={checklist.amount_of_milk_produced}
          />
          <Info.Column
            title="Quant. cabeças"
            description={checklist.number_of_cows_head}
          />
        </Info.Row>
        <Info.Row>
          <Info.Column
            title="Teve supervisão"
            description={checklist.had_supervision ? 'Sim' : 'Não'}
          />
          <Info.Column title="Cidade" description={checklist.farmer.city} />
        </Info.Row>
        <Info.Row>
          <Info.Column
            title="Nome da fazenda"
            description={checklist.farmer.name}
          />
        </Info.Row>
        <Info.Row>
          <Info.Column title="Fazendeiro" description={checklist.from.name} />
        </Info.Row>
        <Info.Row>
          <Info.Column title="Supervisor" description={checklist.to.name} />
        </Info.Row>
        <Info.Row>
          <Info.Column
            title="Data de cadastro"
            description={created_at.toLocaleString()}
          />
        </Info.Row>
        <Info.Row>
          <Info.Column
            title="Data de alteração"
            description={updated_at.toLocaleString()}
          />
        </Info.Row>

        <Button title="Editar checklist" onPress={navigateToChecklistUpdate} />
      </ScrollView>
    </Container>
  );
}

export default ChecklistDetails;
