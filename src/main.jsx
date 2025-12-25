import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';

// Fonts
import '@fontsource-variable/inter';
import '@fontsource-variable/montserrat';
import '@fontsource/libre-barcode-128-text';
import '@fontsource/tinos';

createRoot(document.getElementById('root')).render(
	<StrictMode>
			<App />
	</StrictMode>
);
