import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };

  return (
    <>
      <div className="mobile-header mobile-header-4 d-block d-lg-none homepagesmall">
        <div className="container-fluid">
          <div className="col-12">
            <div className="mobile-header-elements">
              <div className="mobile-logo">
                <Link href="/">
                  <img src="/assets/images/logo/logo.png" alt="Company Logo" />
                </Link>
              </div>
              <div
                className="mobile-nav-icon dots-menu"
                onClick={handleMobileMenu}
              >
                <i className="fa-solid fa-bars" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}
      >
        <div className="logoicons-area">
          <div className="logos">
            <img src="/assets/images/logo/logo.png" alt="Company Logo" />
          </div>
          <div className="menu-close" onClick={handleMobileMenu}>
            <i className="fa-solid fa-xmark" />
          </div>
        </div>
        <div className="mobile-nav">
          <ul className="mobile-nav-list">
            <li>
              <Link href="/" className="font-ks font-16 weight-500 color">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="font-ks font-16 weight-500 color">
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="/industries"
                className="font-ks font-16 weight-500 color"
              >
                Industries We Serve
              </Link>
            </li>
            <li className="has-sub hash-has-sub">
              <span
                className={
                  isActive.key === 1
                    ? "submenu-button submenu-opened"
                    : "submenu-button"
                }
                onClick={() => handleToggle(1)}
              >
                <em />
              </span>
              <Link href="#" className="font-ks font-16 weight-500 color">
                Services
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isActive.key === 1 ? "block" : "none"}` }}
              >
                <li>
                  <Link href="#" className="font-ks font-16 weight-500 color">
                    Individual Taxes
                  </Link>
                  <ul>
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
                  <Link href="#" className="font-ks font-16 weight-500 color">
                    Business Taxes
                  </Link>
                  <ul>
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
                        BOIR Filing
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
              </ul>
            </li>
            <li className="has-sub hash-has-sub">
              <span
                className={
                  isActive.key === 2
                    ? "submenu-button submenu-opened"
                    : "submenu-button"
                }
                onClick={() => handleToggle(2)}
              >
                <em />
              </span>
              <Link href="#" className="font-ks font-16 weight-500 color">
                Other Services
              </Link>
              <ul
                className="sub-menu"
                style={{ display: `${isActive.key === 2 ? "block" : "none"}` }}
              >
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
          <div className="allmobilesection">
            <Link
              href="/login"
              className="font-ks font-18 lineh-18 weight-700 color mobilemenubtn"
            >
              Login / Signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
