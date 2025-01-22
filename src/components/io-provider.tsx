import { createContext } from 'react';
import { io } from 'socket.io-client';

export const IoContext = createContext(io());
export const IoProvider = ({ children }: { children: React.ReactNode }) => {
	return <IoContext.Provider value={io()}>{children}</IoContext.Provider>;
};
