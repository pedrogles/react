import { AppRoutes } from "./routes"
import { LoggedUserProvider } from "./shared/contexts/LoggedUserContext"

function App() {
  return (
    <LoggedUserProvider>
      <AppRoutes />
    </LoggedUserProvider>
  )
}

export default App
