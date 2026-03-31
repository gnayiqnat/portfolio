'use client';

import { useEffect } from 'react';

export default function ScrollToTop({ children }) {
	useEffect(() => {
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: 'instant',
		});
	}, []);

	return children;
}
