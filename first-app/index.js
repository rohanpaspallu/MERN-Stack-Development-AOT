const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors())

app.get('/api/palindrome', (req, res) => {
  // res.send([1,2,3,4 ]);
  // res.send(req.query.sortBy);

  let str = req.query.message

  let rev = str.split('').reverse().join('')
  let result = []
  let substring = str.split(' ')
  for (let i = 0; i < substring.length; i++) {
    if (substring[i] === substring[i].split('').reverse().join('')) {
      result.push(substring[i])
    }
  }

  let queryStr = req.query.queryString.split(' ').join('')
  console.log(queryStr)

  str += ''

  queryStr += ''
  if (queryStr.length <= 0) return str.length + 1

  var n = 0,
    pos = 0,
    step = queryStr.length

  while (true) {
    pos = str.indexOf(queryStr, pos)
    if (pos >= 0) {
      ++n
      pos += step
    } else break
  }

  let reverse_query = queryStr.split('').reverse().join('')

  if (reverse_query.length <= 0) return str.length + 1

  var m = 0,
    pos1 = 0,
    step1 = reverse_query.length

  while (true) {
    pos1 = str.indexOf(reverse_query, pos1)
    if (pos1 >= 0) {
      ++m
      pos1 += step1
    } else break
  }

  res.send({ palindrome: result, occurences: n, reverse: m })

  //   res.send(
  //     'palindrome words = ' +
  //       result +
  //       '<br> </br>' +
  //       'Occurences = ' +
  //       n +
  //       '<br> </br>' +
  //       'Number of reverse words = ' +
  //       m
  //   )
})

const port = process.env.PORT || 5000
app.listen(port, () => console.log(`listening on port: ${port}`))
