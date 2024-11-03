import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Tax Preparation"
      >
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="/assets/images/sectionimg/taxpreparationimg1.png"
                      alt="Tax Preparation"
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Efficient Tax Preparation Services
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      Our tax preparation services simplify the filing process,
                      reduce errors, and ensure timely submissions. We handle
                      all aspects of tax preparation, helping you stay organized
                      and compliant.
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Contact us to streamline your tax filing process and save
                      valuable time.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Accuracy & Compliance
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      Accuracy is at the core of our tax preparation services.
                      We prioritize compliance with tax regulations, reducing
                      the risk of audits and penalties for individuals and
                      businesses alike.
                    </p>
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Accuracy in Filing
                        </span>
                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                          95%
                        </p>
                      </div>
                      <div
                        className="progress-wrap3 progress3"
                        data-progress-percent={95}
                      >
                        <div className="progress-bar3 progress3" />
                      </div>
                    </div>
                    <div className="bussibess-plan">
                      <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                        Compliance Monitoring
                      </span>
                      <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                        93%
                      </p>
                    </div>
                    <div
                      className="progress-wrap3 progress3"
                      data-progress-percent={93}
                    >
                      <div className="progress-bar3 progress3" />
                    </div>
                    <div className="peragraph-pera">
                      <p className="font-ks font-16 lineh-26 weight-500 color-30 ts">
                        Our team stays updated on regulatory changes to keep
                        your filings accurate and compliant, minimizing stress
                        and maximizing peace of mind.
                      </p>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-24 lineh-34 weight-600 color-29 margin-b20">
                      Our Tax Preparation Services Include:
                    </h1>
                    <div className="row">
                      <div className="col-lg-4">
                        <div className="checkservice-area">
                          <ul>
                            <li>
                              <p className="font-ks font-16 lineh-16 weight-600 color-29">
                                <span>
                                  <img
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Individual Tax Filing
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
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Business Tax Filing
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
                                    src="/assets/images/icons/check1.png"
                                    alt="Checkmark"
                                  />
                                </span>
                                Audit Support
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
              src="/assets/images/elementor/taxpreparationfaq.png"
              alt="Tax Preparation FAQ"
              className="elementor24"
            />
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="faq-textarea margin-b60 text-center">
                    <h1 className="font-lora font-48 lineh-52 color-29 weight-600 margin-b">
                      Common Questions About Tax Preparation
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4">
                  <div className="single-portfolio singlecase">
                    <div className="portfolio-images singleportfolio">
                      <img
                        src="/assets/images/sectionimg/taxprep1.png"
                        alt="Accuracy Guaranteed"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Accuracy Guaranteed
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Our experts ensure accuracy and compliance with every
                        filing.
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
                        src="/assets/images/sectionimg/taxprep2.png"
                        alt="Timely Submission"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Timely Submission
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        We handle all deadlines to ensure your filings are on
                        time.
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
                        src="/assets/images/sectionimg/taxprep3.png"
                        alt="Audit Support"
                      />
                    </div>
                    <div className="portfolio-textarea">
                      <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14">
                        <Link href="/casemiddle" className="color-17">
                          Audit Support
                        </Link>
                      </h1>
                      <p className="font-outfit weight-400 color-17 lineh-26 font-16">
                        Get professional support in case of an audit or inquiry.
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
