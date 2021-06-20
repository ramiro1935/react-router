import React from 'react'
import { useField } from '../hooks'

const CreateNew = props => {
	const content = useField('text')
	const author = useField('text')
	const info = useField('text')

	const handleSubmit = e => {
		e.preventDefault()
		props.addNew({
			content: content.value,
			author: author.content,
			info: info.value,
			votes: 0,
		})
	}

	const handleReset = e => {
		e.preventDefault()
		content.onReset()
		author.onReset()
		info.onReset()
	}
	return (
		<div>
			<h2>create a new anecdote</h2>
			<form onSubmit={handleSubmit}>
				<div>
					content
					<input
						name='content'
						value={content.value}
						type={content.type}
						onChange={content.onChange}
					/>
				</div>
				<div>
					author
					<input
						name='author'
						value={author.value}
						type={content.type}
						onChange={author.onChange}
					/>
				</div>
				<div>
					url for more info
					<input
						name='info'
						value={info.value}
						type={content.type}
						onChange={info.onChange}
					/>
				</div>
				<button>create</button>
				<button onClick={handleReset}>reset</button>
			</form>
		</div>
	)
}

export default CreateNew
