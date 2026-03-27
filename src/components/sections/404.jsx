import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'motion/react';
import { Button } from '@heroui/react';

export default function Page404() {
	const [seconds, setSeconds] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (seconds !== 0) {
			setTimeout(() => {
				setSeconds(seconds - 1);
			}, 1000);
		} else if (seconds === 0) {
			navigate('/');
		}
	}, [seconds]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ delay: 1, duration: 1 }}
			className='pt-20 p-3 h-svh w-vw flex flex-col gap-30 justify-center items-center'
		>
			<div className='flex flex-col items-center'>
				<h1 className='text-6xl font-tinos'>[404]</h1>
				<h2 className='text-3xl font-tinos text-center'>
					{' '}
					Oops, the page you were looking for doesnt exist!
				</h2>
			</div>
			<div className='flex flex-col items-center gap-6'>
				<Button
					className='border-black border-3 rounded-sm text-lg p-5 font-jetbrains font-bold'
					onClick={() => {
						window.location.pathname = '/';
					}}
				>
					Return to the Home Page
				</Button>
				<h4 className='font-tinos text-lg text-gray-500 opacity-60'>
					Automically redirecting you in {seconds} second(s)...
				</h4>
			</div>
		</motion.div>
	);
}
