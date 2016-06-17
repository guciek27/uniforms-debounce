import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';

export const Texts = new Mongo.Collection('texts');

export const textsSchema = new SimpleSchema({
  title: {
    type: String,
  },
  testTexts: {
    type: Array,
    optional: true,
  },
  'testTexts.$': {
    type: Object,
    optional: true,
  },
  'testTexts.$.text': {
    type: String,
    optional: true,
  },
});

Texts.attachSchema(textsSchema);
