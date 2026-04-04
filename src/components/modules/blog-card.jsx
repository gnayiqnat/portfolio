import { Card, Separator, Chip, Skeleton } from '@heroui/react';
import HoverScaleAnimation from '../animations/hover-scale';
import { LuMessageSquare } from 'react-icons/lu';
import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';
import Link from 'next/link';
import { imageLoader } from 'next-sanity/image';
import DateFromNow from './date';

export default function BlogCard({title, categories, publishedAt, imgSrc, imgAlt, slug, isFeatured}) {
	return (
		<HoverScaleAnimation>
			<Link href={`/blog/${slug}`} passHref>
				<Card
					id='blog-card'
					className={`cursor-pointer dark:bg-foreground/5 border border-background dark:border-foreground/10 w-full items-stretch ${isFeatured === true ? 'h-full' : 'lg:flex-row'} rounded-xl`}
				>
					<div
						className={`relative h-35 w-full shrink-0 overflow-hidden rounded-md ${isFeatured === true ? 'h-45' : 'lg:h-30 lg:w-30'}`}
					>
						{imgSrc ? (
							<Image
								loader={imageLoader}
								loading='eager'
								className='pointer-events-none absolute inset-0 h-full w-full scale-125 object-cover select-none'
								src={urlFor(imgSrc.asset._ref).url()}
								alt={imgAlt.alt}
								fill={true}
							/>
						) : (
							<div className='h-full w-full flex justify-center items-center bg-background dark:bg-foreground/4'>
								<h5 className='text-gray-400'>NO IMAGE</h5>
							</div>
						)}
					</div>
					<div className=' flex flex-col justify-around gap-2'>
						<Card.Header className='flex flex-col gap-0.75'>
							{' '}
							<h6 className='ml-1 font-jetbrains text-foreground/45 dark:text-foreground/35'>
								<DateFromNow type='short' date={publishedAt} />
							</h6>
							<Card.Title className='text-xl md:text-2xl font-jetbrains text-foreground/85 text-balance break-all'>
								{title}
							</Card.Title>
						</Card.Header>
						<Card.Footer className='flex flex-row gap-3'>
							<div className='flex flex-row gap-2'>
								{categories &&
									categories.map((category) => (
										<TagChip key={category.title} text={category.title} />
									))}
							</div>
							<Separator orientation='vertical' className='bg-foreground/15' />
							<div className='flex flex-row gap-1.5 justify-center items-center text-foreground/40'>
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

export function TagChip({chipText}) {
	return (
		<>
			<Chip
				size='lg'
				className='px-1.5 rounded-xs font-jetbrains bg-background dark:bg-background/70  text-foreground/60 '
			>
				{chipText}
			</Chip>
		</>
	);
}
