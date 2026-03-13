'use client';
import { useEffect } from 'react';
import { motion, stagger, useAnimate } from 'motion/react';

export const TextGenerateEffect = ({
	words,
	className,
	filter = true,
	duration = 0.5,
}) => {
	const [scope, animate] = useAnimate();
	let wordsArray = words.split(' ');
	useEffect(() => {
		
		setTimeout(() => {
			animate(
				'span',
				{
					opacity: 1,
					filter: filter ? 'blur(0px)' : 'none',
				},
				{
					duration: duration ? duration : 2	,
					delay: stagger(0.2),
				}
			);
		}, 500)
	}, [scope.current]);

	const renderWords = () => {
		return (
			<motion.div ref={scope}>
				{wordsArray.map((word, idx) => {
					return (
						<motion.span
							key={word + idx}
							className='dark:text-white text-black opacity-0 font-tinos font-bold text-4xl	'
							style={{
								filter: filter ? 'blur(10px)' : 'none',
							}}
							transition={{delay: 1}}
						>
							{word}{' '}
						</motion.span>
					);
				})}
			</motion.div>
		);
	};

	return (
		<div>
			<div className='flex flex-col'>
				<div className='flex flex-row gap-2 items-baseline'>
					<h1 className='text-4xl font-bold '>//</h1>
					<h1 className=' dark:text-white text-black font-mont font-bold text-4xl leading-snug tracking-wide'>
						{renderWords()}
					</h1>
				</div>
			</div>
		</div>
	);
};
