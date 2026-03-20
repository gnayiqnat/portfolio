import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Card } from '@heroui/react';
import { FaRegNewspaper } from 'react-icons/fa';
import { LuConstruction, LuInfo, LuMail } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';

export default function HeroSection() {
	const [isHeroPressed, setHeroPressed] = useState(false);

	return (
		<motion.div	
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 1, duration: 1 }}
			className='flex flex-col md:grid h-svh md:grid-cols-2 md:grid-rows-1 gap-4 w-dvw p-8 md:p-24 items-center justify-center md:justify-between'
		>
			<motion.div className='w-full flex flex-col md:grid md:grid-rows-2 md:gap-4'>
				<div
					id={4}
					className='mt-4 mb-2 sm:m-0 order-2 md:order-first justify-center sm:justify-end w-full  flex flex-col flex-nowrap'
				>
					<TextGenerateEffect words='Hello, I am Qi Yang.' />
					<h1 className='text-2xl lg:text-3xl font-jetbrains bg-black text-white w-fit pr-2'>
						UX & Full-stack Web Developer.
					</h1>
				</div>
				<HeroCard
					text='blog'
					type='normal'
					imageIndex={0}
					isHeroPressed={isHeroPressed}
					setHeroPressed={setHeroPressed}
				/>
			</motion.div>
			<motion.div className='flex flex-col w-full md:grid md:grid-rows-2 gap-4 flex-nowrap'>
				<motion.div className='grid grid-cols-2 gap-4'>
					<HeroCard
						text='contact'
						type='small'
						imageIndex={2}
						isHeroPressed={isHeroPressed}
						setHeroPressed={setHeroPressed}
					/>

					<HeroCard
						text='about'
						type='small'
						imageIndex={3}
						isHeroPressed={isHeroPressed}
						setHeroPressed={setHeroPressed}
					/>
				</motion.div>{' '}
				<HeroCard
					text='projects'
					type='normal'
					imageIndex={1}
					isHeroPressed={isHeroPressed}
					setHeroPressed={setHeroPressed}
				/>
			</motion.div>
		</motion.div>
	);
}

function HeroCard(n) {
	const [scope, animate] = useAnimate();
	const navigate = useNavigate();

	/*const currentWidth = useRef('');
	const currentHeight = useRef('');

	useEffect(() => {
		currentWidth.current = document.getElementById(2).offsetWidth;
		currentHeight.current = document.g	etElementById(2).offsetHeight;

		console.log(currentHeight.current, currentWidth.current);
	}, []);
	 */

	function OnClick(e) {
		for (let i = 0; i <= 4; i++) {
			if (i !== e) {
				document.getElementById(i).animate(
					[
						{ opacity: 1 }, // from
						{ opacity: 0 }, // to
					],
					{
						duration: 250, // in milliseconds
						easing: 'ease-in-out',
						fill: 'forwards', // ensures the style persists after the animation ends
					},
				);
				setTimeout(() => {
					document.getElementById(i).style.visibility = 'hidden';
				}, 300);
				setTimeout(() => {
					document.getElementById(i).style.display = 'none';
				}, 500);
			}

			setTimeout(() => {
				n.setHeroPressed(true);
				animate(
					scope.current,
					{ borderColor: 'none' },
					{ duration: 0.5, ease: 'easeInOut' },
				);
			}, 300);

			setTimeout(() => {
				animate(
					scope.current,
					{ left: '-100dvw' },
					{ duration: 2, ease: 'easeInOut' },
				);
			}, 1500);
			setTimeout(() => {
				navigate(`/${n.text}`, { state: { ref: 'hero' } });
			}, 3000);
		}
	}

	const HeroIcons = [
		<FaRegNewspaper />,
		<LuConstruction />,
		<LuMail />,
		<LuInfo />,
	];

	return (
		<motion.div
			ref={scope}
			layout
			style={{
				position: n.isHeroPressed ? 'absolute' : null,
				width: n.isHeroPressed ? '80dvw' : null,
				height: n.isHeroPressed ? '80dvh' : null,
				top: n.isHeroPressed ? '10dvh' : null,
				left: n.isHeroPressed ? '10dvw' : null,
				zIndex: n.isHeroPressed ? 3 : 1,
			}}
			id={n.imageIndex}
			className={`min-h-32 font-bold flex ${n.type == 'small' ? 'flex-col' : 'flex-row'} justify-center items-center flex-nowrap gap-5 rounded-2xl text-black border-3 border-black cursor-pointer`}
			initial={{
				borderBottomWidth: 7,
				marginTop: 0,
				opacity: 1,
			}}
			whileHover={{ scale: 0.99, transition: { duration: 0.3 } }}
			whileTap={{
				borderBottomWidth: 4,
				scale: 0.95,
				marginTop: 4,
				marginBottom: -4,
				transition: { duration: 0.1 },
			}}
			onClick={() => {
				OnClick(n.imageIndex);
			}}
		>
			{n.type == 'small' ? (
				<>
					{' '}
					<div className='flex flex-row gap-3 justify-center items-center text-3xl font-tinos'>
						<h3>{'/'}</h3>
						<div className='text-4xl'>{HeroIcons[n.imageIndex]}</div>
						<h3>\</h3>
					</div>
					<div>
						<h3 className='text-2xl font-tinos'>
							{'-{ '}
							{n.text}
							{' }-'}
						</h3>
					</div>
				</>
			) : (
				<div className='flex flex-row justify-center items-center gap-3'>
					{' '}
					<div className='flex flex-row items-center gap-3'>
						<h3 id='3xl' className='text-2xl md:text-3xl font-tinos'>
							{'['}
						</h3>
						<h4 id='4xl' className='text-3xl md:text-4xl font-tinos'>
							{'---'}
							{HeroIcons[n.imageIndex]}
							{'---'}
						</h4>
					</div>
					<div>
						<h3 id='3xl' className='text-2xl lg:text-3xl font-tinos	'>
							{'- { '}
							{n.text}
							{' } -'}
						</h3>
					</div>
				</div>
			)}
		</motion.div>
	);
}
