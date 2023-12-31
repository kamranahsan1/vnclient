import Layout from "./pages/layouts/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  Home,
  About,
  Contact,
  UaeVisa,
  TravelInsurance,
  SchengenVisa,
  PickUpServices,
  Packages,
  GenerateAi,
  NotFound,
} from "./pages";

import {
  HOME_URL,
  ABOUT_US_URL,
  PACKAGES_TOURS_URL,
  UAE_VISA_URL,
  SCHENGEN_VISA_URL,
  TRAVEL_INSURANCE_URL,
  PICKUP_SERVICES_URL,
  CONTACT_URL,
  AI_TOURS_URL,
  TOURS_URL,
  VISAS_URL,
} from "./constants/commonConstants";
import ScrollToTop from "./utils/ScrollToTop";
import SinglePackage from "./pages/SinglePackage";
import Visas from "./pages/Visas";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route
            path={HOME_URL}
            element={
              <Layout>
                <Home />
              </Layout>
            }
            exact
          />
          <Route
            path={ABOUT_US_URL}
            element={
              <Layout>
                <About />
              </Layout>
            }
            exact
          />
          <Route
            path={PACKAGES_TOURS_URL}
            element={
              <Layout>
                <Packages />
              </Layout>
            }
          />
          <Route
            path={VISAS_URL}
            element={
              <Layout>
                <Visas />
              </Layout>
            }
          />
          <Route
            path={TOURS_URL}
            element={
              <Layout>
                <SinglePackage />
              </Layout>
            }
          />
          <Route
            path={AI_TOURS_URL}
            element={
              <Layout>
                <GenerateAi />
              </Layout>
            }
          />
          <Route
            path={UAE_VISA_URL}
            element={
              <Layout>
                <UaeVisa />
              </Layout>
            }
            exact
          />
          <Route
            path={SCHENGEN_VISA_URL}
            element={
              <Layout>
                <SchengenVisa />
              </Layout>
            }
            exact
          />
          <Route
            path={TRAVEL_INSURANCE_URL}
            element={
              <Layout>
                <TravelInsurance />
              </Layout>
            }
            exact
          />
          <Route
            path={PICKUP_SERVICES_URL}
            element={
              <Layout>
                <PickUpServices />
              </Layout>
            }
            exact
          />
          <Route
            path={CONTACT_URL}
            element={
              <Layout>
                <Contact />
              </Layout>
            }
            exact
          />
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
