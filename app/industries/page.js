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
                        Managing tax compliance for 150+ franchise locations
                        across 12 states. Specialized in restaurant franchise
                        tax management.
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
                      • Multi-state tax returns and compliance • Franchise tax
                      optimization • Sales tax management • Payroll tax
                      processing • Tax audit support
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 45% faster tax filing, $1.2M tax savings, 100%
                      compliance rate
                    </p>
                  </div>
                </div>
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
                      • Multi-state tax returns and compliance • Franchise tax
                      optimization • Sales tax management • Payroll tax
                      processing • Tax audit support
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 45% faster tax filing, $1.2M tax savings, 100%
                      compliance rate
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
                      src="https://d1905rzuxsrnqw.cloudfront.net/eyJidWNrZXQiOiIzMy1jZG4taW1hZ2UtaGFuZGxlciIsImtleSI6InByb2R1Y3Rpb25cL2tmY2NjYXJlMjMwMVwvYXBwbGljYXRpb25cL2ZpbGVzXC8yNjE2XC85OTU0XC80MzczXC8yYnkxXzEzMjB4NjY3X0tGQ19uZXdfY29uY2VwdF9zdG9yZV9mcm9udC5wbmciLCJlZGl0cyI6eyJyZXNpemUiOnsid2lkdGgiOjEwNTAsImhlaWdodCI6NTI1fX19?_v=1699544373"
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
                        Tax services for 200+ corporate-owned locations.
                        International tax compliance and reporting.
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
                      • International tax planning • Corporate tax returns •
                      Transfer pricing compliance • Multi-state tax management •
                      Tax risk assessment
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: $2.1M annual savings, 60% reduced audit exposure,
                      99.9% accuracy
                    </p>
                  </div>
                </div>
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
                      • International tax planning • Corporate tax returns •
                      Transfer pricing compliance • Multi-state tax management •
                      Tax risk assessment
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: $2.1M annual savings, 60% reduced audit exposure,
                      99.9% accuracy
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
                        Tax management for 350+ franchise locations. Specialized
                        in delivery service tax compliance.
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
                      • Delivery service tax compliance • Franchise tax returns
                      • Sales tax automation • Driver compensation tax •
                      State-specific compliance
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: $1.8M tax savings, 35% faster processing, 98%
                      compliance rate
                    </p>
                  </div>
                </div>
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
                      • Delivery service tax compliance • Franchise tax returns
                      • Sales tax automation • Driver compensation tax •
                      State-specific compliance
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: $1.8M tax savings, 35% faster processing, 98%
                      compliance rate
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google & Services */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Google_Headquarters_Google_Logo_%2852639793897%29.jpg/1280px-Google_Headquarters_Google_Logo_%2852639793897%29.jpg"
                      alt="Google Tax Solutions"
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
                          Google Corporation
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Tech Industry Leader
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Global tax compliance and digital service taxation.
                        Cloud-based tax documentation management.
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
                        Digital Tax Solutions
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Digital service tax compliance • International tax
                      planning • Cloud infrastructure taxation • R&D tax credits
                      • Global tax documentation
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 99.99% documentation accuracy, 50,000+ tax
                      documents processed
                    </p>
                  </div>
                </div>
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Digital Tax Solutions
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Digital service tax compliance • International tax
                      planning • Cloud infrastructure taxation • R&D tax credits
                      • Global tax documentation
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 99.99% documentation accuracy, 50,000+ tax
                      documents processed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* QuickBooks & Services */}
            <div className="row align-items-center margin-b30">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://i.ytimg.com/vi/QwwJV5luCsg/sddefault.jpg"
                      alt="QuickBooks Tax Solutions"
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
                          QuickBooks Enterprise
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Accounting Software Leader
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Tax software integration and automation solutions.
                        Enterprise-level tax management systems.
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
                        Software Tax Integration
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Tax software customization • Automated tax calculations
                      • Report generation systems • Multi-entity tax tracking •
                      Compliance automation
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 65% faster tax preparation, 99.9% calculation
                      accuracy
                    </p>
                  </div>
                </div>
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Software Tax Integration
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Tax software customization • Automated tax calculations
                      • Report generation systems • Multi-entity tax tracking •
                      Compliance automation
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 65% faster tax preparation, 99.9% calculation
                      accuracy
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ZohoBooks & Services */}
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="blog2-author-area">
                  <div className="blog2-images">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Zoho_headquarters_in_chennai.jpg/1200px-Zoho_headquarters_in_chennai.jpg"
                      alt="ZohoBooks Tax Solutions"
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
                          ZohoBooks
                        </Link>
                      </div>
                      <Link href="/blogmiddle">
                        <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">
                          Cloud Accounting Platform
                        </h1>
                      </Link>
                      <p className="font-16 font-ks lineh-26 weight-400 color">
                        Cloud-based tax management solutions. Multi-entity tax
                        tracking and compliance.
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
                        Cloud Tax Solutions
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Cloud tax documentation • Real-time tax tracking •
                      Multi-company tax management • Automated compliance alerts
                      • Tax workflow automation
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 75% reduced tax queries, 40% faster processing
                      time
                    </p>
                  </div>
                </div>
                <div className="blog-auhtor2-text margin-b30">
                  <div className="blog2-ahtuor2 blog2inner">
                    <div className="blog-date-list margin-b">
                      <img src="/assets/images/icons/daterane.png" alt="" />
                      <Link
                        href="#"
                        className="font-16 lineh-16 font-ks weight-500 color-17"
                      >
                        Cloud Tax Solutions
                      </Link>
                    </div>
                    <p className="font-16 font-ks lineh-26 weight-500 color-17 margin-b24">
                      • Cloud tax documentation • Real-time tax tracking •
                      Multi-company tax management • Automated compliance alerts
                      • Tax workflow automation
                    </p>
                    <p className="font-16 font-outfit lineh-26 weight-400 color-17 margin-b24">
                      Results: 75% reduced tax queries, 40% faster processing
                      time
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===== BLOG 1 END=======*/}

        {/*===== BLOG 3 END=======*/}
        {/*===== CTA STARST=======*/}
        <div className="cta5-section-area section-padding4">
          <img
            src="/assets/images/elementor/elementor72.png"
            alt=""
            className="elementors72"
          />
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="cta5-auhtor6-area">
                  <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">
                    Get expert Law advice on criminal strategies
                  </h1>
                  <p className="font-ks font-16 lineh-26 weight-500 color-21">
                    We believe that informed clients make better Law decisions.
                    As part of our service, we'll provide educational resources
                    and workshops to help.
                  </p>
                </div>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-4">
                <div className="cta5-btn5-sexction">
                  <Link
                    href="/contact1"
                    className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16"
                  >
                    Get Law Advice
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                  <Link
                    href="/contact2"
                    className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16"
                  >
                    Contact Us
                    <span>
                      <i className="fa-solid fa-arrow-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <img
            src="/assets/images/elementor/elementor72.png"
            alt=""
            className="elementors73"
          />
        </div>
      </Layout>
    </>
  );
}
