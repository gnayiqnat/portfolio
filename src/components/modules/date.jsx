'use client';

import { Separator } from '@heroui/react';
import { format, formatDistanceToNow } from 'date-fns';

export default function DateFromNow({ date, type }) {
	const timeFromNow = formatDistanceToNow(new Date(date), { addSuffix: true });
	return (
		<>
			{type === 'short' ? (
				<div className='text-foreground/45'>
					<h4>{timeFromNow}</h4>
				</div>
			) : (
				<div className='flex flex-row gap-3 text-foreground/45'>
					<h4>{String(format(new Date(date), 'dd/MM/yyyy'))}</h4>
					<Separator orientation='vertical' />
					<h4>Posted {timeFromNow}</h4>
				</div>
			)}
		</>
	);
}
