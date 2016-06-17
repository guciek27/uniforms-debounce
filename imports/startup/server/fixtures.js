import { Meteor } from 'meteor/meteor';
import { Texts } from '../../api/texts';

const texts = [{
  title: 'Test texts',
}];

texts.forEach(({ title }) => {
  const texts = Texts.findOne();

  if (!texts) {
    const textId = Texts.insert({ title: title });
    console.log(textId);
  }
});
