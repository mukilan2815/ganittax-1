import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Payroll Service"
      >
        <div>
          <div className="servicev1-section-area section-padding5">
            <div className="container">
              <div className="row">
                <div className="col-lg-7 m-auto">
                  <div className="servicev1-textarea margin-b60 text-center">
                    <h1 className="font-48 font-lora weight-600 color-29 lineh-56">
                      Comprehensive Payroll Services to Streamline Your Business
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
                              Payroll Processing
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We handle the entire payroll process, ensuring
                            timely and accurate employee payments.
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
                            alt="Payroll Processing"
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
                              Tax Management
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We ensure compliance with tax regulations, managing
                            all payroll-related taxes for you.
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
                            alt="Tax Management"
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
                              Employee Benefits Administration
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We help manage and administer employee benefits,
                            including health insurance and retirement plans.
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
                            alt="Employee Benefits Administration"
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
                              Time Tracking Solutions
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            Our systems track employee hours and attendance,
                            streamlining the payroll process.
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
                            alt="Time Tracking Solutions"
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
                              Payroll Reporting
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We provide detailed payroll reports for better
                            financial analysis and planning.
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
                            alt="Payroll Reporting"
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
                              Compliance Assistance
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We help ensure your payroll practices are compliant
                            with local and federal regulations.
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
                            alt="Compliance Assistance"
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
                              Customized Payroll Solutions
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            We tailor our payroll services to meet the unique
                            needs of your business.
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
                            alt="Customized Payroll Solutions"
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
                              Consultation Services
                            </h1>
                          </Link>
                          <p className="font-ks font-16 lineh-26 weight-500 color-30">
                            Our experts provide guidance on payroll strategies
                            to enhance efficiency.
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
                            alt="Consultation Services"
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
