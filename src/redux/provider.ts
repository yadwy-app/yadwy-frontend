import store from "./store"
import React from "react"
import { Provider } from "react-redux"

interface ProviderProps {
  children : React.ReactNode
}

export const ProviderStore = ({children} : ProviderProps) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}
