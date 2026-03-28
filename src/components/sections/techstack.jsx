
import {
	IoLogoCss3,
	IoLogoHtml5,
	IoLogoJavascript,
	IoLogoPython,
	IoLogoReact,
} from 'react-icons/io5';
import { SiFastapi, SiPostgresql } from 'react-icons/si';
import MotionCardAnimation from '../animations/motion-card';


export default function TechstackSection() {
	return (
		<>
			<MotionCardAnimation>
				<div className='flex flex-col justify-center items-center gap-3'>
					<h2 className='text-xl md:text-2xl font-jetbrains font-light'>
						{`==> { techstack } <==`}{' '}
					</h2>
					<h3 className='px-0 sm:px-8 font-jetbrains max-w-150 opacity-50 text-center text-balance'>
						Some tech I've mastered and currently learning.{' '}
					</h3>
				</div>
				<div className='max-w-190 flex flex-row basis-2 flex-wrap flex-1 gap-4 justify-center items-center'>
					<TechstackCard logo={<IoLogoHtml5 />} name='HTML' />{' '}
					<TechstackCard logo={<IoLogoCss3 />} name='CSS' />{' '}
					<TechstackCard logo={<IoLogoReact />} name='React' />{' '}
					<TechstackCard logo={<IoLogoJavascript />} name='JavaScript' />{' '}
					<TechstackCard logo={<IoLogoPython />} name='Python' />{' '}
					<TechstackCard logo={<SiFastapi />} name='FastAPI' />{' '}
					<TechstackCard logo={<SiPostgresql />} name='PostgreSQL' />{' '}
				</div>
			</MotionCardAnimation>
		</>
	);
}

function TechstackCard(n) {
	return (
		<>
			<div className=' grow border-gray-100 bg-gray-50 border-3 p-2 pl-4 pr-4 rounded-xs flex flex-row gap-2.5 justify-center items-center'>
				<span className='text-xl'>{n.logo}</span>{' '}
				<h5 className='font-jetbrains text-lg'>{n.name}</h5>
			</div>
		</>
	);
}
