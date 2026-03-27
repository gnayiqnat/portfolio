import { Card, Chip, Separator } from '@heroui/react';
import { motion } from 'motion/react';
import { LuMessageSquare } from 'react-icons/lu';

export default function BlogSection() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 1, duration: 1 }}
				id='blog'
				className='bg-white rounded-sm border m-7 my-15 p-8 py-10 px-8 md:px-16 lg:px-32 flex flex-col gap-4 items-center justify-center'
			>
				<h2 className={` text-xl md:text-2xl font-jetbrains font-light`}>
					{`->~== { blog } ==~<-`} {/*{`--->>>~=== { projects } ===~<<<<<---`} */}
				</h2>
				{/* <h3 className='px-0 sm:px-8 font-jetbrains max-w-125 opacity-50 text-center text-balance'>
				</h3> */}
				<div className='flex flex-col gap-3'>
					<BlogCard />
					<BlogCard />
				</div>
			</motion.div>
		</>
	);
}

function BlogCard() {
	return (
		<motion.div initial={{scale: 1}} whileHover={{scale: 0.99}} whileTap={{scale: 0.93}}>
			<Card className='cursor-pointer border border-gray-50 w-full items-stretch sm:flex-row rounded-xl'>
				<div className='relative h-35 w-full shrink-0 overflow-hidden rounded-md sm:h-[120px] sm:w-[120px]'>
					<img
						alt='Cherries'
						className=' pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none'
						loading='lazy'
						src='https://heroui-assets.nyc3.cdn.digitaloceanspaces.com/docs/cherries.jpeg'
					/>
				</div>
				<div className=' flex flex-col justify-around gap-2'>
					<Card.Header className='flex flex-col gap-0.75'>
						{' '}
						<h6 className='font-jetbrains text-gray-400'>8 May 2026</h6>
						<Card.Title className='text-xl md:text-2xl font-jetbrains text-gray-700 text-balance'>
							Lorem ipsum dolor sit amet consectetur adipisicing elit.
						</Card.Title>
					</Card.Header>
					<Card.Footer className='flex flex-row gap-3'>
						<div className='flex flex-row gap-2'>
							<TagChip text='Review' />
							<TagChip text='Review' />
						</div>
						<Separator orientation='vertical' />
						<div className='flex flex-row gap-1.5 justify-center items-center text-gray-400'>
							<LuMessageSquare size={18} className='' />
							<h6 className='font-jetbrains'>0</h6>
						</div>{' '}
					</Card.Footer>
				</div>
			</Card>
		</motion.div>
	);
}

function TagChip(n) {
	return (
		<>
			<Chip
				size='lg'
				className='px-1.5 rounded-xs font-jetbrains bg-gray-100 text-gray-600 '
			>
				{n.text}
			</Chip>
		</>
	);
}
