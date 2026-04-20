import ProjectSection from "@/components/sections/projects";
import ReactLenis from "lenis/react";

export default function Projects() {
  return (
		<div className='w-full flex justify-center'>
			<ReactLenis />
				<ProjectSection />
			</div>
		);
}