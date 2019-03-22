const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
          'id': 1,
          'image':'https://placeimg.com/64/64/any',
          'name':'김길동s',
          'birthday': '981222',
          'gender' :'남자',
          'job': '개발자' 
        },
        {
          'id': 2,
          'image':'https://placeimg.com/64/64/1',
          'name':'박길동',
          'birthday': '991222',
          'gender' :'남자',
          'job': '대학생' 
        },
        {
          'id': 3,
          'image':'https://placeimg.com/64/64/2',
          'name':'최길동',
          'birthday': '961222',
          'gender' :'여자',
          'job': '대학원생' 
        },
      ]);
})

app.listen(port, () => console.log(`Listneing on port ${port}`))