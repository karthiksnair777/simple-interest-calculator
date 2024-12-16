import { Button, Stack, TextField } from '@mui/material'
import './App.css'
import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState("")
  const [rate, setRate] = useState("")
  const [year, setYear] = useState("")
  const [interest, setInterest] = useState(0)

  const [isInvalidPrinciple, setIsInvalidPrinciple] = useState(false)
  const [isInvalidRate, setIsInvalidRate] = useState(false)
  const [isInvalidYear, setIsInvalidYear] = useState(false)


  console.log(amount, rate, year);
  console.log(interest);

  const validRegex = /^[0-9]+(\.[0-9]+)?$/;


  const validateInput = (e) => {
    console.log(e);

    const { name, value } = e.target
    console.log(name, value);

    if (name == 'principle') {
      setAmount(value)
    }
    else if (name == 'rate') {
      setRate(value)
    }
    else {
      setYear(value)
    }
    if (validRegex.test(value) || value == "") {
      if (name == 'principle') {
        setIsInvalidPrinciple(false)
      }
      else if (name == 'rate') {
        setIsInvalidRate(false)
      }
      else {
        setIsInvalidYear(false)
      }

    }
    else {
      if (name == 'principle') {
        setIsInvalidPrinciple(true)
      }
      else if (name == 'rate') {
        setIsInvalidRate(true)

      }
      else {
        setIsInvalidYear(true)

      }
    }
  }
  const handleCalculate = (e) => {
    e.preventDefault()

    console.log("simple interest calculator");
    if (amount && rate && year) {

      setInterest((amount * rate * year) / 100)

    }
    else {
      alert("Please fill all the fields")
    }

  }
  const handleReset = () => {
    setAmount("") 
    setRate("")
    setYear("")
    setIsInvalidPrinciple(false)
    setIsInvalidRate(false)
    setIsInvalidYear(false)
    setInterest(0)

  }
  return (
    <>
      <div className='bg-dark d-flex align-Items-center justify-content-center' style={{ minHeight: '100vh', width: '100%' }}>
        <div className='bg-light rounded p-5' style={{ width: '550px' }}>
          <h1>SIMPLE  INTEREST CALCULATOR </h1>
          <p>calculate simple interest easily</p>
          <div className='text-light bg-warning rounded d-flex  flex-column align-Items-center justify-content-center' style={{ height: '150px' }}>
            <h1 className='text-center text-dark' style={{ fontSize: '50px' }} >₹&nbsp;{interest}</h1>
            <h1 className='text-center text-dark'>Total Simple Iinterest</h1>
          </div>
          <div className='mt-4'>
            <form>
              <TextField onChange={validateInput} value={amount || ""} name='principle' id="principle_amount" label="amount" variant="standard" className='w-100 mb-1' />
              {isInvalidPrinciple &&
                <div className='fw-bold text-danger'>Invalid principle amount</div>
              }
              <TextField onChange={validateInput} value={rate || ""} name='rate' id="interest_rate" label="Rate" variant="standard" className='w-100 mb-3' />
              {isInvalidRate &&
                <div className='fw-bold text-danger'>Invalid interest rate</div>
              }
              <TextField onChange={validateInput} value={year || ""} name='year' id="time_period" label="Year" variant="standard" className='w-100 mb-3' />
              {isInvalidYear &&
                <div className='fw-bold text-danger'>Invalid time period</div>
              }
              <Stack direction="row">
                <Button onClick={handleCalculate} disabled={isInvalidPrinciple || isInvalidRate || isInvalidYear} variant="contained" type='submit' className='bg-dark text-light' style={{ width: '100%' }}>calculate</Button>
                <Button onClick={handleReset} variant="text" className='text-dark ms-4'>reset</Button>

              </Stack>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}





export default App
