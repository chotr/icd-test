import Layout from "../layout/layout";
import ConfirmPage from "../pages/confirm";
import ContactPage from "../pages/contact";
import HomePage from "../pages/home";
import SuccesPage from "../pages/success";
import ProtectedRoute from "./ProtectedRoute";

const MainRoutes = {
  path: "/",
  element: <Layout />,
  children: [
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/form-contact",
      element: <ContactPage />,
    },
    {
      path: "/form-confirm",
      element: (
        <ProtectedRoute>
          <ConfirmPage />
        </ProtectedRoute>
      ),
      
    },
    {
      path: "/success",
      element: <SuccesPage />,
    },
  ],
};

export default MainRoutes;
