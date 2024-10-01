import React from 'react'
import './estilo.css'
import Lixo from '../../assets/lixo.svg'
//import api from '../../server/api'

function Home() {

  const users = [
    {
      id: '1',
      name: 'Dorivaldo',
      age: '#',
      email: 'dorivaldo@gmail.com'
    },
    {
      id: '2',
      name: 'Igor',
      age: '#',
      email: 'igor@gmail.com'
    },
    {
      id: '3',
      name: 'António',
      age: '#',
      email: 'antonio@gmail.com'
    }


  ]

  return (
    <div className="container">

      <form action="">
        <h1>Create user</h1>
        <input type="text" name="nome" id="" placeholder='first name' required/>
        <input type="number" name="idade" id="" placeholder='age' required/>
        <input type="email" name="email" id="" placeholder='email' required/>
        <button type="button">Cadastrar</button>
      </form><br />

      {users.map(user => (
        <div key={user.id} className='card'>

          <div className='list_cadastrados'>
              
            <div className="ident">
              <p>{user.id}</p>
              <p>Nome: <span> {user.name} </span></p>
              <p>Idade: <span> {user.age} anos </span></p>
              <p>Email: <span>{user.email} </span></p>
            </div>

            <button:re>
              <i className='fa-solid fa-trash'></i>
            </button:re>







          </div>

        </div>


      ))}


    </div>


  )
}

export default Home
