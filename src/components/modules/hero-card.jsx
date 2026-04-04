import { FaRegNewspaper } from 'react-icons/fa';
import { LuConstruction, LuInfo, LuMail } from 'react-icons/lu';
import Link from 'next/link';
import HeroCardAnimation from '../animations/hero-card-onclick';

export default function HeroCard(n) {
	const HeroIcons = [
		<FaRegNewspaper />,
		<LuConstruction />,
		<LuMail />,
		<LuInfo />,
	];

	return (
		<>
			{n.text === 'blog' ? (
				<Link href='/blog' passHref>
					<HeroCardAnimation>
							{n.type == 'small' ? (
								<>
									{' '}
									<div className='flex flex-row gap-3 justify-center items-center text-2xl font-jetbrains'>
										<h3>{'/'}</h3>
										<div className='text-3xl'>{HeroIcons[n.imageIndex]}</div>
										<h3>\</h3>
									</div>
									<div>
										<h3 className='text-xl font-jetbrains'>
											<span className='hidden sm:visible'>-</span>
											{'{ '}
											{n.text}
											{' }'}
											<span className='hidden sm:visible'>-</span>
										</h3>
									</div>
								</>
							) : (
								<div className='flex flex-row justify-center items-center gap-3'>
									{' '}
									<div className='flex flex-row items-center gap-3'>
										<h3 className='text-2xl md:text-2xl font-jetbrains'>{'['}</h3>
										<div className='text-2xl font-jetbrains flex flex-col items-center'>
											{'---'}
											<span className='text-3xl'>{HeroIcons[n.imageIndex]}</span>
											{'---'}
										</div>
									</div>
									<div>
										<h3 className='text-xl lg:text-2xl font-jetbrains	text-foreground/80'>
											{'- { '}
											{n.text}
											{' } -'}
										</h3>
									</div>
								</div>
							)}
					</HeroCardAnimation>
				</Link>
			) : (
				<HeroCardAnimation link={n.text} type='small'>
						{n.type == 'small' ? (
							<>
								{' '}
								<div className='flex flex-row gap-3 justify-center items-center text-2xl font-jetbrains'>
									<h3>{'/'}</h3>
									<div className='text-3xl'>{HeroIcons[n.imageIndex]}</div>
									<h3>\</h3>
								</div>
								<div>
									<h3 className='text-xl font-jetbrains'>
										<span className='hidden sm:visible'>-</span>
										{'{ '}
										{n.text}
										{' }'}
										<span className='hidden sm:visible'>-</span>
									</h3>
								</div>
							</>
						) : (
							<div className='flex flex-row justify-center items-center gap-3'>
								{' '}
								<div className='flex flex-row items-center gap-3'>
									<h3 className='text-2xl md:text-2xl font-jetbrains'>{'['}</h3>
									<div className='text-2xl font-jetbrains flex flex-col items-center'>
										{'---'}
										<span className='text-3xl'>{HeroIcons[n.imageIndex]}</span>
										{'---'}
									</div>
								</div>
								<div>
									<h3 className='text-xl lg:text-2xl font-jetbrains	'>
										{'- { '}
										{n.text}
										{' } -'}
									</h3>
								</div>
							</div>
						)}
				</HeroCardAnimation>
			)}
		</>
	);
}
