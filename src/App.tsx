import { useState } from 'react';
import { Button } from './components/ui/button';

export const App = () => {
	const [message, setMessage] = useState('click me motherfucker');
	return (
		<div>
			<Button onClick={() => setMessage('ouch')}>{message}</Button>
		</div>
	);
};
