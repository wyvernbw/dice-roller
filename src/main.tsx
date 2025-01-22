import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { App } from './App';
import { ThemeProvider } from './components/theme-provider';
import { IoProvider } from './components/io-provider';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<IoProvider>
			<ThemeProvider defaultTheme="dark">
				<App />
			</ThemeProvider>
		</IoProvider>
	</StrictMode>
);
