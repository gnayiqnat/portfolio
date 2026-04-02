import CardCustom from "../animations/motion-card";
import HeroCard from "../modules/hero-card";

export default function HeroSection() {
	return (
		<CardCustom>
			<div className='pt-22 max-w-5xl w-full flex flex-col md:grid h-svh md:grid-cols-2 md:grid-rows-1 gap-4 p-8 lg:p-24 items-center justify-center md:justify-between'>
				<div className='w-full flex flex-col md:grid md:grid-rows-2 md:gap-4'>
					<div className='mt-4 mb-2 md:m-0 order-2 md:order-first justify-center md:justify-end w-full  flex flex-col flex-nowrap'>
						<h1 className='text-foreground/80 font-tinos font-bold text-2xl lg:text-3xl leading-snug tracking-wide'>
							// Hello, I am Qi Yang.
						</h1>
						<h1 className='text-2xl lg:text-3xl font-jetbrains bg-foreground/80 text-background text-balance w-fit pr-2 pl-2'>
							A Full-stack Web Developer.
						</h1>
					</div>
					<HeroCard text='blog' type='normal' imageIndex={0} />
				</div>
				<div className='flex flex-col w-full md:grid md:grid-rows-2 gap-4 flex-nowrap'>
					<div className='grid grid-cols-2 gap-4'>
						<HeroCard text='contact' type='small' imageIndex={2} />

						<HeroCard text='about' type='small' imageIndex={3} />
					</div>{' '}
					<HeroCard text='projects' type='normal' imageIndex={1} />
				</div>
			</div>
		</CardCustom>
	);
}
