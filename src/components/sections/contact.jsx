'use client'

import HCaptcha from '@hcaptcha/react-hcaptcha';
import {
	Button,
	FieldError,
	Form,
	Input,
	Label,
	ProgressCircle,
	Surface,
	TextArea,
	TextField,
} from '@heroui/react';
import { AnimatePresence, motion } from 'motion/react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { LuInfo, LuMailCheck } from 'react-icons/lu';
import MotionCardAnimation from '../animations/motion-card';

export default function ContactSection() {
	const { setValue, reset } = useForm({
		defaultValues: {},
	});

	const onHCaptchaChange = (token) => {
		setValue('h-captcha-response', token);
	};
	const [page, setPage] = useState(1);
	const [result, setResult] = useState('');
	const [email, setEmail] = useState('');
	const isEmailInvalid =
		email && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

	const onSubmit = async (event) => {
		event.preventDefault();
		setTimeout(() => {
			setPage(3);
		}, 500);
		const emailApiKey = process.env.NEXT_PUBLIC_EMAIL_API_KEY; // Public Web3Forms API key

		setResult('Sending....');
		const formData = new FormData(event.target);

		formData.append('email', email);

		formData.append('access_key', emailApiKey);
		const response = await fetch('https://api.web3forms.com/submit', {
			method: 'POST',
			body: formData,
		});

		const data = await response.json();
		if (data.success) {
			setResult('Form Submitted Successfully :)');
			event.target.reset();
		} else {
			setResult('Error');
		}
	};
	return (
		<>
			<MotionCardAnimation id='contact'>
				{' '}
				<h2 className={` text-xl md:text-2xl font-jetbrains font-light `}>
					{`>= { get in touch } <=`}{' '}
				</h2>
				{page === 1 && (
					<h3 className='px-0 sm:px-8 font-jetbrains max-w-150 opacity-50 text-center text-balance'>
						Drop an email, don't worry, there's a chance I won't bite.
					</h3>
				)}
				<div className='md:max-w-[50vw] w-full flex flex-col sm:flex-row items-start '>
					<Surface className='w-full bg-inherit'>
						{' '}
						{page === 3 ? (
							<>
								<motion.div
									className='flex flex-col justify-center items-center min-h-64'
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
								>
									{result === '' ? (
										<div className='flex flex-col gap-9'>
											<div className='flex flex-row gap-3 justify-center items-center'>
												<ProgressCircle size='md' isIndeterminate aria-label='Loading'>
													<ProgressCircle.Track>
														<ProgressCircle.TrackCircle className='stroke-gray' />
														<ProgressCircle.FillCircle className='stroke-black' />
													</ProgressCircle.Track>
												</ProgressCircle>
												<Label className='text-lg font-jetbrains'>Loading</Label>
											</div>
											<motion.div
												initial={{ opacity: 0 }}
												animate={{ opacity: 1 }}
												transition={{ delay: 5, duration: 1 }}
											>
												<Button
													className='border-gray-600 bg-gray-800 text-gray-100 border-3 rounded-sm text p-4 font-jetbrains font-bold'
													onClick={() => {
														reset();
														setPage(1);
														setEmail('');
														setResult('');
													}}
												>
													Not working? Reset the form {'=>'}
												</Button>
											</motion.div>
										</div>
									) : (
										<>
											{result == 'Form Submitted Successfully :)' ? (
												<motion.div
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 0.5, duration: 0.5 }}
													className='flex flex-col gap-4'
												>
													<div>
														<LuMailCheck size={36} className='text-xl' />
														<h2 className='text-xl font-jetbrains font-bold'>{`${result}`}</h2>
													</div>
													<Button
														className='border-gray-600 bg-gray-800 text-gray-100 border-3 rounded-sm text p-4 font-jetbrains font-bold'
														onClick={() => {
															reset();
															setPage(1);
															setEmail('');
															setResult('');
														}}
													>
														Return {'=>'}
													</Button>
												</motion.div>
											) : (
												<motion.div
													initial={{ opacity: 0 }}
													animate={{ opacity: 1 }}
													transition={{ delay: 0.5, duration: 0.5 }}
													className='flex flex-col gap-4'
												>
													<LuInfo size={36} />{' '}
													<h2 className='text-xl font-jetbrains font-bold'>{`${result}`}</h2>
													<motion.div
														initial={{ opacity: 0 }}
														animate={{ opacity: 1 }}
														transition={{ delay: 4, duration: 0.5 }}
													>
														<Button
															className='border-gray-600 bg-gray-800 text-gray-100 border-3 rounded-sm text p-4 font-jetbrains font-bold'
															onClick={() => {
																reset();
																setPage(1);
																setEmail('');
																setResult('');
															}}
														>
															Cancel and return {'=>'}
														</Button>
													</motion.div>
												</motion.div>
											)}
										</>
									)}
								</motion.div>
							</>
						) : (
							<Form
								className=' pl-7 pr-8 mt-5 flex flex-col gap-8'
								onSubmit={onSubmit}
							>
								{' '}
								<motion.div
									initial={{ opacity: 0 }}
									animate={{ opacity: 1 }}
									transition={{ delay: 0.5, duration: 1 }}
								>
									<h4 className='opacity-40 font-jetbrains'>
										{page}/2{' '}
										{page === 2
											? `Sending an email as ${email}.`
											: 'Please enter your email.'}
									</h4>
								</motion.div>
								{page === 1 ? (
									<AnimatePresence>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											transition={{ delay: 0.5, duration: 1 }}
											className='flex flex-row items-end gap-3'
										>
											<TextField
												fullWidth
												className='text-lg'
												isRequired
												name='email'
												type='email'
												onChange={(e) => {
													setEmail(e);
												}}
												isInvalid={isEmailInvalid}
											>
												<Label className='text-lg font-jetbrains'>Email</Label>
												<div className='w-full flex flex-col sm:flex-row gap-3 sm:gap-1'>
													<Input
														fullWidth
														className=' w-full border-3 border-gray-50 rounded-xs text-lg'
														placeholder='john@example.com'
														value={email}
													/>
													{isEmailInvalid === false && (
														<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
															<Button
																onClick={() => {
																	setPage(2);
																}}
																className='sm:h-full w-full sm:w-fit border-gray-600 rounded-xs border-3 bg-gray-900 text-gray-100 sm:ml-2'
															>
																<span className='hidden sm:inline text-lg font-jetbrains'>
																	{'=>'}
																</span>{' '}
																<span className='sm:hidden text-lg font-jetbrains'>
																	{'Next =>'}
																</span>
															</Button>
														</motion.div>
													)}
												</div>
												{isEmailInvalid && (
													<FieldError className='text-sm'>
														Please enter a valid email address
													</FieldError>
												)}
											</TextField>
										</motion.div>
									</AnimatePresence>
								) : (
									<AnimatePresence>
										<motion.div
											initial={{ opacity: 0 }}
											animate={{ opacity: 1 }}
											exit={{ opacity: 0 }}
											className='flex flex-col gap-14'
										>
											<div className='flex flex-col gap-5'>
												<TextField isRequired name='text' type='text'>
													<Label className='text-lg font-jetbrains'>Name</Label>
													<Input
														fullWidth
														name='name'
														className='font-jetbrains font-light border-3 text-lg border-gray-50 rounded-xs '
														placeholder='What is your name?'
													/>
													<FieldError />
												</TextField>

												<TextField isRequired>
													<Label className='text-lg font-jetbrains'>Message</Label>
													<TextArea
														name='message'
														className='border-3 text-lg font-light font-jetbrains border-gray-50 rounded-xs '
														placeholder='Message'
														rows={5}
													></TextArea>
												</TextField>
											</div>
											<div className='flex flex-col gap-4'>
												<div>
													<div className='h-captcha' data-captcha='true'></div>
													<div className='w-full max-w-[65vw]  flex justify-center sm:justify-start'>
														<HCaptcha
															size='normal'
															sitekey='50b2fe65-b00b-4b9e-ad62-3ba471098be2'
															reCaptchaCompat={false}
															onVerify={onHCaptchaChange}
														/>
													</div>
												</div>
												<div className='flex flex-col sm:flex-row gap-1 flex-nowrap'>
													<Button
														fullWidth
														className='font-jetbrains w-full sm:w-fit border-gray-400 text-gray-500 rounded-xs border-2  text-lg sm:p-5'
														variant='outline'
														onClick={() => {
															setPage(1);
														}}
													>
														Cancel
													</Button>
													<Button
														type='submit'
														className='font-jetbrains w-full sm:w-fit order-first sm:order-last border-black rounded-xs border-2 bg-gray-900 text-gray-100 text-lg p-5'
													>
														Submit
													</Button>
												</div>
											</div>
										</motion.div>
									</AnimatePresence>
								)}
							</Form>
						)}
					</Surface>
				</div>
			</MotionCardAnimation>
		</>
	);
}
