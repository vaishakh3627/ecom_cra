import * as React from "react";

import ApplicationRoutes from "./Routes";
import Header from "./common/components/Header";
import Footer from "./common/footer";

const App = () => (
  <>
    <Header />
    <ApplicationRoutes />
    <Footer />
  </>
);

export default App;
