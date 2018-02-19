import React from 'react'

import './component.less'

const Posts = (props) => {
	const posts = props.posts.map(post => (
		<div key={post.date}>
			<div>{post.text}</div>
			<div>{new Date(post.date).toLocaleTimeString()} {new Date(post.date).toLocaleDateString()}</div>
		</div>
	))

	return (
		<div id='posts'>
			<div>{posts}</div>
		</div>
	)
}

export default Posts
