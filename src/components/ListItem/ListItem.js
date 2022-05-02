import React from 'react';
import {Text} from 'react-native';
import Styles from './ListItem.styles';

function ListItem({ item }) {
    const { from, farmer } = item;
    return (
        <Styles.Container>
            <Styles.Title>{`farmer name: ${from.name}`}</Styles.Title>
            <Styles.Description>{`farm name: ${farmer.name}`}</Styles.Description>
            <Styles.Description>{`city name: ${farmer.city}`}</Styles.Description>
            <Styles.Description>{`${item.created_at}`}</Styles.Description>
        </Styles.Container>
    );
};

export default ListItem;