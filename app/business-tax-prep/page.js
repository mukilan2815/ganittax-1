import React from "react";
import Link from "next/link"; // Ensure to import Link from 'next/link'
import Layout from "@/components/layout/Layout";

const BusinessTaxPrep = () => {
  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Business Tax Preparation"
    >
      <div>
        <div className="serviceleft-section-area section-padding5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="serviceauthior-area p-0">
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Simplify Your Business Tax Preparation
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    Navigating the complexities of business taxes can be
                    daunting. Our Business Tax Preparation service is designed
                    to streamline the process, ensuring accurate filings and
                    maximizing deductions.
                  </p>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    From gathering documentation to filing returns, our
                    experienced team provides comprehensive support tailored to
                    your unique business needs.
                  </p>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                    Our Tax Preparation Process
                  </h1>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="https://cdn-icons-png.flaticon.com/256/35/35920.png"
                            alt="Document Collection"
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Document Collection
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            We assist you in gathering all necessary financial
                            documents and information needed for accurate tax
                            preparation.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/3190/3190526.png"
                            alt="Tax Filing"
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Tax Filing
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            Our team ensures timely and accurate filing of your
                            business tax returns, minimizing your risk of
                            audits.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Why Choose Our Business Tax Preparation?
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    With our personalized tax preparation services, you benefit
                    from expert insights, optimized tax strategies, and a
                    commitment to ensuring compliance, helping your business
                    thrive.
                  </p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Maximize Deductions
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Expert Guidance
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Accurate Filings
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Compliance Assurance
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Time-Saving Solutions
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Future Tax Planning
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    Let us handle your tax preparation, allowing you to focus on
                    what matters most—growing your business.
                  </p>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="serviceour-area">
                  <h1 className="font-lora font-24 lineh-24 weight-600 color-29 margin-b24">
                    Our Services
                  </h1>
                  <div className="singlepalnning-area margin-b20">
                    <Link
                      href="#"
                      className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                    >
                      Document Collection
                    </Link>
                    <span>
                      <i className="fa-solid fa-angle-right ts" />
                    </span>
                  </div>
                  <div className="singlepalnning-area margin-b20">
                    <Link
                      href="#"
                      className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                    >
                      Tax Filing
                    </Link>
                    <span>
                      <i className="fa-solid fa-angle-right ts" />
                    </span>
                  </div>
                  <div className="singlepalnning-area margin-b20">
                    <Link
                      href="#"
                      className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                    >
                      Tax Strategy Consultation
                    </Link>
                    <span>
                      <i className="fa-solid fa-angle-right ts" />
                    </span>
                  </div>
                  <div className="singlepalnning-area margin-b20">
                    <Link
                      href="#"
                      className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                    >
                      Compliance Review
                    </Link>
                    <span>
                      <i className="fa-solid fa-angle-right ts" />
                    </span>
                  </div>
                </div>
                <div className="downloadbrowser">
                  <h1 className="font-24 lineh-24 weight-600 color-29 font-lora margin-b20">
                    Download Brochure
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b24">
                    Explore our range of business tax preparation services and
                    see how we can help you.
                  </p>
                  <div className="doc-btn ts margin-b">
                    <Link
                      href="#"
                      className="docbtn1 font-ks font-16 weight-700 color ts"
                    >
                      <img src="/assets/images/icons/doc2.svg" alt="" />
                      PDF Download
                    </Link>
                  </div>
                </div>
                <div className="needed-section">
                  <h1 className="font-lora font-24 lineh-30 weight-600 color-29 margin-b24">
                    Need Help? Contact Us
                  </h1>
                  <Link
                    href="/tel:6783889199"
                    className="font-16 weight-700 color fon-ks lineh-16"
                  >
                    <img src="/assets/images/icons/phone9.svg" alt="" />
                    6783889199
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default BusinessTaxPrep;
