'use client';

import Link from 'next/link';
import ScrollProgressBar from '../animations/scroll-progress-bar';
import { usePathname } from 'next/navigation';
import { Button, Drawer } from '@heroui/react';
import HoverScaleAnimation from '../animations/hover-scale';
import ThemeSelector from './theme-select';
import { LuMenu } from 'react-icons/lu';

export default function NavBar() {
	const pathname = usePathname();

	return (
		<>
			<div className='fixed w-full flex flex-col z-50'>
				<div className='px-6  lg:px-10 h-19 backdrop-blur-2xl flex sm:justify-between items-center bg-background/40 border-b'>
					<div className='flex flex-row gap-5'>
						<NavDrawer />
						<Link href='/'>
							<span className='font-barcode text-4xl text-foreground/90'>TAN QI YANG</span>
						</Link>
					</div>
					<div className='hidden md:flex flex-col md:flex-row gap-3'>
						<NavButton text='Home' href='/' />
						<NavButton text='Blog' href='/blog' />
						<NavButton text='Projects' href='/projects' />
						<NavButton text='Contact' href='/contact' />
						<NavButton text='About' href='/about' />
					</div>
					<div className='hidden sm:inline'>
						<ThemeSelector />
					</div>
				</div>
				{pathname.includes('/blog/') && <ScrollProgressBar />}
			</div>
		</>
	);
}

function NavButton(n) {
	const pathname = usePathname();

	return (
		<>
			<HoverScaleAnimation>
				<Link href={n.href}>
					<Button
						className={`md:px-3 lg:px-4 ${pathname.endsWith(n.href) ? 'bg-gray-700 text-gray-100' : 'bg-background text-foreground/70'} rounded-sm text-[18px] md:text-sm lg:text-base border-2 border-foreground/30`}
					>
						{n.text}
					</Button>
				</Link>
			</HoverScaleAnimation>
		</>
	);
}

function NavDrawer() {
	return (
		<>
			<Drawer className='z-51 backdrop-blur-3xl'>
				<Button
					variant='secondary'
					isIconOnly
					className='md:hidden text-foreground/80 border-2 border-foreground/10 bg-foreground/1 rounded-sm '
				>
					<LuMenu className='h-6 w-6' />
				</Button>
				<Drawer.Backdrop variant='blur'>
					<Drawer.Content placement='left'>
						<Drawer.Dialog>
							<Drawer.CloseTrigger />
							<Drawer.Header>
								<Drawer.Heading className='font-barcode text-4xl text-foreground/90'>TAN QI YANG
								</Drawer.Heading>
							</Drawer.Header>
							<Drawer.Body className='mt-10 flex flex-col gap-3 **:w-full **:h-17 '>
								<NavButton text='Home' href='/' />
								<NavButton text='Blog' href='/blog' />
								<NavButton text='Projects' href='/projects' />
								<NavButton text='Contact' href='/contact' />
								<NavButton text='About' href='/about' />
							</Drawer.Body>
							<Drawer.Footer className='sm:hidden'>
								<ThemeSelector />
							</Drawer.Footer>
						</Drawer.Dialog>
					</Drawer.Content>
				</Drawer.Backdrop>
			</Drawer>
		</>
	);
}
