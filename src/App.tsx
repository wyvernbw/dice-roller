import { useContext, useState } from 'react';
import { Button } from './components/ui/button';
import { IoContext } from './components/io-provider';

export const App = () => {
	const [message, setMessage] = useState('click me motherfucker');
	const io = useContext(IoContext);

	return (
		<div>
			<Button onClick={() => setMessage(msg => msg + '!')}>
				{message}
			</Button>
		</div>
	);
};
