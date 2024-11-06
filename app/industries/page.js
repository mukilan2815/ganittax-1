import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { Building2, PizzaIcon, Store, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <>
      <Layout
        headerStyle={10}
        footerStyle={10}
        breadcrumbTitle="Industries we served"
      >
        <div className="cloginner-3-sevtion-area section-padding5">
          <div className="container">
            {/* Burger King & Services */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://www.foodandwine.com/thmb/el_3hy9yGmYMHsQxSN8Ben-cHlY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Heres-How-to-Get-a-Burger-King-Croissanwich-for-Just-One-Cent-FT-BLOG0124-f3e18b0ce7d44bb2940b93e2e0490076.jpg"
                      alt="Burger King Tax Solutions"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Burger King Corporation
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Multi-State Restaurant Chain
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Offering tax solutions across 150+ franchise locations.
                        Expertise in managing high-volume, multi-state
                        compliance for fast food operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Tax Services Provided
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Daily cash and sales reconciliation • Franchise tax
                      optimization • Payroll tax filing • Inventory audit
                      support • Real-time POS tax tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* KFC & Services */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://cdn.winsightmedia.com/platform/files/public/2024-05/background/KFC%20Shutterstock%201.jpg?VersionId=0Bjc19xtiyGyGy9PL3WRVc_Ayyna0iAn"
                      alt="KFC Tax Solutions"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Kentucky Fried Chicken
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          International Restaurant Brand
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Comprehensive tax services for global compliance,
                        focusing on transfer pricing and risk reduction across
                        KFC’s international locations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Tax Solutions
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • International tax compliance • Corporate returns and
                      consolidation • Transfer pricing analysis • Global asset
                      management • Strategic risk assessments
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Papa John's & Services */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2019-09/shutterstock_282609581.jpg"
                      alt="Papa Johns Tax Solutions"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Papa John's International
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Pizza Delivery Chain
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Specialized tax compliance and chargeback reconciliation
                        for delivery operations, focusing on efficient tax
                        management for a fast-growing franchise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Tax Management
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Delivery-specific tax compliance • Chargeback
                      reconciliation • Franchisee tax returns • Driver payroll
                      management • Digital and mobile sales tracking
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Timesheets & Management */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Headquarters_Google_Logo_%2852639793897%29.jpg/1280px-Google_Headquarters_Google_Logo_%2852639793897%29.jpg"
                      alt="Timesheets Management"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Timesheet Management
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Streamlined Timesheet Tracking
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Efficient tracking and management of employee working
                        hours for accurate payroll processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Timesheet Services
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Track working hours across multiple projects • Ensure
                      compliance with labor regulations • Generate accurate
                      payroll reports
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Paperwork Handling */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://i.ytimg.com/vi/QwwJV5luCsg/sddefault.jpg"
                      alt="Paperwork Handling"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Paperwork Handling
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Hassle-Free Paperwork Management
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Efficient organization and management of all
                        business-related paperwork, ensuring quick access and
                        compliance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Document Services
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Organize and store paperwork efficiently • Streamline
                      document retrieval process • Ensure compliance with filing
                      requirements
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Virtual HR & Payroll */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Zoho_headquarters_in_chennai.jpg/1200px-Zoho_headquarters_in_chennai.jpg"
                      alt="Virtual HR & Payroll"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Virtual HR & Payroll
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Comprehensive HR and Payroll Management
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Full-service virtual HR support and payroll calculation,
                        ensuring compliance and timely processing.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Payroll Services
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Accurate payroll calculations • Benefits management •
                      Ensure timely and accurate tax deductions
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Client Billing & Invoices
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Headquarters_Google_Logo_%2852639793897%29.jpg/1280px-Google_Headquarters_Google_Logo_%2852639793897%29.jpg"
                      alt="Client Billing & Invoices"
                    />
                  </div>
                  <div className="blog-auhtor2-text blog2-author-poition">
                    <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                      <div className="blog-date-list margin-b">
                        <img src="/assets/images/icons/daterange1.png" alt="" />
                        <Link
                          href="#"
                          className="font-16 lineh-16 font-ks weight-600 color"
                        >
                          Client Billing & Invoices
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Streamlined Billing and Invoicing
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Automated billing processes and invoice generation to
                        ensure smooth client interactions and prompt payments.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Billing Solutions
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Accurate billing calculations • Easy invoice generation
                      • Timely reminders and follow-ups
                    </p>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="cta10-section-area section-padding4">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta10-header">
                  <h1 className="font-44 font-lora lineh-52 weight-600 color margin-b">Get expert tax advice and consultation for your financial success.</h1>
                  <p className="font-16 font-ks lineh-26 weight-500 color-21"  style={{ textAlign:"justify" }}>We believe that informed clients make better financial decisions. As part of our service, we offer educational resources and personalized consultations to guide you through the complexities of taxation and financial planning.</p>
                </div>
              </div>
              <div className="col-lg-1" />
                <div className="col-lg-5">
                  <div className="cta10-btnarea">
                    <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions11">Schedule
                      an Apointment <span><img src="/assets/images/icons/arrowgreen.svg" alt="" /></span></Link>
                    <Link href="/contact1" className="font-ks font-16 lineh-16 color-h10 weight-700 solutions12">Contact Us <span><img src="/assets/images/icons/arrowgreen.svg" alt="" /></span></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </Layout>
    </>
  );
}
