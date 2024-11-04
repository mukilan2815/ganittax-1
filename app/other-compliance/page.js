import React from "react";
import Link from "next/link"; // Ensure to import Link from 'next/link'
import Layout from "@/components/layout/Layout";

const OtherCompliance = () => {
  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Other Compliance Services"
    >
      <div>
        <div className="serviceleft-section-area section-padding5">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="serviceauthior-area p-0">
                  <img
                    src="/assets/images/sectionimg/othercompliance.png"
                    alt="Other Compliance Services"
                  />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Comprehensive Other Compliance Services
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    Staying compliant with regulatory requirements is essential
                    for any business. Our Other Compliance Services are designed
                    to ensure you meet all necessary standards, minimizing risks
                    and ensuring smooth operations.
                  </p>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    From environmental regulations to industry-specific
                    guidelines, our experienced team provides the expertise
                    needed to navigate the complex landscape of compliance.
                  </p>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                    Our Compliance Process
                  </h1>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/11421/11421910.png"
                            alt="Regulatory Research"
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Regulatory Research
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            We conduct thorough research to identify the
                            compliance requirements specific to your industry.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="approach-area margin-t32">
                        <div className="approach-img">
                          <img
                            src="https://cdn-icons-png.flaticon.com/512/5572/5572129.png"
                            alt="Compliance Audit"
                            className="approahimages ts"
                          />
                        </div>
                        <div className="approach-text">
                          <Link
                            href="/servicemiddle"
                            className="font-lora font-20 weight-600 color-29 margin-b ts d-inline-block"
                          >
                            Compliance Audit
                          </Link>
                          <p className="fontks font-16 lineh-26 weight-500 color-30 ts">
                            Our team performs detailed audits to ensure your
                            business adheres to all applicable regulations.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="border30" />
                  <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                    Why Choose Our Compliance Services?
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                    By choosing our compliance services, you gain peace of mind
                    knowing your business is in full compliance, backed by our
                    expert knowledge and experience.
                  </p>
                  <div className="row">
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Tailored Solutions
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Risk Mitigation
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Ongoing Support
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Compliance Training
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Expert Consultation
                        </p>
                      </div>
                      <div className="checkservice-area">
                        <p className="font-ks font-16 lineh-16 weight-600 color-29">
                          <span>
                            <img src="/assets/images/icons/check1.png" alt="" />
                          </span>
                          Regular Updates
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="font-ks font-16 lineh-26 weight-500 color-30">
                    Let us help you navigate compliance challenges so you can
                    focus on your core business operations.
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
                      Regulatory Research
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
                      Compliance Audit
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
                      Policy Development
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
                      Compliance Training
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
                    Explore our other compliance services and see how we can
                    support your business.
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

export default OtherCompliance;
