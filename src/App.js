import * as React from "react";

import ApplicationRoutes from "./Routes";
import Header from "./common/components/Header";
import Footer from "./common/footer";
import Overlay from "./common/Overlays";

const App = () => (
  <>
    <Overlay />
    <Header />
    <ApplicationRoutes />
    <Footer />
  </>
);

export default App;
