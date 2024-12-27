import React from "react";
import PageHead from "../Head";
import Context from "@/context/Context";
import HeaderDashboard from "@/components/Header/HeaderDashboard";
import TermsPolicy from "@/components/TermsPolicy/TermsPolicy";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import LeftDashboardSidebar from "@/components/Header/LeftDashboardSidebar";
import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";

const TermsPolicyPage = () => {
  return (
    <>
      <PageHead title="Terms and Policy" />

      {/* <main className="page-wrapper rbt-dashboard-page">
        <Context>
          <div className="rbt-panel-wrapper">
            <HeaderDashboard display="d-none" />
            <PopupMobileMenu />
            <LeftDashboardSidebar />

            <TermsPolicy />
          </div>
        </Context>
      </main> */}
      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />

          <TermsPolicy />
          {/* <Footer />
          <Copyright /> */}
        </Context>
      </main>
    </>
  );
};

export default TermsPolicyPage;
