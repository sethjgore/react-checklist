import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
 
import List from '../imports/ui/List.jsx';
 
Meteor.startup(() => {
  render(<List />, document.getElementById('renderBody'));
});