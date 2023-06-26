import './App.css'
import Form from './components/Form/Form.jsx'
import Header from './components/Header/Header.jsx'
import UsersCard from './components/UsersCard/UsersCard'
import { FormProvider } from './contexts/FormContext/FormContext'

export default function App() {
  return (
    <FormProvider>
        <Header/>
        <Form/>
        <UsersCard/>
    </FormProvider>
  )
}


