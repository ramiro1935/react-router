import React from 'react'
import { Link } from 'react-router-dom'
const AnecdoteList = ({ anecdotes }) => (
	<div>
		<h2>Anecdotes</h2>
		<ul>
			{anecdotes.map(anecdote => (
				<Link
					style={{ display: 'block' }}
					to={`/anecdotes/${anecdote.id}`}
					key={anecdote.id}>
					{anecdote.content}
				</Link>
			))}
		</ul>
	</div>
)

export default AnecdoteList
