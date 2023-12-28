import ProgressBar from './ProgressBar'
import { useEffect, useState } from 'react'

import confetti from 'canvas-confetti'

const App = () => {
	const [progress, setProgress] = useState(0)

	const triggerConfetti = () => {
		confetti({
			particleCount: 100,
			spread: 70,
			origin: { y: 0.6 },
		})
	}

	useEffect(() => {
		if (progress >= 100) {
			triggerConfetti()
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
			<p className='text-center mb-4'>
				{progress <= 100
					? `Progress: ${progress.toFixed(0)}%`
					: 'Loading Complete!'}
			</p>
		</div>
	)
}

export default App
