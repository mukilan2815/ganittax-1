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
                      src="https://via.placeholder.com/800x400"
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
          <div className="faq-section-area section-padding8">
            <img
              src="https://via.placeholder.com/1200x400"
              alt="FBAR FATCA FAQ"
              className="elementor24"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="faq-textarea margin-b60 text-center">
                    <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">
                      Frequently Asked Questions about FBAR & FATCA
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="https://via.placeholder.com/400"
                        alt="Compliance Requirements"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Compliance Requirements
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Understand the reporting thresholds and criteria for
                        compliance.
                      </p>
                      <Link
                        href="/casemiddle"
                        className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more"
                      >
                        LEARN MORE{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right-long" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="https://via.placeholder.com/400"
                        alt="Penalty Avoidance"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Penalty Avoidance
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Avoid costly penalties by meeting filing deadlines and
                        accuracy standards.
                      </p>
                      <Link
                        href="/casemiddle"
                        className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more"
                      >
                        LEARN MORE{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right-long" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="https://via.placeholder.com/400"
                        alt="Expert Assistance"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Expert Assistance
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Receive guidance from specialists in international tax
                        compliance.
                      </p>
                      <Link
                        href="/casemiddle"
                        className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more"
                      >
                        LEARN MORE{" "}
                        <span>
                          <i className="fa-solid fa-arrow-right-long" />
                        </span>
                      </Link>
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
