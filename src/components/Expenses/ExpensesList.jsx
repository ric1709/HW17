import React from 'react'
import ExpenseItem from './ExpenseItem'
import './ExpensesList.css'

const ExpensesList = ({ expenses, selected, items }) => {
	if (selected === 'All') {
		return items.map((element) => {
			return (
				<ExpenseItem
					key={element.id}
					title={element.title}
					amount={element.amount}
					date={element.date}
				/>
			)
		})
	}
	if (expenses.length === 0) {
		return <h1 className='expenses-list__fallback'>No Expense Found</h1>
	}

	return (
		<ul className='expenses-list'>
			{expenses.map((element) => {
				return (
					<ExpenseItem
						key={element.id}
						title={element.title}
						amount={element.amount}
						date={element.date}
					/>
				)
			})}
		</ul>
	)
}

export default ExpensesList
