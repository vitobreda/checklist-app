import React from 'react';
import { FlatList } from 'react-native'
import { Data } from '../mock';
import Container from '../components/Container';
import ListItem from '../components/ListItem';

function Home() {
    const { checklists } = Data;

    return (
        <Container>
            <FlatList
                data={checklists}
                renderItem={ListItem}
                keyExtractor={(item) => item.id}
            />
        </Container>
    );
};

export default Home;