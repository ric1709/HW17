import React, { useCallback, useEffect, useState } from 'react'
import Expenses from './components/Expenses/Expenses'
import NewExpenses from './components/NewExpenses/NewExpenses'
import { BASE_URL } from '../src/utils/constants/constants.js'
import Loading from './components/UI/Loading'

const App = () => {
	const [expenses, setExpenses] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(null)
	const getDataHandler = useCallback(async () => {
		setIsLoading(true)
		try {
			const response = await fetch(`${BASE_URL}/expenses.json`)
			if (!response.ok) {
				throw new Error('Somthing went wrong')
			}
			const data = await response.json()
			const takenData = []
			for (let key in data) {
				takenData.push({
					id: key,
					title: data[key].title,
					amount: data[key].amount,
					date: new Date(data[key].date),
				})
			}
			setExpenses(takenData)
		} catch (error) {
			setError(error.message)
		}
		setIsLoading(false)
	}, [])

	useEffect(() => {
		getDataHandler()
		setTimeout(() => {
			setError(null)
		}, 3000);
	}, [getDataHandler])
	

	return (
		<div>
			{error && <h1 style={{marginLeft:'590px'}}>{error}</h1>}
			{isLoading && <Loading />}
			<NewExpenses onSubmit={getDataHandler} />
			<Expenses items={expenses} />
		</div>
	)
}

export default App
