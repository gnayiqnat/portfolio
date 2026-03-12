import HCaptcha from "@hcaptcha/react-hcaptcha";
import { Button, FieldError, Form, Input, Label, Surface, TextField } from "@heroui/react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactSection() {
  
  const { register, handleSubmit, setValue } = useForm({
    defaultValues: {},
  });

  const onHCaptchaChange = (token) => {
    setValue('h-captcha-response', token);
  };
  const [page, setPage] = useState(1);
  const [result, setResult] = useState('');
  const [email, setEmail] = useState(null);
  const isEmailInvalid = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);

  useEffect(() => {
    console.log('eeemm', isEmailInvalid);
  }, [isEmailInvalid]);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult('Sending....');
    const formData = new FormData(event.target);
    
    formData.append('email', email);

    formData.append('access_key', 'abc'); //----------------------------------------
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult('Form Submitted Successfully');
      event.target.reset();
    } else {
      setResult('Error');
    }
  };
  return (
			<>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 1, duration: 1 }}
					id='projects'
					className='flex flex-col w-dvw h-dvh items-center justify-center bg-background pt-10 pb-10'
				>
					{' '}
					<div className='h-44'>
						<h2 className='text-2xl font-jetbrains font-bold'>
							--- CONTACT ----------------------------
						</h2>
						<div className='flex flex-row items-start max-h-72'>
							<img className='w-32' src='/ascii-phone.png' />

							<Surface className='w-full'>
								<Form
									className='pl-7 pr-8 w-full mt-5 flex flex-col gap-3'
									onSubmit={onSubmit}
								>
									<AnimatePresence>
										{page === 1 ? (
											<>
												<motion.div className='w-full flex flex-row items-end gap-3'>
													<TextField
														className='w-full'
														isRequired
														name='email'
														type='email'
														onChange={(e) => {
															setEmail(e);
														}}
														isInvalid={isEmailInvalid}
													>
														<Label>Email</Label>
														<div className='w-full flex flex-row gap-1'>
															<Input
																fullWidth
																className='border-2 border-black rounded-sm'
																placeholder='john@example.com'
																value={email}
															/>
															{!isEmailInvalid && (
																<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
																	<Button
																		onClick={() => {
																			setPage(2);
																		}}
																		className='rounded-sm bg-gray-900 text-gray-200 ml-2'
																	>
																		{'->'}
																	</Button>
																</motion.div>
															)}
														</div>
														{isEmailInvalid && (
															<FieldError>Please enter a valid email address</FieldError>
														)}
													</TextField>
												</motion.div>
											</>
										) : (
											<>
												<TextField isRequired name='text' type='text'>
													<Label>Name</Label>
													<Input
														name='name'
														className='border-2 border-black rounded-sm'
														placeholder='What is your name?'
													/>
													<FieldError />
												</TextField>
												<Label className='-mb-2'>Message</Label>
												<TextArea
													name='message'
													className='border-2 border-black rounded-sm'
													required
													placeholder='Message'
												></TextArea>
												<div class='h-captcha' data-captcha='true'></div>
												<HCaptcha
													sitekey='50b2fe65-b00b-4b9e-ad62-3ba471098be2'
													reCaptchaCompat={false}
													onVerify={onHCaptchaChange}
												/>
												<div className='flex flex-row gap-1 flex-nowrap'>
													<Button
														className='border-black rounded-sm border-2 bg-gray-50'
														variant='outline'
														onClick={() => {
															setPage(1);
														}}
													>
														Cancel
													</Button>
													<Button
														type='submit'
														className='border-black rounded-sm border-2 bg-gray-900 text-gray-100'
													>
														Submit
													</Button>
												</div>
											</>
										)}
									</AnimatePresence>
								</Form>
							</Surface>
						</div>
					</div>
				</motion.div>
			</>
		);
}