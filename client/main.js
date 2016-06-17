import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';
import { debounce } from 'throttle-debounce';
import { render } from 'react-dom';
import { AutoForm } from 'uniforms';
import { TextField, ListField, ListItemField } from 'uniforms-unstyled';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { textsSchema } from '../imports/api/texts.js';

const testModel = {
};

class TestForm extends Component {
  constructor(props) {
    super(props);
    this.edit = debounce(500, this.edit);
  }

  edit(doc) {
    textsSchema.clean(doc);
    console.log(doc);
  }
  render() {
    return (
      <AutoForm
        schema={ textsSchema }
        model={ testModel }
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

Meteor.startup(() => {
  render(<TestForm/>, document.getElementById('react-root'))
});
