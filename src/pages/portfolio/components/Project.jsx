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
			],
			image_url: [
				'/project/Project_top_coach_1.png',
				'/project/Project_top_coach_2.png'
			]
		},
		{
			name: 'Ymner',
			description:
				'A system designed to crawl data from multiple online sources, normalize and store it in a structured format, and provide intelligent search capabilities using natural language processing (NLP) and AI.',
			urls: ['https://www.ymner.com/sv/home',],
			image_url: [
				'/project/Project_ymner_1.png',
				'/project/Project_ymner_2.png'
			]
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
								<div className="flex gap-4 flex-wrap mt-4">
									{item.urls.map(u => (
										<button
											key={u}
											className="text-blue-600 px-2 py-1 border border-blue-600 rounded hover:bg-blue-50 hover:underline transition"
											onClick={() => window.open(u, '_blank')}
											type="button"
										>
											Relate app
										</button>
									))}
								</div>
							</div>
							<div className="flex direction-row flex-wrap gap-0 justify-center items-center">
								{item.image_url.map((img, idx) => (
									<img
										key={idx}
										alt={`Project ${item.name} - ${idx + 1}`}
										src={img}
										className=" h-[15.625rem] w-[31.25rem]"
									/>
								))}
							</div>
						</div>
					)
				})}
			</div>
		</div>
	)
}
