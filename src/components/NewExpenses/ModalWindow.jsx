import classes from './ModalWindow.module.css'

const ModalWindow = ({ setModal }) => {
	const buttonHandler = () => {
		setModal(false)
	}
	return (
		<div className={classes.modal_window}>
			<h1 className={classes.modal_text}>Вы не заполнили все поля</h1>
			<button className={classes.close_btn} onClick={buttonHandler}>
				<img
					src='https://img.icons8.com/ultraviolet/40/000000/ok.png'
					alt='logo'
				/>
			</button>
		</div>
	)
}

export default ModalWindow
