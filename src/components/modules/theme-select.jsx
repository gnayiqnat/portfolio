'use client';

import { Tabs } from '@heroui/react';
import { useTheme } from '@wrksz/themes/client';
import { useEffect, useState } from 'react';
import { LuMoonStar, LuSunMedium } from 'react-icons/lu';

export default function ThemeSelector() {
	const { resolvedTheme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return <div className='w-[99px] h-[44px]' />;
	}
	return (
		<Tabs
			className='w-fit'
			selectedKey={resolvedTheme}
			onSelectionChange={(key) => {
				setTheme(key);
			}}
		>
			<Tabs.ListContainer>
				<Tabs.List
					className='rounded-md border-2 border-foreground/30 bg-foreground/3 '
					aria-label='Options'
				>
					<Tabs.Tab className='p-3 rounded-sm' id='light'>
						<LuSunMedium size={20} />
						<Tabs.Indicator className='rounded-md border-2 border-gray-700' />
					</Tabs.Tab>
					<Tabs.Tab className='p-3 rounded-sm' id='dark'>
						<Tabs.Separator />
						<LuMoonStar size={20} />
						<Tabs.Indicator className='rounded-md border-2 border-gray-700' />
					</Tabs.Tab>
				</Tabs.List>
			</Tabs.ListContainer>
		</Tabs>
	);
}
