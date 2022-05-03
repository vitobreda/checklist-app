import React, {useMemo} from 'react';
import {ScrollView} from 'react-native';
import Button from '../components/Button';
import Container from '../components/Container';
import ListItem from '../components/ListItem';
import ChecklistContext from '../models/Checklist';

const {useQuery} = ChecklistContext;

function Checklist({navigation}) {
  const result = useQuery('Checklist');
  const checklists = useMemo(() => result.sorted('created_at'), [result]);

  const navigateToChecklistCreate = () => {
    navigation.navigate('CheckList Create');
  };

  const renderItem = (item, index) => {
    return (
      <ListItem
        key={index}
        item={item}
        onPress={() =>
          navigation.navigate('Checklist Details', {
            checklist_id: item.id,
          })
        }
      />
    );
  };

  //TODO: change to flatlist and fix bug when add a new checklist
  return (
    <Container>
      <ScrollView showsHorizontalScrollIndicator={false}>
        {checklists && checklists.map(renderItem)}
      </ScrollView>
      <Button title="Novo checklist" onPress={navigateToChecklistCreate} />
    </Container>
  );
}

export default Checklist;
