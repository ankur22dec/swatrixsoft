import React, { useReducer } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './pages/layout';

import './App.scss';
import CookieConsent from 'react-cookie-consent';

export const MainContext: any = React.createContext(null);

export const initState = {
	allowFlag: false
}

export const reducer = (state: any, action: any) => {
	switch (action.type) {
		case "SET_ALLOW": {
			return {
				allowFlag: action.flag
			}
		}
		default: {
			return initState;
		}
	}
}

function App() {
	const [redux, dispatch]: any = useReducer(reducer, initState);

	return (
		<div className="mainClassId">
			<MainContext.Provider value={{ store: redux, dispatch }}>
				<Router>
					<Layout allowThankYou={redux.allowFlag} dispatch={dispatch} />
					<CookieConsent location="bottom" style={{ background: '#000', textAlign: 'left' }} buttonStyle={{ color: "#000", background: "#fff", fontSize: "14px" }} buttonText="yes , I Accept Cookies  " expires={365}>This Website Uses Cookies in order to offer you most relevant information.Please accept cookies for optimal performance </CookieConsent>
				</Router>
			</MainContext.Provider>
		</div>
	);
}

export default App;
