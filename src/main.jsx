import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import {
	Route,
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
} from 'react-router-dom';
import './assets/style/index.css';
import Root from './routes/Root';
import About from './routes/about';
import ErrorPage from './routes/error';
import Single from './routes/single';
import Start from './routes/start';
import Survey from './routes/survey';
import Tutorial from './routes/tutorial';

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
		<Suspense fallback={<p>Loading...</p>}>
			<RouterProvider router={router} />
		</Suspense>
	</React.StrictMode>
);
