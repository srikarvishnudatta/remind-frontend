import {Routes, Route} from "react-router-dom";
import {LandingPage} from "@/Pages/LandingPage.tsx";
import {LoginPage} from "@/Pages/LoginPage.tsx";
import {CreateAccount} from "@/Pages/CreateAccount.tsx";
function App() {
    return (
    <>
      <Routes>
          <Route path={"/"} element={<LandingPage />}/>
            <Route path={"/login"} element={<LoginPage/>}/>
          <Route path={"/create"} element={<CreateAccount />}/>
      </Routes>
    </>
  )
}

export default App
