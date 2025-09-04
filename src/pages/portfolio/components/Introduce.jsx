import { Button } from '@/components/ui/button'
import { SquareArrowDown } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Introduce() {
	const handleScroll = () => {
		window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })
	}

	return (
		<div className="flex flex-col  items-center justify-center w-full h-screen relative bg-gradient-to-t from-black to-gray-200">
			<div className="flex flex-col gap-3 items-center justify-center w-full max-w-2xl p-4 mx-auto text-center">
				<img
					id="avatar"
					src="/avatar.jpg"
					title="Avatar"
					alt="avatar"
					className="rounded-[50%] aspect-square w-4/5 max-w-[250px] border-2 shadow-md"
				/>
				<h1 className="font-bold text-[2rem] md:text-[3rem] text-primary my_name">
					Hi, I'm Pham Phuc
				</h1>
				<p className="text-start">
					Open to both freelance and long-term opportunities!
				</p>
				<p className="mt-4 text-pretty  sort_intro">
					I'm currently seeking new opportunities, projects, or
					full-time roles where I can contribute, grow, and take on
					new challenges. I'm passionate about building great products
					and working with motivated teams.
				</p>
				<p className="text-pretty sort_intro">
					My long-term goal is to transition into a Product Owner or
					Project Manager role, where I can bring together technical
					understanding and strategic vision to drive meaningful
					impact.{' '}
				</p>
				<p className="sort_intro">📞 Phone: 0334526840</p>
				<Link
					to={'https://www.facebook.com/phuc.pham.541673/'}
					target="_blank"
					className="sort_intro"
				>
					<p>
						🔗 Facebook: https://www.facebook.com/phuc.pham.541673/
					</p>
				</Link>
			</div>
			<Button
				className="absolute animate-bounce bottom-0 p-2"
				variant="outline"
				size="lg"
				onClick={handleScroll}
			>
				<SquareArrowDown /> Scroll to see details
			</Button>
		</div>
	)
}
