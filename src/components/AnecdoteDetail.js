import React from 'react'
const AnecdoteDetail = ({ anecdote }) => {
	return (
		<div>
			<h2>
				{anecdote.content} by {anecdote.author}
			</h2>
			<p>has {anecdote.votes} votes</p>
		</div>
	)
}

export default AnecdoteDetail
