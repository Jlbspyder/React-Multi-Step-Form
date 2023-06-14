import FormControl from './component/FormControl'
import { FormContextProvider } from './FormContext'

function App() {
    return (
  <FormContextProvider>    
    <div className='container'>
      <FormControl />
    </div>
  </FormContextProvider>
  )
}

export default App
