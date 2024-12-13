import {Routes, Route} from "react-router-dom";
import {LandingPage} from "@/Pages/LandingPage.tsx";
import CreateAccountPage from "@/Pages/CreateAccountPage.tsx";
function App() {
    return (
    <>
      <Routes>
          <Route path={"/"} element={<LandingPage />}/>
          <Route path={"/create"} element={<CreateAccountPage />}/>
      </Routes>
    </>
  )
}

export default App
