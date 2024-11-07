import Link from "next/link";

export default function Header10({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header className="header about-bg d-none d-lg-block">
        <div
          className={`header-area header header-sticky ${
            scroll ? "sticky" : ""
          }`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo">
                    <Link href="/">
                      <img src="/assets/images/logo/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu-ex homepage10 homepage7">
                    <ul>
                      <li>
                        <Link
                          href="/"
                          className="font-ks font-16 weight-500 color"
                        >
                          Home
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/about"
                          className="font-ks font-16 weight-500 color"
                        >
                          About Us
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="/industries-we-serve"
                          className="font-ks font-16 weight-500 color"
                        >
                          Industries We Serve
                        </Link>
                      </li>

                      <li>
                        <Link
                          href="#"
                          className="font-ks font-16 weight-500 color"
                        >
                          What we do{" "}
                          <span>
                            <i className="fa-solid fa-angle-down" />
                          </span>
                        </Link>
                        <ul className="dropdown-padding">
                          <li>
                            <Link
                              href="#"
                              className="font-ks font-16 weight-500 color"
                            >
                              Individual Taxes{" "}
                              <span>
                                <i className="fa-solid fa-angle-right" />
                              </span>
                            </Link>
                            <ul className="dropdown-padding">
                              <li>
                                <Link
                                  href="/tax-planning"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Tax Planning
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/tax-preparation"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Tax Preparation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/itin-assistance"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  ITIN Assistance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/fbar-fatca"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  FBAR & FATCA Filing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/amendment-filing"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Amendment Filing
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-ks font-16 weight-500 color"
                            >
                              Business Taxes{" "}
                              <span>
                                <i className="fa-solid fa-angle-right" />
                              </span>
                            </Link>
                            <ul className="dropdown-padding">
                              <li>
                                <Link
                                  href="/start-business"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Start a New Business
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/audit-assistance"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Audit Assistance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/business-tax-prep"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Business Tax Preparation
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/boir-filing"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Beneficial Owner Information Report (BOIR)
                                  Filing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/other-compliance"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Other Compliance
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <Link
                              href="#"
                              className="font-ks font-16 weight-500 color"
                            >
                              Other Services{" "}
                              <span>
                                <i className="fa-solid fa-angle-right" />
                              </span>
                            </Link>
                            <ul className="dropdown-padding">
                              <li>
                                <Link
                                  href="/bookkeeping"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Bookkeeping
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/payroll"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Payroll
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="/sales-tax"
                                  className="font-ks font-16 weight-500 color"
                                >
                                  Sales Tax/Use Tax
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <Link
                          href="/referrals"
                          className="font-ks font-16 weight-500 color"
                        >
                          Referrals
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/contact1"
                          className="font-ks font-16 weight-500 color"
                        >
                          Contact Us
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-3 d-lg-block d-none">
                    <div className="shecdule-btn1">
                      <Link
                        href="/login"
                        className="font-ks font-16 lineh-16 color weight-700 solutions10"
                      >
                        Login / Signup
                        <span>
                          <img src="/assets/images/icons/arrowben.svg" alt="" />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
