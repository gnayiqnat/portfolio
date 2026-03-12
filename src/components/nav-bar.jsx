import { Button, Tabs } from '@heroui/react';
import { motion } from 'motion/react';
import { BorderButton } from './border-button';
const direc = ['Home', 'Works', 'About'];

export default function NavBar(n) {
	return (
		<>
			<motion.nav
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.5 }}
				className='w-screen fixed flex flex-row justify-between z-100 ' //left-1/2 -translate-x-1/2
			>
				<div
					className='z-2 p-4' // border-black border-b-4 border-r-2 rounded-br-lg
				>
					<p className='font-librebarcode text-3xl blur-none'>Tan Qi Yang</p>
				</div>
				<motion.ul
					initial={{ opacity: 0 }}
					animate={{ opacity: 1}}
					exit={{ opacity: 0, transition: { duration: 0.01 } }}
					className='z-2 p-3 pr-6 flex flex-row gap-2'
				>
					{direc.map((n, i) => (
						<motion.li key={i}>
							<BorderButton key={i} content={n} />
						</motion.li>
					))}
				</motion.ul>
			</motion.nav>
		</>
	);
}
