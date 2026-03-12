import { useEffect, useRef, useState } from 'react';
import { ReactLenis } from 'lenis/react';
import NavBar from './components/nav-bar';
import { useInView } from 'motion/react';
import HeroSection from './components/pages/hero';
import ProjectSection from './components/pages/projects';
import ContactSection from './components/pages/contact';
import { motion } from 'motion/react';

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

function App() {
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
			{!isHero && (
				<motion.div className='w-dvw h-dvh' initial={{}} animate={{}}>
					<NavBar />
					<ProjectSection />
					<ContactSection />
				</motion.div>
			)}
		</>
	);
}

//

export default App;

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
