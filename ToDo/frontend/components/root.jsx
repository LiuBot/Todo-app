// This serves to  wrap your App component with a react-redux Provider.

import React from 'react';
import {Provider} from 'react-redux';
import App from './app';

const Root = ({store}) => (
	<Provider store={store}>
		<App/>
	</Provider>
	)

export default Root;