import { Button } from '@/components/ui/button';
import { H1, H2 } from '@/components/ui/typography';
import { cn } from '@/lib/utils';
import { createLazyFileRoute } from '@tanstack/react-router';
import { Dices } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { motion } from 'motion/react';
import { useAtomValue, useSetAtom } from 'jotai';
import { mousePositionAtom } from '@/state';
import { Separator } from '@radix-ui/react-separator';

export const Route = createLazyFileRoute('/')({
	component: Index,
});

function Index() {
	const setCursorPosition = useSetAtom(mousePositionAtom);
	const [buttonHovered, setButtonHovered] = useState(false);

	const handleMouseMove = event => {
		console.log(event.clientX, event.clientY);
		setCursorPosition({ x: event.clientX, y: event.clientY });
	};

	return (
		<main
			onMouseMove={e => handleMouseMove(e)}
			className="w-screen h-screen p-4 flex flex-col items-center gap-2 text-center justify-center cursor-none"
		>
			<Cursor hovering={buttonHovered} />
			<H1 className="bg-gradient-to-r from-cyan-500 to-indigo-400 text-transparent bg-clip-text">
				Dice Roller
			</H1>
			<H2 className="text-[1.2rem] opacity-50 font-light">
				The dice roller to roll them all.
			</H2>
			<Button
				className={twMerge(
					`my-4 text-lg py-6 hover:cursor-none hover:scale-110 transition duration-100`
				)}
				onMouseEnter={() => setButtonHovered(true)}
				onMouseLeave={() => setButtonHovered(false)}
			>
				<Dices />
				Create room
			</Button>
			<div className="flex opacity-50 font-light">
				<Separator className="w-1/2 mx-4" orientation="horizontal" />
				OR
				<Separator className="w-1/2 mx-4" orientation="horizontal" />
			</div>
		</main>
	);
}

export const Cursor = ({ hovering = false }) => {
	const cursorPosition = useAtomValue(mousePositionAtom);
	return (
		<motion.div
			animate={{ x: cursorPosition.x, y: cursorPosition.y }}
			transition={{ duration: 0.1 }}
			className={twMerge(
				' absolute bg-transparent rounded-full w-6 aspect-square -top-3 -left-3 outline outline-white outline-2 pointer-events-none z-30  transition-[width] duration-300 ',
				hovering && 'w-14 backdrop-invert '
			)}
		></motion.div>
	);
};
