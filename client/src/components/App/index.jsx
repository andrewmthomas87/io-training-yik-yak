import React from 'react'

import Post from '../Post'
import Posts from '../Posts'

import './component.less'

class App extends React.Component {

	constructor(props) {
		super(props)

		this.state = { posts: [] }

		this._onPost = this._onPost.bind(this)
	}

	componentWillMount() {
		fetch('http://localhost:8080/posts').then(response => response.json()).then((posts) => {
			this.setState({ posts: posts })
		})
	}

	render() {
		return (
			<section id='app'>
				<Post onPost={this._onPost} />
				<Posts posts={this.state.posts} />
			</section>
		)
	}

	_onPost(text) {
		fetch(`http://localhost:8080/post?text=${text}`).then(response => response.json()).then((post) => {
			this.setState({ posts: [post, ...this.state.posts] })
		})
	}

}

export default App
