import { createBrowserRouter } from "react-router-dom";
import HomePage from "@pages/HomePage";
import LayoutMain from "@layouts/LayoutMain";
import LayoutAuth from "@layouts/LayoutAuth";
import LoginPage from "@pages/LoginPage";
import RegisterPage from "@pages/RegitserPage";
import routes from ".";
import RegisterVaccinationPage from "../page/RegisterVaccinationPage";
import VaccinationGuidePage from "@pages/VaccinationGuide";
import Counter from "@components/test/Counter";

const Router = createBrowserRouter([
  {
    path: routes.home,
    element: <LayoutMain />,
    children:
      [
        { path: "", element: <HomePage /> },
        { path: '/register-for-vaccination', element: <RegisterVaccinationPage /> },
        { path: '/vaccination-guide', element: <VaccinationGuidePage /> },
        { path: '/services', element: <Counter /> }
      ]
  },
  {
    path: routes.auth.login.split('/')[1],
    element: <LayoutAuth />,
    children: [
      { path: routes.auth.login.split('/')[2], element: <LoginPage /> }, // Lấy "login" từ "/auth/login"
      { path: routes.auth.register.split('/')[2], element: <RegisterPage /> }, // Lấy "register" từ "/auth/register"
    ]
  }
],

);
export default Router;