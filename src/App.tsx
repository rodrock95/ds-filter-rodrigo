import { useState } from "react"
import DSFilter from "./routes/DSFilter"
import { ContextProductCount } from "./utils/context-product"

function App() {

  const [contextProductCount, setContextProductCount] = useState<number>(0)

  return (
    
    <ContextProductCount.Provider value={{contextProductCount, setContextProductCount}}>
    
    <DSFilter/>

    </ContextProductCount.Provider>

  )
}

export default App
