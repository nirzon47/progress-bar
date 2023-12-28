const ProgressBar = ({ progress }) => {
	return (
		<progress
			className='progress progress-info w-64 md:w-96 h-4 mb-8'
			value={progress}
			max='100'
		></progress>
	)
}
export default ProgressBar
