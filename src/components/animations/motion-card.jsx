export default function CardCustom({ children, id = '' }) {
	return (
		<div
			id={id}
			className='w-11/12 max-w-230 bg-white dark:bg-foreground/3 rounded-sm border py-10 px-5 sm:px-8 flex flex-col gap-4 items-center justify-center'
		>
			{children}
		</div>
	);
}