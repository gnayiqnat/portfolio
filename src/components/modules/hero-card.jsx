'use client'

import { motion } from 'motion/react';
import { FaRegNewspaper } from 'react-icons/fa';
import { LuConstruction, LuInfo, LuMail } from 'react-icons/lu';
import { useLenis } from 'lenis/react';
import Link from 'next/link';

export default function HeroCard(n) {
	const lenis = useLenis();

	const HeroIcons = [
		<FaRegNewspaper />,
		<LuConstruction />,
		<LuMail />,
		<LuInfo />,
	];

	return (
		<>
			{n.text === 'blog' ? (
				<Link href='/blog'>
					<motion.div
						id={n.imageIndex}
						className={`select-none min-h-32 font-bold flex ${n.type == 'small' ? 'flex-col' : 'flex-row'} justify-center items-center flex-nowrap gap-5 rounded-sm text-foreground/80 bg-foreground/5 border-foreground/10 border-3 cursor-pointer`}
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
					>
						{n.type == 'small' ? (
							<>
								{' '}
								<div className='flex flex-row gap-3 justify-center items-center text-2xl font-jetbrains'>
									<h3>{'/'}</h3>
									<div className='text-3xl'>{HeroIcons[n.imageIndex]}</div>
									<h3>\</h3>
								</div>
								<div>
									<h3 className='text-xl font-jetbrains'>
										<span className='hidden sm:visible'>-</span>
										{'{ '}
										{n.text}
										{' }'}
										<span className='hidden sm:visible'>-</span>
									</h3>
								</div>
							</>
						) : (
							<div className='flex flex-row justify-center items-center gap-3'>
								{' '}
								<div className='flex flex-row items-center gap-3'>
									<h3 className='text-2xl md:text-2xl font-jetbrains'>{'['}</h3>
									<div className='text-2xl font-jetbrains flex flex-col items-center'>
										{'---'}
										<span className='text-3xl'>{HeroIcons[n.imageIndex]}</span>
										{'---'}
									</div>
								</div>
								<div>
									<h3 className='text-xl lg:text-2xl font-jetbrains	text-foreground/80'>
										{'- { '}
										{n.text}
										{' } -'}
									</h3>
								</div>
							</div>
						)}
					</motion.div>
				</Link>
			) : (
				<motion.div
					id={n.imageIndex}
					className={`select-none min-h-32 font-bold flex ${n.type == 'small' ? 'flex-col' : 'flex-row'} justify-center items-center flex-nowrap gap-5 rounded-sm  text-foreground/80 bg-foreground/5 border-3 border-foreground/10 cursor-pointer`}
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
						lenis?.scrollTo(`#${n.text}`, { offset: -80 });
					}}
				>
					{n.type == 'small' ? (
						<>
							{' '}
							<div className='flex flex-row gap-3 justify-center items-center text-2xl font-jetbrains'>
								<h3>{'/'}</h3>
								<div className='text-3xl'>{HeroIcons[n.imageIndex]}</div>
								<h3>\</h3>
							</div>
							<div>
								<h3 className='text-xl font-jetbrains'>
									<span className='hidden sm:visible'>-</span>
									{'{ '}
									{n.text}
									{' }'}
									<span className='hidden sm:visible'>-</span>
								</h3>
							</div>
						</>
					) : (
						<div className='flex flex-row justify-center items-center gap-3'>
							{' '}
							<div className='flex flex-row items-center gap-3'>
								<h3 className='text-2xl md:text-2xl font-jetbrains'>{'['}</h3>
								<div className='text-2xl font-jetbrains flex flex-col items-center'>
									{'---'}
									<span className='text-3xl'>{HeroIcons[n.imageIndex]}</span>
									{'---'}
								</div>
							</div>
							<div>
								<h3 className='text-xl lg:text-2xl font-jetbrains	'>
									{'- { '}
									{n.text}
									{' } -'}
								</h3>
							</div>
						</div>
					)}
				</motion.div>
			)}
		</>
	);
}
