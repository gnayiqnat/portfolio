import { motion } from 'motion/react';
import {
	IoLogoCss3,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoPython,
	IoLogoReact,
} from 'react-icons/io5';
import { SiFastapi, SiPostgresql } from 'react-icons/si';

const techstackContent = [{ logo: <IoLogoJavascript />, name: 'React' }];

export default function TechstackSection() {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				transition={{ delay: 1, duration: 1 }}
				id='about'
				className='m-7 mt-0 mb-0 p-7 md:p-16 lg:p-24 lg:pb-7 lg:pt-10 bg-white rounded-sm border flex flex-col gap-10 items-center justify-center pt-10 pb-10'
			>
				<div className='flex flex-col justify-center items-center gap-3'>
					<h2 className='text-xl md:text-2xl font-jetbrains font-light'>
						{`->~= { techstack } =~<-`}{' '}
					</h2>
					
				</div>
				<div className='flex flex-row basis-2 flex-wrap flex-1 gap-4 justify-center items-center'>
					<TechstackCard logo={<IoLogoHtml5 />} name='HTML' />{' '}
					<TechstackCard logo={<IoLogoCss3 />} name='CSS' />{' '}
					<TechstackCard logo={<IoLogoReact />} name='React' />{' '}
					<TechstackCard logo={<IoLogoJavascript />} name='JavaScript' />{' '}
					<TechstackCard logo={<IoLogoPython />} name='Python' />{' '}
					<TechstackCard logo={<SiFastapi />} name='FastAPI' />{' '}
					<TechstackCard logo={<SiPostgresql />} name='PostgreSQL' />{' '}
				</div>
			</motion.div>
		</>
	);
}

function TechstackCard(n) {
	return (
		<>
			<motion.div className=' grow border-gray-100 bg-gray-50 border-3 p-2 pl-4 pr-4 rounded-xs flex flex-row gap-2.5 justify-center items-center'>
				<span className='text-xl'>{n.logo}</span> <h5 className='font-jetbrains text-lg'>{n.name}</h5>
			</motion.div>
		</>
	);
}
