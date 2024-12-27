import React from "react";
import Context from "@/context/Context";
import PageHead from "@/pages/Head";

import HeaderTop from "@/components/Header/HeaderTop/HeaderTop";
import Header from "@/components/Header/Header";
import PopupMobileMenu from "@/components/Header/PopUpMobileMenu";
import Footer from "@/components/Footers/Footer";
import Copyright from "@/components/Footers/Copyright";
import Breadcrumb from "@/components/Common/Breadcrumb";
import BackToTop from "@/pages/backToTop";
import SingleBlog from "@/components/BlogDetails/BlogDetails";

const BlogDetailsPage = () => {
  return (
    <>
      <PageHead title="Blog Details" />

      <main className="page-wrapper">
        <Context>
          <HeaderTop />
          <Header
            headerTransparent="header-transparent"
            headerSticky="header-sticky"
            btnClass="rainbow-gradient-btn"
          />
          <PopupMobileMenu />
          <Breadcrumb title="Blog Details" text="Blog Details" />

          <SingleBlog />

          <BackToTop />
          <Footer />
          <Copyright />
        </Context>
      </main>
    </>
  );
};

export async function getStaticPaths() {
  const paths = [
    { params: { blogId: '1' } },
    { params: { blogId: '2' } },
    // Add more blog IDs as needed
  ];

  return { paths, fallback: false }; // Use fallback: true if you want to handle additional IDs at runtime
}

export async function getStaticProps({ params }) {
  const { blogId } = params;
  // Fetch blog details based on blogId here (e.g., from an API)
  
  return { props: { blogId } }; // Pass the blogId as a prop to the component
}
export default BlogDetailsPage;
