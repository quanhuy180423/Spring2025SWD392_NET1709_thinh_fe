import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LayoutMain from "@layouts/LayoutMain";
import LayoutAuth from "@layouts/LayoutAuth";
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegitserPage/index.jsx";
import routes from "./index.js";
import RegisterVaccinationPage from "../page/RegisterVaccinationPage/index.jsx";
import VaccinationGuidePage from "@pages/VaccinationGuide";
import Counter from "@components/test/Counter";
import AboutUsPage from "@pages/AboustUsPage/index.jsx";
import LayoutAdmin from "@layouts/LayoutAdmin.jsx";
import DashBoardPage from "@pages/adminPage/DashboardPage/index.jsx";
import RegisterProfileChildPage from "@pages/RegisterProfileChildPage/index.jsx";

const Router = createBrowserRouter([
  {
    path: routes.home,
    element: <LayoutMain />,
    children:
      [
        { path: routes.home, element: <HomePage /> },
        { path: routes.registerVaccination, element: <RegisterVaccinationPage /> },
        { path: routes.vaccinationGuide, element: <VaccinationGuidePage /> },
        { path: routes.service, element: <Counter /> },
        { path: routes.aboutUs, element: <AboutUsPage /> },
        { path: routes.RegisterProfileChild, element: <RegisterProfileChildPage /> },
      ]
  },
  {
    path: routes.auth.login.split('/')[1],
    element: <LayoutAuth />,
    children: [
      { path: routes.auth.login.split('/')[2], element: <LoginPage /> }, // Lấy "login" từ "/auth/login"
      { path: routes.auth.register.split('/')[2], element: <RegisterPage /> }, // Lấy "register" từ "/auth/register"
    ]
  }, {
    path: routes.admin.dashboard,
    element: <LayoutAdmin />,
    children: [
      { path: routes.admin.dashboard, element: <DashBoardPage /> }
    ]
  }
],
  { basename: import.meta.env.BASE_URL }
);
export default Router;