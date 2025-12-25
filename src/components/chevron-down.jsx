import { motion } from "motion/react";

export default function Chevron() {
  
  return (
			<>
				<motion.div
					className="fixed top-8/9 z-100 left-1/2 -translate-x-1/2"
					initial={{ scale: 1 }}
					whileHover={{ scale: 1.1 }}
				>
				</motion.div>
			</>
		);
}