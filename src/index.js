import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// import { Menu } from 'semantic-ui-react';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
