import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './assets/style/index.css';
import ErrorPage from './routes/ErrorPage';
import Root from './routes/Root';
import About from './routes/about';
import Single from './routes/single';
import Start from './routes/start';
import Survey from './routes/survey';
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
			<Route path="survey" element={<Survey />} />
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<QueryClientProvider client={client}>
			<Suspense fallback={<p>Loading...</p>}>
				<RouterProvider router={router} />
			</Suspense>
			<ReactQueryDevtools />
		</QueryClientProvider>
	</React.StrictMode>
);
