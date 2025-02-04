import { Provider } from "react-redux"
import store from "./store"



export const ProviderStore = ({children}) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}
