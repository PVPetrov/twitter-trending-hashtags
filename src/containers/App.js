import React from 'react';
import AppContainer from '../layout/AppContainer';
import Header from './Header';
import HashTable from './HashTable';


export const App = () => <AppContainer
	header={<Header />}
	main={<HashTable />} />

export default App;