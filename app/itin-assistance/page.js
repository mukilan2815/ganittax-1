import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="ITIN Assistance"
      >
        <div>
          <div className="serviceleft-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-1" />
                <div className="col-lg-10">
                  <div className="serviceauthior-area p-0">
                    <img
                      src="https://ebizfiling.com/wp-content/uploads/2023/07/ITIN-application-for-NRIs.png"
                      alt="ITIN Assistance"
                    />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20 margin-t28">
                      Professional ITIN Assistance Services
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b20">
                      We offer comprehensive support for obtaining an Individual
                      Taxpayer Identification Number (ITIN) to meet IRS
                      requirements for individuals without a Social Security
                      Number (SSN).
                    </p>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30">
                      Reach out to us to simplify your ITIN application and
                      filing process.
                    </p>
                    <div className="border30" />
                    <h1 className="font-lora font-40 lineh-50 weight-600 color-29 margin-b20">
                      Streamlined Application Process
                    </h1>
                    <p className="font-ks font-16 lineh-26 weight-500 color-30 margin-b">
                      Our team ensures that your ITIN application process is
                      smooth, accurate, and fully compliant with IRS guidelines,
                      reducing any potential delays or complications.
                    </p>
                    <div className="progress7 margin-b12">
                      <div className="bussibess-plan">
                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                          Application Accuracy
                        </span>
                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                          98%
                        </p>
                      </div>
                      <div
                        className="progress-wrap3 progress3"
                        data-progress-percent={98}
                      >
                        <div className="progress-bar3 progress3" />
                      </div>
                    </div>
                    <div className="bussibess-plan">
                      <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">
                        Compliance Support
                      </span>
                      <p className="font-16 font-outfit lineh-16 color-17 weight-500">
                        96%
                      </p>
                    </div>
                    <div
                      className="progress-wrap3 progress3"
                      data-progress-percent={96}
                    >
                      <div className="progress-bar3 progress3" />
                    </div>
                    <div className="peragraph-pera">
                      <p className="font-ks font-16 lineh-26 weight-500 color-30 ts">
                        Stay assured with our expert guidance to navigate
                        through each step of the ITIN application and compliance
                        process.
                      </p>
                    </div>
                    <div className="border30" />
                    <h1 className="font-lora font-24 lineh-34 weight-600 color-29 margin-b20">
                      Our ITIN Assistance Includes:
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
                                ITIN Application Preparation
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
                                Document Verification
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
                                Follow-up Support
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
