import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="FBAR & FATCA Filing"
      >
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="https://dhruvtax.com/images/admin_images/38405f3a6a4c8d6b47d2cb4383ea28a9783c10de-fbar-facts-processing.jpg"
                      alt="FBAR FATCA Filing"
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Comprehensive FBAR & FATCA Filing Services
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      Navigating the complexities of FBAR (Foreign Bank Account
                      Reporting) and FATCA (Foreign Account Tax Compliance Act)
                      can be challenging. Our team provides accurate filing
                      support to keep you compliant with U.S. regulations.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Get professional assistance in preparing and submitting
                      your FBAR and FATCA forms efficiently and accurately.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Accurate & Timely Filing
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      Our FBAR & FATCA filing services ensure that all your
                      foreign financial accounts are reported to the IRS in
                      compliance with regulations, reducing the risk of
                      penalties.
                    </p>
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Accuracy Assurance
                        </span>
                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                          99%
                        </p>
                      </div>
                      <div
                        className="progress-wrap3 progress3"
                        data-progress-percent={99}
                      >
                        <div className="progress-bar3 progress3" />
                      </div>
                    </div>
                    <div className="bussibess-plan">
                      <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                        Timely Compliance
                      </span>
                      <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                        97%
                      </p>
                    </div>
                    <div
                      className="progress-wrap3 progress3"
                      data-progress-percent={97}
                    >
                      <div className="progress-bar3 progress3" />
                    </div>
                    <div className="peragraph-pera">
                      <p className="font-ks font-16 lineh-26 weight-500 color-30 ts">
                        Rest easy knowing your international financial reporting
                        is in experienced hands.
                      </p>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-24 lineh-34 weight-600 color-29 margin-b20">
                      Our FBAR & FATCA Filing Services Include:
                    </h1>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="https://via.placeholder.com/20"
                                    alt="Checkmark"
                                  />
                                </span>
                                Account Identification & Reporting
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="https://via.placeholder.com/20"
                                    alt="Checkmark"
                                  />
                                </span>
                                Form Preparation & Submission
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="https://via.placeholder.com/20"
                                    alt="Checkmark"
                                  />
                                </span>
                                Ongoing Compliance Support
                              </p>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}
