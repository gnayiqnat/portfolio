import { useEffect, useRef, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import NavBar from './components/nav-bar';
import { useInView } from 'motion/react';
import HeroSection from './components/pages/hero';
import ProjectSection from './components/pages/projects';
import ContactSection from './components/pages/contact';
import { motion } from 'motion/react';
import { BrowserRouter, Route, Routes, useNavigate } from 'react-router';
import { BorderButton } from './components/border-button';
import { Button } from '@heroui/react';

/*

Hey there, fancy meeting you here.
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠿⠿⠿⠿⠿⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⣉⡥⠶⢶⣿⣿⣿⣿⣷⣆⠉⠛⠿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⢡⡞⠁⠀⠀⠤⠈⠿⠿⠿⠿⣿⠀⢻⣦⡈⠻⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠘⡁⠀⢀⣀⣀⣀⣈⣁⣐⡒⠢⢤⡈⠛⢿⡄⠻⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡇⠀⢀⣼⣿⣿⣿⣿⣿⣿⣿⣿⣶⣄⠉⠐⠄⡈⢀⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⠇⢠⣿⣿⣿⣿⡿⢿⣿⣿⣿⠁⢈⣿⡄⠀⢀⣀⠸⣿⣿⣿⣿
⣿⣿⣿⣿⡿⠟⣡⣶⣶⣬⣭⣥⣴⠀⣾⣿⣿⣿⣶⣾⣿⣧⠀⣼⣿⣷⣌⡻⢿⣿
⣿⣿⠟⣋⣴⣾⣿⣿⣿⣿⣿⣿⣿⡇⢿⣿⣿⣿⣿⣿⣿⡿⢸⣿⣿⣿⣿⣷⠄⢻
⡏⠰⢾⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠟⢂⣭⣿⣿⣿⣿⣿⠇⠘⠛⠛⢉⣉⣠⣴⣾
⣿⣷⣦⣬⣍⣉⣉⣛⣛⣉⠉⣤⣶⣾⣿⣿⣿⣿⣿⣿⡿⢰⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣧⡘⣿⣿⣿⣿⣿⣿⣿⣿⡇⣼⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣇⢸⣿⣿⣿⣿⣿⣿⣿⠁⣿⣿⣿⣿⣿⣿⣿⣿⣿

*/
function Home() {
	const [isHero, setHero] = useState(true);
	const [isFromButtonPressed, setIsFromButtonPressed] = useState(false);

	const ref = useRef(null);
	const isInView = useInView(ref);

	useEffect(() => {
		console.log(isHero);
	}, [isHero]);

	return (
		<>
			<ReactLenis root />

			<HeroSection
				setHero={setHero}
				setIsFromButtonPress={setIsFromButtonPressed}
			/>

				<ProjectSection />
				<ContactSection />
		</>
	);
}

// 404 page -------------------------------------------------------------------------------------------------
function Page404() {
	const [seconds, setSeconds] = useState(5);
	const navigate = useNavigate();

	useEffect(() => {
		if (seconds !== 0) {
			setTimeout(() => {
				setSeconds(seconds - 1);
			}, 1000);
		} else if (seconds === 0) {
			navigate('/')
		}
	}, [seconds]);

	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{delay: 1, duration: 1}}
			className='pt-20 p-3 h-dvh w-dvw flex flex-col gap-30 justify-center items-center'
		>
			<div className='flex flex-col items-center'>
				<h1 className='text-6xl font-tinos'>[404]</h1>
				<h2 className='text-3xl font-tinos text-center'>
					{' '}
					Oops, the page you were looking for doesnt exist!
				</h2>
			</div>
			<div className='flex flex-col items-center gap-6'>
				<Button
					className='border-black border-3 rounded-sm text-lg p-5 font-jetbrains font-bold'
					onClick={() => {
						window.location.pathname = '/';
					}}
				>
					Return to the Home Page
				</Button>
				<h4 className='font-tinos text-lg text-gray-500 opacity-60'>
					Automically redirecting you in {seconds} second(s)...
				</h4>
			</div>
		</motion.div>
	);
}
function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='*' element={<Page404 />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

//

export default App;

/*
<ReactLenis root />

			<HeroSection
				setHero={setHero}
				setIsFromButtonPress={setIsFromButtonPressed}
			/>
			{!isHero && (
				<motion.div className='w-dvw h-dvh' initial={{}} animate={{}}>
					<NavBar />
					<ProjectSection />
					<ContactSection />
				</motion.div>
			)}
				
*/
{
	/* 
		<form onSubmit={() => { handleSubmit(onSubmit) }}>
			<input type='text' name='name' required />
			<input type='email' name='email' required />
			<textarea name='message' required></textarea>
			<button type='submit'>Submit</button>
			<p>{result}</p>
			<HCaptcha
				sitekey='50b2fe65-b00b-4b9e-ad62-3ba471098be2'
				reCaptchaCompat={false}
				onVerify={onHCaptchaChange}
			/>
		</form> */
}
