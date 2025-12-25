import { useEffect, useState } from 'react';
import { Button, Card, Chip, ScrollShadow } from '@heroui/react';
import { TextGenerateEffect } from './components/ui/text-generate-effect';
import { ReactLenis } from 'lenis/react';
import TabLink from './components/tab-link';
import Chevron from './components/chevron-down';
import {
	useTime,
	motion,
	useMotionValueEvent,
	useScroll,
	useTransform,
} from 'motion/react';
import { FaReact } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';

/*

Hey there, fancy meeting you here.
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣉⡥⠶⢶⣿⣿⣿⣿⣷⣆⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢡⡞⠁⠀⠀⠤⠈⠿⠿⠿⠿⣿⠀⢻⣦⡈⠻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠘⡁⠀⢀⣀⣀⣀⣈⣁⣐⡒⠢⢤⡈⠛⢿⡄⠻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠉⠐⠄⡈⢀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠇⢠⣿⣿⣿⣿⡿⢿⣿⣿⣿⠁⢈⣿⡄⠀⢀⣀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⣡⣶⣶⣬⣭⣥⣴⠀⣾⣿⣿⣿⣶⣾⣿⣧⠀⣼⣿⣷⣌⡻⢿⣿
⣿⣿⠟⣋⣴⣾⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⡿⢸⣿⣿⣿⣿⣷⠄⢻
⡏⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢂⣭⣿⣿⣿⣿⣿⠇⠘⠛⠛⢉⣉⣠⣴⣾
⣿⣷⣦⣬⣍⣉⣉⣛⣛⣉⠉⣤⣶⣾⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿

*/

function App() {
	return (
		<>
			<ReactLenis root />
			<TabLink />
			<Chevron />
			<motion.div className='flex flex-col h-dvh justify-center pl-7 md:pl-20'>
				<TextGenerateEffect words='Hello, I am Qi Yang.' />

				<div className=' font-tinos text-2xl bg-black text-white w-fit pl-2 pr-2'>
					UX & Full-stack Web Developer.
				</div>
				<div className='mt-10 flex flex-row gap-2'>
					<motion.button initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
						<Button
							data-hovered={false}
							variant='ghost'
							className='font-tinos font-bold rounded-xs border-gray-950 border-2 bg-transparent'
						>
							Blog
						</Button>
					</motion.button>{' '}
					<motion.div initial={{ scale: 1 }} whileHover={{ scale: 1.05 }}>
						<Button
							onClick={() => {document.getElementById('projects').scrollIntoView({behavior: 'smooth'});}}
							variant='ghost'
							className='font-tinos font-bold rounded-xs border-gray-950 border-2 bg-transparent'
						>
							Projects
						</Button>
					</motion.div>
				</div>
			</motion.div>
			<div id='projects' className='flex flex-col w-dvw h-dvh items-center justify-center bg-background pt-10 pb-10'>
				<div className='flex flex-col gap-3 items-center pb-20'>
					{' '}
					<h2 className='text-3xl font-tinos font-bold'>Recent Projects</h2>
					{/*<h4 className='font-tinos text-xl opacity-60 max-w-lg text-center'>
						A collection of projects that I have amassed throughout my years of
						development.
					</h4>*/}
				</div>{' '}
				<Card className='flex flex-col justify-around gap-4 h-64 w-xl max-w-6/12 bg-card rounded-md'>
					<Card.Header className='flex gap-2.5'>
						<img
							alt='msssa'
							aria-hidden='true'
							className='blur-xs opacity-20 absolute inset-0 h-full w-full object-cover pointer-events-none'
							src='/msssa.png'
						/>
						<div className='flex flex-row gap-2 items-center'>
							<Card.Title className='font-tinos font-bold text-2xl'>MSSSA</Card.Title>
							<Card.Description>
								<Chip
									size='sm'
									className='rounded-xs bg-none text-gray-600 pl-2 pr-2 text-[11px]'
								>
									2023
								</Chip>
							</Card.Description>
						</div>
						<Card.Content className='font-tinos'>
							A website designed to log students' attendance. Everything from the
							authentication, to the data storage and analytics are powered by
							Supabase. I have put a greater emphasis into the animations of the
							website, giving it life and bubbliness.
						</Card.Content>
					</Card.Header>
					<Card.Footer>
						<div className='flex gap-1'>
							<Chip className='rounded-xs bg-gray-950 text-blue-100 text-xs'>
								<FaReact />
								React
							</Chip>
							<Chip className='rounded-xs bg-gray-950 text-blue-400 text-xs'>
								<SiMui />
								Material UI
							</Chip>
						</div>
					</Card.Footer>
				</Card>
			</div>
		</>
	);
}

export default App;
