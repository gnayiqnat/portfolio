import { motion } from 'motion/react';

export default function AboutSection() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 1, duration: 1 }}
				id='projects'
				className='bg-white rounded-sm border m-7 p-8 py-10 px-8 md:px-16 lg:px-32 flex flex-col gap-4 items-center justify-center'
			>
				<h2 className={` text-xl md:text-2xl font-jetbrains font-light`}>
					{`->~== { about } ==~<-`} {/*{`--->>>~=== { projects } ===~<<<<<---`} */}
				</h2>
				<h3 className='text-lg font-jetbrains text-center opacity-80 text-ellipsis'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minus
					dignissimos ab unde, reprehenderit nemo. A ipsa voluptas, odit rem delectus
					nulla asperiores, neque quis, consequatur qui quos dolorum sint.
				</h3>
			</motion.div>
		</>
	);
}
