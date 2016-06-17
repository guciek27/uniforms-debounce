import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { Texts } from '../imports/api/texts';
import { updateText } from '../imports/api/methods';
import { debounce } from 'throttle-debounce';
import { render } from 'react-dom';
import { AutoForm } from 'uniforms';
import { TextField, ListField, ListItemField } from 'uniforms-unstyled';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { textsSchema } from '../imports/api/texts.js';
import { createContainer } from 'meteor/react-meteor-data';

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.edit = debounce(500, this.edit);
  }

  edit(doc) {
    const { textsModel } = this.props;
    const cleanedDoc = textsSchema.clean(doc);

    Meteor.call('updateText', textsModel._id, cleanedDoc);
  }
  render() {
    const { textsModel } = this.props;

    return (
      <AutoForm
        schema={ textsSchema }
        model={ textsModel }
        autosave={ true }
        onSubmit={ doc => this.edit(doc) }
      >
        <TextField name="title" />
        <ListField name="testTexts" initialCount={1}>
          <ListItemField name="$">
            <TextField name="text" />
          </ListItemField>
        </ListField>
      </AutoForm>
    );
  }
}

const TestFormContainer = createContainer(() => {
  const subscriptionTexts = Meteor.subscribe('texts');

  return {
    textsModel: Texts.findOne(),
  };
}, TestForm);

Meteor.startup(() => {
  render(<TestFormContainer/>, document.getElementById('react-root'))
});
