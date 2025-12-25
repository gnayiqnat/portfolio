import { Button, Tabs } from '@heroui/react';
import { motion } from 'motion/react';
const direc = ['Home', 'Works', 'About'];

export default function TabLink() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ delay: 1.2, duration: 0.5 }}
				className='w-screen fixed flex flex-row justify-between z-100 ' //left-1/2 -translate-x-1/2
			>
				<div
					className='z-2 border-black border-b-4 border-r-2 p-4 rounded-br-lg
'
				>
					<p className='font-librebarcode text-3xl blur-none'>Tan Qi Yang</p>
				</div>
				<Tabs className='rounded-bl-xl rounded-br-xl border-black border-b-4 border-l-2 border-r-2 z-2 max-w-md  opacity-98 text-gray-900 '>
					<Tabs.ListContainer>
						<Tabs.List
							className='*:data-[selected=true]:text-black  font-tinos *:data-[selected=true]:font-bold
						  w-fit *:h-16 *:data-[selected=true]:-mt-1 *:data-[selected=true]:mb-1 *:w-fit pt-0 bg-transparent *:text-base *:text-gray-600'
						>
							{direc.map((n, i) => (
								<Tabs.Tab key={i}>
									{n}
									<Tabs.Indicator className=' rounded-none rounded-bl-lg rounded-br-lg text-black  border-l-2 border-b-4 border-r-2 border-black bg-gray-50' />
								</Tabs.Tab>
							))}
						</Tabs.List>
					</Tabs.ListContainer>{' '}
				</Tabs>
				<div className='z-2 p-2 pr-4 -ml-5 border-black border-b-4 border-l-2 rounded-bl-lg'>
					<Button
						variant='ghost'
						className=' h-13 p-5 font-tinos text-base font-bold border-b-4 border-l-2 border-r-2 border-t-2 rounded-md border-gray-950'
					>
						Get in Touch
					</Button>
				</div>
				<div className='absolute h-17 left-0 -top-1 w-full blur-[5px] bg-background opacity-99' />
			</motion.div>
		</>
	);
}
