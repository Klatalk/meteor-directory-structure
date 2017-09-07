import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

//Layouts
import { MainLayout } from '../../ui/layouts/MainLayout.jsx';

import { Index } from '../../ui/components/index.jsx';


Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route component={MainLayout}>
        <Route path="/" component={Index} />
      </Route>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
