import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {ApolloProvider} from "react-apollo";
import client from './apollo';

window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;

ReactDOM.render((

  <ApolloProvider client={client}>
      <App/>
  </ApolloProvider>

), document.getElementById('root'));
registerServiceWorker();
