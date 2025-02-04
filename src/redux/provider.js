"use client"
import { Provider } from "react-redux"
import store from "./store"



export const ProviderStore = ({children}: ReactNode) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}
