import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Bookkeeping Services"
      >
        <div>
          <div className="servicev1-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="servicev1-textarea margin-b60 text-center">
                    <h1 className="font-48 font-lora weight-600 color-29 lineh-56">
                      We Offer Comprehensive Bookkeeping Services
                    </h1>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Financial Record Keeping
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We provide meticulous financial record keeping to
                            ensure your business runs smoothly.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img1.png"
                            alt="Financial Record Keeping"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Monthly Reconciliation
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            Our experts ensure your accounts are reconciled
                            monthly for accuracy.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img2.png"
                            alt="Monthly Reconciliation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Tax Preparation
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We handle tax preparation to ensure compliance and
                            maximize your deductions.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-nunito font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img3.png"
                            alt="Tax Preparation"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Budgeting Services
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We assist in creating a budget that suits your
                            financial goals.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img4.png"
                            alt="Budgeting Services"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Payroll Management
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            Our team manages your payroll efficiently, ensuring
                            timely payments.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img5.png"
                            alt="Payroll Management"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Cash Flow Management
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We analyze your cash flow to help maintain liquidity
                            in your business.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img6.png"
                            alt="Cash Flow Management"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Financial Reporting
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We provide detailed financial reports that give
                            insights into your business performance.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img7.png"
                            alt="Financial Reporting"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6">
                  <div className="service3-boxarea margin-b30 bgservice2">
                    <div className="row">
                      <div className="col-lg-6 ">
                        <div className="service3-text2">
                          <Link href="/servicemiddle">
                            <h1 className="font-lora font-22 lineh-24 color-29 weight-600 margin-b">
                              Business Consultation
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            Our business consultation services can help
                            streamline your financial processes.
                          </p>
                          <Link
                            href="/servicemiddle"
                            className="font-ks font-16 lineh-16 color-29 weight-700 margin-t d-inline-block laearnmore2"
                          >
                            Learn More{" "}
                            <span>
                              <i className="fa-solid fa-arrow-right" />
                            </span>
                          </Link>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="service3-imag1">
                          <img
                            src="/assets/images/sectionimg/servicev1img8.png"
                            alt="Business Consultation"
                          />
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
