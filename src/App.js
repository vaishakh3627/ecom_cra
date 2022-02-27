import * as React from "react";

import { useAuth } from "./AuthContext";
import Overlay from "./common/Overlays";
import ApplicationRoutes from "./Routes";
import Header from "./common/components/Header";
import Footer from "./common/footer";

import AdminPages from "./admin";

const App = () => {
  const auth = useAuth();

  return (
    <>
      <Overlay />
      {auth.user.type === "admin" ? (
        <>
          <AdminPages />
        </>
      ) : (
        <>
          <Header />
          <ApplicationRoutes />
          <Footer />
        </>
      )}
    </>
  );
};

export default App;
