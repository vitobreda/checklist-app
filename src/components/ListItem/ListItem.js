import React from 'react';
import Styles from './ListItem.styles';
import Info from '../Info';

function ListItem({item, onPress}) {
  const {from, farmer} = item;
  const date = new Date(item.created_at);
  return (
    <Styles.Container onPress={onPress}>
      <Info.Row>
        <Info.Column title="Fazendeiro" description={from.name} />
        <Info.Column title="Nome da fazenda" description={farmer.name} />
      </Info.Row>
      <Info.Row>
        <Info.Column title="Cidade" description={farmer.city} />
        <Info.Column
          title="Data de cadastro"
          description={date.toLocaleString()}
        />
      </Info.Row>
    </Styles.Container>
  );
}

export default ListItem;
