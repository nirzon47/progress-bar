import ProgressBar from './ProgressBar'
import { useEffect, useState } from 'react'

const App = () => {
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		if (progress >= 100) {
			return
		}

		const id = setInterval(() => {
			setProgress((prevProgress) => {
				if (prevProgress === 100) {
					clearInterval(id)
					return prevProgress
				}

				return prevProgress + 0.1
			})
		}, 5)

		return () => clearInterval(id)
	}, [progress])

	return (
		<div className='grid place-content-center h-screen'>
			<h1 className='text-center font-medium text-xl mb-8'>Progress Bar</h1>
			<ProgressBar progress={progress} />
			<p className='text-center'>
				{progress <= 100
					? `Progress: ${progress.toFixed(0)}%`
					: 'Loading Complete!'}
			</p>
		</div>
	)
}

export default App
