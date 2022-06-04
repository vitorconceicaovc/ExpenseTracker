import React, { useState } from 'react'
import * as C from "./styles"

const Form = () => {
    const [desc, setDesc] = useState("");
    const [amount, setAmount] = useState("");
    const [isExpense, setExpense] = useState(false);

    const handleSave = () => {
        if (!desc || !amount) {
            alert("Enter description and value!");
            return;
        } else if (amount < 1 ) {
            alert("The value must be positive!");
            return;
        }
    };

  return (
    <>
        <C.Container>
            <C.InputContent>
                <C.Label>Description</C.Label>
                <C.Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </C.InputContent>
            <C.InputContent>
                <C.Label>Value</C.Label>
                <C.Input
                    value={amount}
                    type="number" 
                    onChange={(e) => setAmount(e.target.value)}
                />
            </C.InputContent>
            <C.RadioGroup>
                <C.Input
                    type="radio"
                    id="rIncome"
                    defaultChecked
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rIncome" >Flows</C.Label>
                <C.Input
                    type="radio"
                    id="rExpenses"
                    name="group1"
                    onChange={() => setExpense(!isExpense)}
                />
                <C.Label htmlFor="rIncome" >Outflows</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADD</C.Button>
        </C.Container>
    </>
  )
}

export default Form