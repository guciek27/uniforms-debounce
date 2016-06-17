import { Meteor } from 'meteor/meteor';
import { Texts } from './texts';

Meteor.methods({
  updateText({textId, textValue}) {
    Texts.update(textId, {$setOnInsert: { text: textValue } });
  }
});
