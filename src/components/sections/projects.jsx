import { Card, Chip, Tooltip } from '@heroui/react';

import { FaReact } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';
import CardCustom from '../animations/motion-card';
import { LuInfo } from 'react-icons/lu';

const websites = [
	{
		name: 'MSSSA',
		year: '2023',
		description: `A website designed to log students' attendance. Everything from the
						authentication, to the data storage and analytics are powered by Supabase.
						I have put a greater emphasis into the animations of the website, giving
						it life and bubbliness.`,
		technologies: ['react', 'mui'],
	},
	{
		name: 'Digital Ascent',
		year: '2024',
		description: `A website for an indie game studio built on Vite. Email logic is built on Supabase, secured with Cloudflare Turnstile. `,
		technologies: ['react'],
		sunset: true
	},
];

export default function ProjectSection() {
	return (
		<>
			<CardCustom id='projects'>
				{' '}
				<div className='flex flex-col gap-5'>
					<div className='w-full flex flex-col justify-center items-center gap-3'>
						<h2
							className={` text-xl md:text-2xl font-jetbrains font-light text-foreground`}
						>
							{`>~== { projects } ==~<`}{' '}
							{/*{`--->>>~=== { projects } ===~<<<<<---`} */}
						</h2>{' '}
						<h3 className='px-0 sm:px-8 font-jetbrains max-w-125 text-gray-500 text-center text-balance'>
							A full collection of both professional projects and stupid ideas.
						</h3>
					</div>
					<div className='justify-around items-between w-full'>
						{/*<div className='h-fit w-fit'>
							<motion.ul className='flex flex-rows gap-2'>
								<motion.li>
									<Button variant='ghost' className='rounded-sm'>
										Websites
									</Button>
								</motion.li>{' '}
								<motion.li>
									<BorderButton type='projects' content='Applications' />
								</motion.li>
							</motion.ul>
						</div>
						 */}
						<div className='p-3 grid grid-rows-2 md:grid-cols-2 md:grid-rows-1 gap-6 flex-wrap h-fit w-fit'>
							<WebCard website={websites[0]} />
							<WebCard website={websites[1]} type='dark' />
						</div>
					</div>
				</div>
			</CardCustom>
		</>
	);
}

function WebCard(n) {
	const properties = n.website;
	return (
		<>
			<Card
				className={` border-2 w-full flex flex-col justify-around gap-4 h-fit ${n.type == 'dark' ? 'bg-gray-800' : 'bg-card'} rounded-xl`}
			>
				<Card.Header className='flex gap-2.5'>
					<div className='flex flex-row justify-between'>
						<div className='flex flex-row gap-2 items-center'>
							<Card.Title
								className={`font-tinos font-bold text-2xl ${n.type == 'dark' && ' text-white'}`}
							>
								{properties.name}
							</Card.Title>
							<Card.Description>
								<Chip
									size='sm'
									className={`rounded-sm bg-none opacity-70 pl-2 pr-2 text-[13px] ${n.type == 'dark' && 'bg-gray-700 text-white border-gray-600 border-2'}`}
								>
									{properties.year}
								</Chip>
							</Card.Description>{' '}
						</div>
						{properties.sunset && (
							<Tooltip delay={0}>
								<Tooltip.Trigger aria-label='Info icon'>
									<div
										className={`flex flex-row items-center gap-1 cursor-pointer rounded-md p-1 border-2  ${n.type == 'dark' ? ' text-yellow-200 border-yellow-200/30 bg-yellow-50/10' : 'text-yellow-950/70 border-yellow-800/20 bg-yellow-100'}`}
									>
										<LuInfo className='text-sm' />
										<p className='text-xs'>INFO</p>
									</div>
								</Tooltip.Trigger>
								<Tooltip.Content showArrow>
									<Tooltip.Arrow />
									<div className='max-w-xs px-1 py-1.5'>
										<p className='mb-1 font-semibold'>-- Notice --</p>
										<p className='text-sm text-muted'>
											This project is currently a static archive. While the core UI
											remains, some backend features are no longer active.
										</p>
									</div>
								</Tooltip.Content>
							</Tooltip>
						)}
					</div>
					<Card.Content
						className={`font-tinos text-lg leading-6 text-foreground/80 ${n.type == 'dark' && 'text-gray-300'}`}
					>
						{properties.description}
					</Card.Content>
				</Card.Header>
				<Card.Footer>
					<div className='flex gap-1'>
						<Chip className='rounded-sm bg-gray-950 text-blue-100 text-sm flex gap-2'>
							<FaReact />
							React
						</Chip>
						<Chip className='p-1 pl-2.5 pr-2.5 rounded-sm bg-gray-950 text-blue-400 text-sm flex gap-2'>
							<SiMui />
							Material UI
						</Chip>
					</div>
				</Card.Footer>
			</Card>
		</>
	);
}
