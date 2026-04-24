import MotionOpacityAnimation from '@/components/animations/motion-opacity';
import SocialsCard from '@/components/modules/socials-card';
import ContactSection from '@/components/sections/contact';
import { FaGithub } from 'react-icons/fa';
import { LuMail } from 'react-icons/lu';

export default function ContactPage() {
	return (
		<MotionOpacityAnimation duration='0.5' delay='0'>
			<div className='h-full w-11/12 mx-auto grid gap-6 lg:grid-cols-2 justify-center items-center'>
				<ContactSection width='full' />
				<div className='h-full max-w-230 bg-white dark:bg-foreground/3 rounded-sm border py-10 px-5 sm:px-8 flex flex-col gap-4 items-center justify-center'>
					<h2
						className={` text-xl md:text-2xl font-jetbrains font-light text-foreground`}
					>
						{`>= { socials } <=`}{' '}
					</h2>{' '}
					<h3 className=' font-jetbrains max-w-150 opacity-50 text-center text-balance'>
						For direct inquiries or to see what I’m currently up to.
					</h3>
					<div className='mt-3 flex flex-col gap-2 w-11/12'>
						<SocialsCard
							text='Email'
							url='mailto:hello@tanqiyang.com'
							logo={<LuMail />}
						/>
						<SocialsCard
							text='Github'
							url='https://github.com/gnayiqnat'
							logo={<FaGithub />}
						/>
					</div>
				</div>
			</div>
		</MotionOpacityAnimation>
	);
}
