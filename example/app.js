import express from 'express'
const app = express()
import ejs from 'ejs'
import fetch from 'node-fetch'

// api key
const myKey = '5b71ff380e5bca0b9e1eceb280e92e7a'

// k to cel
function ktoC(k) {
  return (k - 273.15).toFixed(2)
}

// middleware
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.get('/:city', async (req, res) => {
  let { city } = req.params
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myKey}`

  let d = await fetch(url)
  let djs = await d.json()
  let { temp } = djs.main
  console.log(temp)
  let newTemp = ktoC(temp)
  res.render('weather.ejs', { djs, newTemp })
})

app.listen(3000, () => {
  console.log('Server is running on port 3000.')
})
