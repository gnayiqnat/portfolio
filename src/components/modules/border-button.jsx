
import { Button } from "@heroui/react";
import Link from "next/link";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import HoverScaleAnimation from "../animations/hover-scale";

export default function BorderButton({url, text, newTab, type, darkBg='da'}) {
  
  return (
			<HoverScaleAnimation>
				{newTab ? (
					<Link target='_blank' href={url} rel='noopener noreferrer'>
						<Button
							className={`rounded-sm border-2 ${darkBg == 'dark' ? 'dark:text-foreground bg-background/3 dark:border-foreground/40 border-background/20' : 'text-foreground bg-foreground/3'} ${type === 'large' && 'text-lg py-6 px-14'}`}
						>
							{text} {text == 'GITHUB' ? <LuGithub /> : <LuExternalLink />}
						</Button>
					</Link>
				) : (
					<Link href={url}>
						<Button
							className={`rounded-sm border-2 ${darkBg == 'dark' ? 'dark:text-foreground bg-background/3 dark:border-foreground/40 border-background/20' : 'text-foreground bg-foreground/3'} ${type === 'large' && 'text-lg py-6 px-14'}`}
						>
							{text} {text == 'GITHUB' ? <LuGithub /> : <LuExternalLink />}
						</Button>
					</Link>
				)}
			</HoverScaleAnimation>
		);
}