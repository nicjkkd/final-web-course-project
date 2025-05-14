import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "../components/Header/Header";
import { ToastContainer, Bounce } from "react-toastify";
import ErrorBoundary from "../components/ErrorBoundary/ErrorBoundary";

export const Route = createRootRoute({
  component: () => (
    <ErrorBoundary>
      <Header />
      <hr />
      <Outlet />
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme={"dark"}
        transition={Bounce}
      />
      <TanStackRouterDevtools />
    </ErrorBoundary>
  ),
});
