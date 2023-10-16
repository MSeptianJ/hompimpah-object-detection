import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from 'react-router-dom';
import './assets/style/index.css';
import About from './routes/about';
import ErrorPage from './routes/ErrorPage';
import Multi from './routes/multi';
import Root from './routes/Root';
import Single from './routes/single';
import Start from './routes/start';
import Tutorial from './routes/tutorial';

const client = new QueryClient();

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<Root />} errorElement={<ErrorPage />}>
			<Route errorElement={<ErrorPage />} />
			<Route index element={<Start />} />
			<Route path="tutorial" element={<Tutorial />} />
			<Route path="about" element={<About />} />
			<Route path="single" element={<Single />} />
			<Route path="multi" element={<Multi />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<RouterProvider router={router} />
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
