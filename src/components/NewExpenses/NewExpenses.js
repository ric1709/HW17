import { useState } from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpenses.css'
const NewExpenses = (props) => {
	const [isNewExpense, setIsNewExpense] = useState(false)
	const [isSuccess, setIsSuccess] = useState(false)
	const [error, setError] = useState(null)

	let newExpense = ''
	if (isNewExpense) {
		newExpense = (
			<ExpenseForm
				onChangeNewExpense={setIsNewExpense}
				onSubmit={props.onSubmit}
				success={setIsSuccess}
				error={setError}
			/>
		)
	} else
		newExpense = (
			<button onClick={() => setIsNewExpense(true)}>
				ADD NEW EXPENSE
			</button>
		)

	return (
		<div className='new-expense'>
			{error && <h3>{error}</h3>}
			{isSuccess && <p className='success'>Your expenses have successfully saved</p>}
			{newExpense}
		</div>
	)
}

export default NewExpenses
