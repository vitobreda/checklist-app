import React from 'react';
import { View, Text } from 'react-native';
import { Data } from '../mock';

function ChecklistDetails() {
    const { checklists } = Data;
    const checklist = checklists[0];

    return (
        <View>
            <Text>{`id: ${checklist.id}`}</Text>
            <Text>{`type: ${checklist.type}`}</Text>
            <Text>{`amount_of_milk_produced: ${checklist.amount_of_milk_produced}`}</Text>
            <Text>{`number_of_cows_head: ${checklist.number_of_cows_head}`}</Text>
            <Text>{`had_supervision: ${checklist.had_supervision}`}</Text>
            <Text>{`farm name: ${checklist.farmer.name}`}</Text>
            <Text>{`farm city: ${checklist.farmer.city}`}</Text>
            <Text>{`farmer: ${checklist.from.name}`}</Text>
            <Text>{`supervisor name: ${checklist.to.name}`}</Text>
            <Text>{`created_at: ${checklist.created_at}`}</Text>
            <Text>{`updated_at: ${checklist.updated_at}`}</Text>
        </View>
    );
};

export default ChecklistDetails;