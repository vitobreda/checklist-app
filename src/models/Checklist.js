import {ObjectId} from 'bson';
import {createRealmContext} from '@realm/react';

const farmerSchema = {
  name: 'Farmer',
  properties: {
    city: 'string',
    name: 'string',
  },
};

const fromSchema = {
  name: 'From',
  properties: {
    name: 'string',
  },
};

const toSchema = {
  name: 'To',
  properties: {
    name: 'string',
  },
};

export class CheckList {
  constructor({
    id = new ObjectId(id),
    type,
    amount_of_milk_produced,
    number_of_cows_head,
    had_supervision,
    farmer,
    from,
    to,
  }) {
    this.id = id;
    this.type = type;
    this.amount_of_milk_produced = amount_of_milk_produced;
    this.number_of_cows_head = number_of_cows_head;
    this.had_supervision = had_supervision;
    this.farmer = farmer;
    this.from = from;
    this.to = to;
    this.created_at = new Date();
    this.updated_at = new Date();
  }

  static schema = {
    name: 'Checklist',
    primaryKey: 'id',
    properties: {
      id: 'objectId',
      type: 'string',
      amount_of_milk_produced: 'string',
      number_of_cows_head: 'string',
      had_supervision: 'bool',
      farmer: 'Farmer',
      from: 'From',
      to: 'To',
      created_at: 'date',
      updated_at: 'date',
    },
  };
}

const config = {
  schema: [CheckList.schema, farmerSchema, fromSchema, toSchema],
  deleteRealmIfMigrationNeeded: true,
};

export default createRealmContext(config);
