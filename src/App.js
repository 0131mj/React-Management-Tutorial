import React, { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image':'https://placeimg.com/64/64/any',
    'name':'김길동',
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
]

class App extends Component {
  render() {
    return (
      <div>
        {customers.map(c => (
          <Customer
            key={c.id}
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
        />
        ))}
      </div>
    );
  }
}

export default App;
