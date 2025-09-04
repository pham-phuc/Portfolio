import { Link } from 'react-router-dom'
import { TypeAnimation } from 'react-type-animation'

export default function Project() {
	const items = [
		{
			name: 'TopCoach',
			description:
				'Developed to connect personal trainers with clients, helping manage and enhance the gym training experience.',
			urls: [
				'https://app.topcoach.se/',
				'https://topcoach.joosdigital.com/'
			],
			image_url: '/project/1.png'
		},
		{
			name: 'Ymner',
			description:
				'A system designed to crawl data from multiple online sources, normalize and store it in a structured format, and provide intelligent search capabilities using natural language processing (NLP) and AI.',
			urls: [
				'https://www.ymner.com/sv/home',
				'https://dev.ymner.com/'
			],
			image_url: '/project/2.png'
		}
	]
	return (
		<div className="">
			<h2 className="font-bold text-[2.4rem] md:text-[3.4rem] text-center my-12 sticky top-0 z-[99] bg-black">
				Recent Project
			</h2>
			<div className="py-12 max-w-[1200px] mx-auto container_project">
				{items.map((item, index) => {
					return (
						<div className="grid md:gap-24 lg:grid-cols-2 container_item h-[80vh] max-w-[90%] mx-auto">
							<div className="flex justify-center flex-col ">
								<h3 className="font-bold text-[2rem] md:text-[3rem]">
									{item.name}
								</h3>
								<TypeAnimation
									sequence={[item.description]}
									wrapper="span"
									speed={50}
									style={{
										fontSize: '1.3rem',
										display: 'inline-block'
									}}
									repeat={false}
								/>
								<div className="flex gap-4 flex-wrap ">
									{item.urls.map(u => (
										<Link
											to={u}
											target="_blank"
											key={u}
											className="underline text-blue-600"
										>
											{u}
										</Link>
									))}
								</div>
							</div>
							<img alt="1" src={item.image_url} />{' '}
						</div>
					)
				})}
			</div>
		</div>
	)
}
