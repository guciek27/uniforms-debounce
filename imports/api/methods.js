import { Meteor } from 'meteor/meteor';
import { Texts } from './texts';

Meteor.methods({
  updateText({textId, update}) {
    Texts.update(textId, {$setOnInsert: { update} });
  }
});
