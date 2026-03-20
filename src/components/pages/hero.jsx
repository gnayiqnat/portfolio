import { AnimatePresence, motion, useAnimate } from 'motion/react';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Card } from '@heroui/react';
import { FaRegNewspaper } from 'react-icons/fa';
import { LuConstruction, LuInfo, LuMail } from 'react-icons/lu';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router';
import { useLenis } from 'lenis/react';

export default function HeroSection() {
	const lenis = useLenis();

	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ delay: 1, duration: 1 }}
			className='flex flex-col md:grid h-svh md:grid-cols-2 md:grid-rows-1 gap-4 w-dvw p-8 md:p-24 items-center justify-center md:justify-between'
		>
			<motion.div className='w-full flex flex-col md:grid md:grid-rows-2 md:gap-4'>
				<div className='mt-4 mb-2 sm:m-0 order-2 md:order-first justify-center sm:justify-end w-full  flex flex-col flex-nowrap'>
					<TextGenerateEffect words='Hello, I am Qi Yang.' />
					<h1 className='text-2xl lg:text-3xl font-jetbrains bg-black text-white w-fit pr-2'>
						UX & Full-stack Web Developer.
					</h1>
				</div>
				<HeroCard text='blog' type='normal' imageIndex={0} />
			</motion.div>
			<motion.div className='flex flex-col w-full md:grid md:grid-rows-2 gap-4 flex-nowrap'>
				<motion.div className='grid grid-cols-2 gap-4'>
					<HeroCard text='contact' type='small' imageIndex={2} />

					<HeroCard text='about' type='small' imageIndex={3} />
				</motion.div>{' '}
				<HeroCard text='projects' type='normal' imageIndex={1} />
			</motion.div>
		</motion.div>
	);
}

function HeroCard(n) {
	const lenis = useLenis();

	const HeroIcons = [
		<FaRegNewspaper />,
		<LuConstruction />,
		<LuMail />,
		<LuInfo />,
	];

	return (
		<motion.div
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
				lenis?.scrollTo(`#${n.text}`);
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
