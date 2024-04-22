import express from 'express'
import cors from 'cors'
import { connectToAtlas } from './db/connection'

const app = express()
const PORT = process.env.PORT || 5050

app.use(cors())
app.use(express.json())
connectToAtlas()

try {
	app.listen(PORT, () => {
		return console.log(`Server listening at http://localhost:${PORT}`)
	})
}
catch (err) {
	console.log(err)
}