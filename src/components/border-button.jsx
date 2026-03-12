import { motion } from 'motion/react';

export function BorderButton(n) {
	return (
		<>
			<motion.button
				className={`text-sm rounded-lg font-tinos text-black border-2 border-black bg-gray-50 font-bold cursor-pointer ${n.variant == 'long' && 'pl-5 pr-5'} ${n.type == 'projects' ? 'p-3 w-30 text-[1.1rem]' : 'p-2'}`}
				initial={{
					borderBottomWidth: 4.5,
					scale: 1,
					marginTop: 0,
					opacity: 1,
				}}
				whileHover={{ scale: 0.97, transition: { duration: 0.3 } }}
				whileTap={{
					borderBottomWidth: 2,
					scale: 0.95,
					marginTop: 4,
					marginBottom: -4,
					transition: { duration: 0.1 },
				}}
				onClick={() => {
					console.log('clicked');
				}}
			>
				{n.content}
			</motion.button>
		</>
	);
}
