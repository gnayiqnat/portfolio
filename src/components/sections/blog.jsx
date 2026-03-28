import { Card, Chip, Separator } from '@heroui/react';
import { LuMessageSquare } from 'react-icons/lu';
import MotionCardAnimation from '../animations/motion-card';
import HoverScaleAnimation from '../animations/hover-scale';

export default function BlogSection() {
	return (
		<>
			<MotionCardAnimation>
				<h2 className={` text-xl md:text-2xl font-jetbrains font-light`}>
					{`->~== { blog } ==~<-`} {/*{`--->>>~=== { projects } ===~<<<<<---`} */}
				</h2>
				{/* <h3 className='px-0 sm:px-8 font-jetbrains max-w-125 opacity-50 text-center text-balance'>
				</h3> */}
				<div className='flex flex-col gap-3 max-w-160'>
					<BlogCard />
					<BlogCard />
				</div>
			</MotionCardAnimation>
		</>
	);
}

function BlogCard() {
	return (
		<HoverScaleAnimation>
			<Card className='cursor-pointer border border-gray-50 w-full items-stretch sm:flex-row rounded-xl'>
				<div className='relative h-35 w-full shrink-0 overflow-hidden rounded-md sm:h-30 sm:w-30'>
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
		</HoverScaleAnimation>
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
