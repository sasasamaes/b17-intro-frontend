import React, { useState } from 'react'
import BadgeComponent from './components/BadgeComponent'
import FormComponent from './components/FormComponent'
import NavbarComponent from './components/NavbarComponent'

const App = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    jobTitle: '',
    username: '',
    rol: ''
  })

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div>
      <NavbarComponent/>
      <FormComponent handleChange={handleChange}/>
      <BadgeComponent form={form}/>
    </div>
  )
}

export default App