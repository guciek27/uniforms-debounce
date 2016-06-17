import { Meteor } from 'meteor/meteor';
import { Texts } from './texts';

Meteor.methods({
  updateText(textId, update) {
    console.log(textId);
    console.log(update);

    return Texts.update(textId, { $set: { update } });
  }
});
