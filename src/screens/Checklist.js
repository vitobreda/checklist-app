import React from 'react';
import {FlatList} from 'react-native';
import {Data} from '../mock';
import Button from '../components/Button';
import Container from '../components/Container';
import ListItem from '../components/ListItem';

function Checklist({navigation}) {
  const {checklists} = Data;

  const navigateToChecklistCreate = () => {
    navigation.navigate('CheckList Create');
  };

  const renderItem = ({item}) => {
    return (
      <ListItem
        item={item}
        onPress={() =>
          navigation.navigate('Checklist Details', {checklist: item})
        }
      />
    );
  };

  return (
    <Container>
      <FlatList
        data={checklists}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 16}}
      />
      <Button title="Novo checklist" onPress={navigateToChecklistCreate} />
    </Container>
  );
}

export default Checklist;
