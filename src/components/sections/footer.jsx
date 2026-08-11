import Link from 'next/link';
import Logo from '../modules/website-logo';
import { Separator } from '@heroui/react';

export default function Footer() {
	return (
		<>
			<footer className='w-full h-50 px-10 py-50 md:p-50 gap-20 flex flex-col justify-around items-center text-foreground/70'>
				<div className='flex flex-row gap-3 justify-center items-center'>
					<Logo />
					<Separator orientation='vertical' />
					<Link href='/privacy' className='hover:underline'>
						Privacy
					</Link>{' '}
					<Separator orientation='vertical' />
					<Link href='/about' className='hover:underline'>
						About
					</Link>
				</div>
				<div className='flex flex-row gap-3 justify-center text-center'>
					<p className='text-foreground/50 text-sm md:text-base text-balance'>
						© 2026 Tan Qi Yang. Content licensed under{' '}
						<a
							className='hover:underline'
							href='https://creativecommons.org/licenses/by-nc-nd/4.0/'
						>
							CC BY-NC-ND 4.0
						</a>
						.
					</p>
				</div>
			</footer>
		</>
	);
}
