import { Card, Separator, Chip, Skeleton } from '@heroui/react';
import HoverScaleAnimation from '../animations/hover-scale';
import { LuMessageSquare } from 'react-icons/lu';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';

export default function BlogCard(n) {
	return (
		<HoverScaleAnimation>
			<Link href={`/blog/${n.slug}`}>
				<Card className='cursor-pointer border border-gray-50 w-full items-stretch sm:flex-row rounded-xl'>
					<div className='relative h-35 w-full shrink-0 overflow-hidden rounded-md sm:h-30 sm:w-30 bg-gray-100'>
						{n.imgSrc ? (
							<Image
								className='pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none'
								src={urlFor(n.imgSrc.asset._ref).url()}
								alt={n.imgAlt.alt}
								fill={true}
							/>
						) : (
							<div className='h-full w-full flex justify-center items-center'>
								<h5 className='text-gray-400'>NO IMAGE</h5>
							</div>
						)}
					</div>
					<div className=' flex flex-col justify-around gap-2'>
						<Card.Header className='flex flex-col gap-0.75'>
							{' '}
							<h6 className='font-jetbrains text-gray-400'>
								{n.publishedAt && n.publishedAt}
							</h6>
							<Card.Title className='text-xl md:text-2xl font-jetbrains text-gray-700 text-balance'>
								{n.title}
							</Card.Title>
						</Card.Header>
						<Card.Footer className='flex flex-row gap-3'>
							<div className='flex flex-row gap-2'>
								{n.categories && n.categories.map((category) => (
									<TagChip key={category.title} text={category.title} />
								))}
							</div>
							<Separator orientation='vertical' />
							<div className='flex flex-row gap-1.5 justify-center items-center text-gray-400'>
								<LuMessageSquare size={18} className='' />
								<h6 className='font-jetbrains'>0</h6>
							</div>{' '}
						</Card.Footer>
					</div>
				</Card>
			</Link>
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
