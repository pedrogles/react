import "./app.css";
import UserComponent from "./components/UserComponent";
import { withAuthentication } from "./hoc/withAuthentication";
function App() {
  const ComponentWithAuthentication = withAuthentication(UserComponent);
  return (
    <>
      <h1>HOC</h1>
      <ComponentWithAuthentication isAuthenticated name="Pedro" />
    </>
  );
}

export default App;
