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
} from "./constants/commonConstants";
import ScrollToTop from "./utils/ScrollToTop";

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
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
