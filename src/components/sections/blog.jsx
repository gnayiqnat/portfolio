import MotionCardAnimation from '../animations/motion-card';
import BlogCard from '../modules/blog-card';

export default function BlogSection() {
	return (
		<>
			<MotionCardAnimation>
				<h2 className={` text-xl md:text-2xl font-jetbrains font-light`}>
					{`->~== { blog } ==~<-`} {/*{`--->>>~=== { projects } ===~<<<<<---`} */}
				</h2>
				{/* <h3 className='px-0 sm:px-8 font-jetbrains max-w-125 opacity-50 text-center text-balance'>
				</h3> */}
				<div className='flex flex-col gap-3 max-w-160'>
					<BlogCard />
					<BlogCard />
				</div>
			</MotionCardAnimation>
		</>
	);
}
