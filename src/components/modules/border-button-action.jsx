'use client';

import { useState } from 'react';
import { FaRssSquare, FaCheck } from 'react-icons/fa';
import { Button, Toast, toast, ToastQueue, ToastTitle } from '@heroui/react';
import HoverScaleAnimation from '../animations/hover-scale';
import { LuCopyCheck } from 'react-icons/lu';

export default function BorderButtonCopy({
	text = '',
	url = '',
	icon = <></>,
	darkBg = 'da',
	successText = '',
	successDescription = '',
}) {
	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(url);

			toast(successText, {
				actionProps: {
					children: 'Dismiss',
					onPress: () => toast.clear(),
					variant: 'outline',
				},
				description: successDescription,
				indicator: <LuCopyCheck />,
				variant: 'success',
			});
		} catch (err) {
			console.error('Failed to copy feed URL:', err);
		}
	};

	return (
		<HoverScaleAnimation>
			<Button
				onPress={() => {
					handleCopy();
				}}

				className={`rounded-sm border-2 p-4 text-base ${darkBg == 'dark' ? 'dark:text-foreground bg-background/3 dark:border-foreground/40 border-background/20' : 'text-foreground bg-foreground/3'} `}
			>
				{text} {icon}
			</Button>
		</HoverScaleAnimation>
	);
}
