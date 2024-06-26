// BackgroundTypography.js
import React from 'react';
import { Box, Typography } from '@mui/material';

function BackgroundTypography() {
	return (
		<Box
			sx={{
				width: '100vw',
				maxWidth: '100vw',
				overflow: 'hidden',
				position: 'absolute',
				opacity: 0.07,
				top: '0%',
				alignItems: 'start',
				pointerEvents: 'none'
			}}
		>
			<Typography
				sx={{
					color: 'primary.main',
					fontWeight: 700,
					lineHeight: 0.5,
					fontSize: 335,
					marginLeft: '-100px',
				}}
				gutterBottom
			>
				gnayiqnatgnayiqnat
			</Typography>
		</Box>
	);
}

export default BackgroundTypography;
