import { Button, Card, Chip } from "@heroui/react";
import { motion } from 'motion/react';
import { BorderButton } from "../border-button";

import { FaReact } from 'react-icons/fa';
import { SiMui } from 'react-icons/si';


export default function ProjectSection() {
  return (
			<>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ delay: 1, duration: 1 }}
					id='projects'
					className='flex flex-col gap-10 w-dvw h-dvh items-center justify-center bg-background pt-10 pb-10'
				>
					{' '}
					<div className='w-3/4 flex justify-start'>
						<h2 className='text-2xl font-jetbrains font-bold'>
							--- PROJECTS ----------------------------
						</h2>
					</div>
					<div className='flex flex-row justify-around items-between w-full pl-20 pr-20'>
						<div className='h-fit w-fit'>
							<motion.ul className='flex flex-col gap-2'>
								<motion.li>
									<Button variant='ghost' className='rounded-sm'>
										Websites
									</Button>
								</motion.li>{' '}
								<motion.li>
									<BorderButton type='projects' content='Applications' />
								</motion.li>
							</motion.ul>
						</div>
						<div className='flex flex-row gap-2 flex-wrap h-fit w-fit'>
							<WebCard type />
							<WebCard />
						</div>
					</div>
				</motion.div>
			</>
		);
}


function WebCard() {
  return (
    <>
      <Card className='flex flex-col justify-around gap-4 h-fit w-xs bg-card rounded-md'>
        <Card.Header className='flex gap-2.5'>
          <img
            alt='msssa'
            aria-hidden='true'
            className='blur-xs opacity-20 absolute inset-0 h-full w-full object-cover pointer-events-none'
            src='/msssa.png'
          />
          <div className='flex flex-row gap-2 items-center'>
            <Card.Title className='font-tinos font-bold text-2xl'>MSSSA</Card.Title>
            <Card.Description>
              <Chip
                size='sm'
                className='rounded-xs bg-none text-gray-600 pl-2 pr-2 text-[11px]'
              >
                2023
              </Chip>
            </Card.Description>
          </div>
          <Card.Content className='font-tinos'>
            A website designed to log students' attendance. Everything from the
            authentication, to the data storage and analytics are powered by Supabase.
            I have put a greater emphasis into the animations of the website, giving
            it life and bubbliness.
          </Card.Content>
        </Card.Header>
        <Card.Footer>
          <div className='flex gap-1'>
            <Chip className='rounded-xs bg-gray-950 text-blue-100 text-xs'>
              <FaReact />
              React
            </Chip>
            <Chip className='rounded-xs bg-gray-950 text-blue-400 text-xs'>
              <SiMui />
              Material UI
            </Chip>
          </div>
        </Card.Footer>
      </Card>
    </>
  );
}