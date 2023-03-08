import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Registration from './components/Registration/Registration';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<BrowserRouter>
		<React.StrictMode>
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/registration' element={<Registration />} />
			</Routes>
		</React.StrictMode>
	</BrowserRouter>
);
