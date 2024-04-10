import React, { Suspense } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Page from '@demo/components/Page';
import store from '@demo/store';
import '@demo/styles/common.scss';
import { history } from './utils/history';
import Home from '@demo/pages/Home';

const Editor = React.lazy(() => import('@demo/pages/Editor'));

function App() {
  return (
    <Provider store={store}>
      <Page>
        <Suspense
          fallback={<div>Loading...</div>}
        >
          <Router history={history}>
            <Switch>
              <Route
                path='/'
                exact
                component={Home}
              />
              <Route
                path='/editor/new'
                component={Editor}
              />
              <Route
                path='/editor/:id'
                component={Editor}
              />
            </Switch>
          </Router>
        </Suspense>
      </Page>
    </Provider>
  );
}

export default App;
