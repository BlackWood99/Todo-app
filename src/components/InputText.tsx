import React, { useState } from "react"

interface IAddTodoType {
	onAdd(title: string): void
}

export const InputText: React.FC<IAddTodoType> = (props) => {
	const [title, setTitle] = useState<string>("")

	const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value)
	}

	const keyPressHandler = (event: React.KeyboardEvent) => {
		if (event.key === "Enter") {
			props.onAdd(title)
			setTitle("")
		}
	}

	return (
		<div className='inputText'>
			<div className='container'>
				<div className='row'>
					<div className='input-field col s12'>
						<input
							onKeyPress={keyPressHandler}
							onChange={changeHandler}
							value={title}
							id='first_name2'
							type='text'
							className='validate'
							placeholder='Write text and press Enter'
						/>
						<label className='active' htmlFor='first_name2'>
							Create ToDo
						</label>
					</div>
				</div>
			</div>
		</div>
	)
}
