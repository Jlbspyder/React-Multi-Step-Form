import { useState, createContext } from "react";

const FormContext = createContext();

function FormContextProvider({children}) {  
    const [isConfirmed, setIsConfirmed] = useState(false)
    const [customerInfo, setCustomerInfo] = useState({
      plan: {planName: "Arcade", planPrice: 9},
      addOns: [],
      isMonthly: true
    })
  
    return (
      <FormContext.Provider value={
        {
          customerInfo,
          setCustomerInfo,
          isConfirmed, 
          setIsConfirmed
        }
      }>
        {children}
      </FormContext.Provider>
    )
  }
  
  export {FormContextProvider, FormContext};