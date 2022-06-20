import React from 'react'
import * as C from "./styles"

const Header = () => {
  return (
    <C.Container>
        <C.Header>
        <C.Title>Expense Tracker</C.Title>
        <C.Github><a href='https://github.com/vitorconceicaovc/ExpenseTracker' target="_blank" style={{textDecoration: 'none', color: 'lightgray'}} >Github</a></C.Github>
        </C.Header>
    </C.Container>
  )
}

export default Header