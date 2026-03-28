
import MotionCardAnimation from '../animations/motion-card';

export default function AboutSection() {
	return (
		<>
			<MotionCardAnimation>
				<h2 id='about' className={` text-xl md:text-2xl font-jetbrains font-light`}>
					{`->~== { about } ==~<-`}
				</h2>
				<h3 className='text-lg font-jetbrains text-center opacity-80 text-balance'>
					Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam minus
					dignissimos ab unde, reprehenderit nemo. A ipsa voluptas, odit rem delectus
					nulla asperiores, neque quis, consequatur qui quos dolorum sint.
				</h3>
			</MotionCardAnimation>
		</>
	);
}
