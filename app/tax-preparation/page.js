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
                      src="https://www.debt.org/wp-content/uploads/2020/06/shutterstock_1407725720-1.jpg"
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
        </div>
      </Layout>
    </>
  );
}
