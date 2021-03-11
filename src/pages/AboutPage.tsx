import React from "react"
import { useHistory } from "react-router-dom"

export const AboutPage: React.FC = () => {
	const history = useHistory()
	return (
		<section>
			<div className='container'>
				<div className='aboutPage'>
					<h1>About page</h1>
					<p>
						Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
						provident atque libero nihil, nemo id porro eaque dolorem
						perspiciatis quo possimus mollitia a quibusdam, et voluptatem,
						quidem itaque veniam! Et necessitatibus delectus dolorem vero in
						aperiam minus doloremque ex. Possimus dolor, odio labore delectus,
						incidunt mollitia aliquam dolores cum at itaque optio voluptates
						esse sint porro, voluptas tempora distinctio numquam vel! Modi
						cumque minus numquam odit aspernatur quasi ratione enim aut, ex
						voluptas omnis expedita animi eaque tempora unde dignissimos minima
						laudantium tenetur praesentium nulla commodi. Quos tempore iste,
						tenetur tempora modi quod neque veniam vitae, eaque laborum facilis
						quae.
					</p>
					<button className='btn' onClick={() => history.push("/")}>
						Перейти к ToDo
					</button>
				</div>
			</div>
		</section>
	)
}
