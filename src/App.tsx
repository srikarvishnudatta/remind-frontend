import {Routes, Route} from "react-router-dom";
import {LandingPage} from "@/Pages/LandingPage.tsx";
import CreateAccountPage from "@/Pages/CreateAccountPage.tsx";
import Dashboard from "@/Pages/Dashboard.tsx";
import HomeLayout from "@/layout/HomeLayout.tsx";
import RecentlyAddedPage from "@/Pages/RecentlyAddedPage.tsx";
import TrashPage from "@/Pages/TrashPage.tsx";
import ExpiredPage from "@/Pages/ExpiredPage.tsx";
import FavouritesPage from "@/Pages/FavouritesPage.tsx";
import ExpiringSoonPage from "@/Pages/ExpiringSoonPage.tsx";
function App() {
    return (
    <>
      <Routes>
          <Route path={"/"} element={<LandingPage />}/>
          <Route path={"/create"} element={<CreateAccountPage />}/>
          <Route element={<HomeLayout />}>
              <Route path={"/dashboard"} element={<Dashboard />} />
              <Route path={"/recent"} element={<RecentlyAddedPage/>}/>
              <Route path={"/trash"} element={<TrashPage />}/>
              <Route path={"/expired"} element={<ExpiredPage />}/>
              <Route path={"/favourites"} element={<FavouritesPage />}/>
              <Route path={"/soon"} element={<ExpiringSoonPage />}/>
          </Route>
      </Routes>
    </>
  )
}

export default App
