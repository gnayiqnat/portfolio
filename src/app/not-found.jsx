import BorderButton from '@/components/modules/border-button';
import { Button } from '@heroui/react';

export default function Page404() {


	return (
		<div
			className='pt-20 p-3 h-svh w-vw flex flex-col gap-30 justify-center items-center'
		>
			<div className='flex flex-col items-center gap-3'>
				<h1 className='text-5xl text-foreground'>- [404] -</h1>
				<h2 className='max-w-150 text-xl text-foreground/70 text-center text-balance'>
					{' '}
					Oops, the page you were looking for doesnt exist!
				</h2>
			</div>
			<div className='flex flex-col items-center gap-6'>
				<BorderButton text='Return to the Home Page' url='/' type='large' />
			</div>
		</div>
	);
}
