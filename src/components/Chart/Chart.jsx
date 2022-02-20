import './Chart.css'
import ChartBar from './ChartBar'

const Chart = ({ dataPoints }) => {
	const dataPointsValues = dataPoints.map((data) => data.value)
	const totalMax = Math.max(...dataPointsValues)
	return (
		<div className='chart'>
			{dataPoints.map((dataPoint) => (
				<ChartBar
					key={dataPoint.label}
					value={dataPoint.value}
					maxValue={totalMax}
					label={dataPoint.label}
				/>
			))}
		</div>
	)
}

export default Chart
