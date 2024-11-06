import React from "react";
import Link from "next/link"; // Ensure to import Link from 'next/link'
import Layout from "@/components/layout/Layout";

const BOIRFiling = () => {
  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Beneficial Owner Information Report"
    >
      <div>
        <div className="serviceleft-section-area section-padding5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="serviceauthior-area p-0">
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Streamline Your Beneficial Owner Information Report Filing
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    Ensuring compliance with beneficial ownership reporting
                    requirements is crucial for businesses. Our BOIR Filing
                    service simplifies the process, guaranteeing accurate and
                    timely submissions.
                  </p>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    Our expert team assists you in gathering necessary
                    information, preparing the report, and filing it to meet
                    regulatory deadlines effectively.
                  </p>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                    Our BOIR Filing Process
                  </h1>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/9506/9506329.png"
                            alt="Information Gathering"
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Information Gathering
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            We work with you to collect all necessary beneficial
                            owner information and documentation for the report.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/1469/1469988.png"
                            alt="Report Preparation"
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Report Preparation
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            Our team prepares the BOIR with meticulous attention
                            to detail to ensure compliance with regulatory
                            requirements.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Why Choose Our BOIR Filing Service?
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    With our dedicated BOIR Filing service, you gain access to
                    expertise, ensuring your business remains compliant while
                    saving time and reducing stress.
                  </p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Timely Filing
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Regulatory Compliance
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Expert Assistance
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Customized Solutions
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Stress-Free Process
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Future Compliance Planning
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    Let us manage your BOIR filing, allowing you to concentrate
                    on running your business.
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
                      Information Gathering
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
                      Report Preparation
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
                  <div className="singlepalnning-area margin-b20">
                    <Link
                      href="#"
                      className="font-18 font-ks lineh-18 weight-600 color-29 ts"
                    >
                      Expert Consultation
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
                    Discover our range of services related to BOIR filing and
                    how we can assist you.
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
                    href="/tel:+917052101786"
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

export default BOIRFiling;
