import React from 'react';
import AppContainer from '../layout/AppContainer';
import Header from './Header';
import HashTable from './HashTable';
import Logo from '../components/Logo';
import WindowSizeProvider from './WindowSizeContext';


export const App = () => {
	return (
		<WindowSizeProvider>
			<AppContainer                                                                                     
				logo={<Logo src="/assets/img/twitter.png" />}
				header={<Header />}
				main={<HashTable />}  />
		</WindowSizeProvider>
	)
}

export default App;