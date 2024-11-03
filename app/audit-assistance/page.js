import React from "react";
import Layout from "@/components/layout/Layout";
import Link from "next/link"; // Ensure to import Link from 'next/link'

const Page = () => {
  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Amendment Filing"
    >
      <div>
        <div className="serviceleft-section-area section-padding5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="serviceauthior-area p-0">
                  <img
                    src="/assets/images/sectionimg/servicedeailsimg2.png"
                    alt=""
                  />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Ensure Compliance with Confidence
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    Navigating audits can be complex and time-consuming. Our
                    Audit Assistance service is designed to simplify the
                    process, ensuring full compliance with regulatory standards
                    and minimizing potential risks.
                  </p>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    From pre-audit preparation to post-audit reviews, our team
                    is here to support you at every stage, providing the
                    expertise and insights needed to successfully complete
                    audits and enhance your operational integrity.
                  </p>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                    Strengthen Your Audit Process
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    Explore our comprehensive audit support solutions that
                    address your specific needs, from risk assessment to audit
                    documentation, and ensure that your financial records stand
                    up to scrutiny.
                  </p>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="/assets/images/icons/stragig2.svg"
                            alt=""
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Pre-Audit Preparation
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            We work with your team to gather and organize
                            necessary documentation, conduct internal reviews,
                            and identify areas of improvement before the audit.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="/assets/images/icons/approach2.svg"
                            alt=""
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Post-Audit Support
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            After the audit, we assist in analyzing findings,
                            implementing corrective actions, and preparing for
                            future audits to continually enhance compliance.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Why Choose Our Audit Assistance?
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    With our tailored audit support, you gain expert guidance
                    that reduces risks, enhances transparency, and promotes
                    regulatory compliance, helping your business build a solid
                    foundation for long-term success.
                  </p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Risk Management
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Internal Controls Review
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Documentation Support
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Compliance Verification
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Process Improvement
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Future Audit Prep
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    Let our expertise support your audit journey, enhancing
                    reliability and compliance in your financial reporting.
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
                      Pre-Audit Preparation
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
                      Documentation Support
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
                      Post-Audit Analysis
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
                    Discover our full range of audit support services to enhance
                    your compliance and financial reporting processes.
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
                    +91 705 2101 786
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

export default Page;
