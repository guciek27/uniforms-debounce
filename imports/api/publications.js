import { Meteor } from 'meteor/meteor';
import { Texts } from './texts';

Meteor.publish('texts', function() {
  return Texts.find({}, { fields: { title: 1, testTexts: 1 } });
});
