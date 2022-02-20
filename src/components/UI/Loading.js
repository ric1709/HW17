import React from 'react'
import './Loading.css'
import ReactDOM from 'react-dom'

const Backdrop = () => {
	return <div className='backdrop' />
}

const ModalOverLay = () => {
	return (
		<div className='loading'>
			<div className='lds-spinner'>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
				<div></div>
			</div>
			
			
		</div>
	)
}

function Loading(props) {
	return (
		<>
			{ReactDOM.createPortal(
				<Backdrop />,
				document.getElementById('backdrop'),
			)}
			{ReactDOM.createPortal(
				<ModalOverLay />,
				document.getElementById('modal-root'),
			)}
		</>
	)
}

export default Loading
