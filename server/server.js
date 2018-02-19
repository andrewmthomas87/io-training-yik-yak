const express = require('express')

const app = express()

const posts = []

app.use(express.static('./static'))

app.get('/post', function (request, response) {
	if (!request.query.text) {
		response.sendStatus(400)
		return
	}

	const post = {
		text: request.query.text,
		date: Date.now()
	}
	posts.unshift(post)

	response.send(JSON.stringify(post))
})

app.get('/posts', function (request, response) {
	response.send(JSON.stringify(posts))
})

app.listen(8080, function () {
	console.log('Server listening on port 8080')
})
