import {Routes, Route} from "react-router-dom";
import {LandingPage} from "@/Pages/LandingPage.tsx";
import CreateAccountPage from "@/Pages/CreateAccountPage.tsx";
import Dashboard from "@/Pages/Dashboard.tsx";
function App() {
    return (
    <>
      <Routes>
          <Route path={"/"} element={<LandingPage />}/>
          <Route path={"/create"} element={<CreateAccountPage />}/>
          <Route path={"/dashboard"} element={<Dashboard />} />
      </Routes>
    </>
  )
}

export default App
