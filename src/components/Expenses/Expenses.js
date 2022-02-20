import React, { useState } from 'react'
import Card from '../UI/Card'
import './Expenses.css'
import ExpensesChart from './ExpensesChart'
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList'

const Expenses = ({ items }) => {
	const [filteredYear, setFilteredYear] = useState('All')
	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear)
	}
	const filteredExpenses = items.filter((expense) => {
		return expense.date.getFullYear().toString() === filteredYear
	})
	return (
		<Card className='expenses'>
			<ExpensesChart
				expenses={filteredExpenses}
				items={items}
				selected={filteredYear}
			/>
			<ExpensesFilter
				onChangeFilter={filterChangeHandler}
				selected={filteredYear}
			/>
			<ExpensesList
				expenses={filteredExpenses}
				selected={filteredYear}
				items={items}
			/>
		</Card>
	)
}

export default Expenses
