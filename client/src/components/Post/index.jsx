import React from 'react'

import './component.less'

class Post extends React.Component {

	constructor(props) {
		super(props)

		this.state = { text: '' }

		this._onChange = this._onChange.bind(this)
		this._onSubmit = this._onSubmit.bind(this)
	}

	render() {
		return (
			<form id='post' onSubmit={this._onSubmit}>
				<input type='text' placeholder={'What\'s on your mind, anon?'} value={this.state.text} onChange={this._onChange} />
				<button type='submit'>Post</button>
			</form>
		)
	}

	_onChange(event) {
		const value = event.currentTarget.value
		this.setState({ text: value })
	}

	_onSubmit(event) {
		event.preventDefault()

		if (this.state.text) {
			this.props.onPost(this.state.text)
			this.setState({ text: '' })
		}
	}

}

export default Post
