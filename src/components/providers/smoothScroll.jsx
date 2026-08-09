'use client';

import { ReactLenis } from 'lenis/react';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

export default function SmoothScroll({ children }) {
	const lenisRef = useRef(null);
	const pathname = usePathname();

	useEffect(() => {
		// Resets scroll instantly to top and recalculates height on page changes
		if (lenisRef.current?.lenis) {
			lenisRef.current.lenis.scrollTo(0, { immediate: true });
			lenisRef.current.lenis.resize();
		}
	}, [pathname]);

	return (
		<ReactLenis ref={lenisRef} root options={{ autoResize: true }}>
			{children}
		</ReactLenis>
	);
}
