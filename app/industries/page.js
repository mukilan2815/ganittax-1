"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import Layout from "@/components/layout/Layout";

const IndustriesSection = () => {
  const [expanded, setExpanded] = useState(null);

  const handleToggle = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const services = [
    {
      title: "Retail and Food Services",
      leftServices: [
        "Cash and Card Sales Reconciliation and Variances Tracker",
        "Online Sales Reconciliation",
        "Suspicious Credit Card Sale Chargebacks Reporting",
        "Day To Day Bookkeeping",
        "Inventory Management",
        "Virtual HR and Payroll Calculation",
        "Benchmarking",
      ],
      rightServices: [
        "Budgets and Financial Analysis",
        "Accounts Payables Reconciliation",
        "Amortization of Assets",
        "Periodical Financial Statements",
        "Sales Tax filings",
        "Royalty and Commission calculations",
        "Federal and State Tax filings",
      ],
      brands: [
        "https://accountingforsure.com/images/lgoo.png",
        "https://accountingforsure.com/images/Burger-King-Logo.png",
        "https://accountingforsure.com/images/kfc.png",
        "https://accountingforsure.com/images/five.jpg",
      ],
    },
    {
      title: "Information Technology Consulting",
      leftServices: [
        "Timesheets Management",
        "Paperwork Handling",
        "Virtual HR and Payroll Calculation",
        "Billing the Client and sending Invoices",
        "Following up with Consultant and the Vendor/Client",
        "Accounts Payables Reporting",
      ],
      rightServices: [
        "Periodical ARs and APs Reconciliation",
        "Employee W2 and 1099 Filings",
        "Day To Day Bookkeeping",
        "Suspicious Transactions Reporting",
        "Periodical Financial Statements",
        "Federal and State Tax filings",
      ],
      brands: [
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
        "https://www.nebulaholdings.io/wp-content/uploads/2023/08/Zoho-Books-logo.png",
        "https://www.svgrepo.com/show/443356/brand-quickbooks.svg",
      ],
    },
    {
      title: "Real Estate Rental and Leasing",
      leftServices: [
        "Project/Property wise Expenses and Revenue Reporting",
        "Raising and creating an invoice to the Client",
        "Accounts Payable Management",
        "Virtual HR and Payroll Calculation",
      ],
      rightServices: [
        "Periodical AR & AP Reconciliation",
        "Suspicious Transactions Reporting",
        "Periodical Bookkeeping",
        "Periodical Financial Statements",
        "Federal and State Tax filings",
      ],
      brands: [],
    },
  ];

  return (
    <Layout
      headerStyle={10}
      footerStyle={10}
      breadcrumbTitle="Industries we Serve"
    >
      <div className="industries-container">
        {services.map((industry, index) => (
          <div key={index} className="industry-section">
            <h2 className="industry-title" onClick={() => handleToggle(index)}>
              {`${index + 1}. ${industry.title}`}
            </h2>

            {expanded === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
                className="services-content"
              >
                <div className="services-grid">
                  <div className="services-column">
                    {industry.leftServices.map((service, idx) => (
                      <div key={idx} className="service-item">
                        <Check size={16} className="check-icon" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                  <div className="services-column">
                    {industry.rightServices.map((service, idx) => (
                      <div key={idx} className="service-item">
                        <Check size={16} className="check-icon" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {industry.brands.length > 0 && (
                  <div className="brands-container">
                    {industry.brands.map((brand, idx) => (
                      <img key={idx} src={brand} className="brand-logo" />
                    ))}
                  </div>
                )}
              </motion.div>
            )}
          </div>
        ))}

        <style jsx>{`
          .industries-container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
          }

          .hero-section {
            text-align: center;
            padding: 60px 20px;
            background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
              url("/api/placeholder/1200/400") center/cover;
            color: white;
            margin-bottom: 40px;
          }

          .hero-title {
            font-size: 2.5rem;
            margin-bottom: 20px;
          }

          .hero-text {
            font-size: 1.1rem;
            max-width: 800px;
            margin: 0 auto;
            line-height: 1.6;
          }

          .industry-section {
            background: #fff;
            border-radius: 8px;
            padding: 20px;
            margin-bottom: 30px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }

          .industry-title {
            font-size: 1.2rem;
            color: #333;
            padding: 10px;
            background: #f5f5f5;
            margin: -20px -20px 20px -20px;
            border-radius: 8px 8px 0 0;
            cursor: pointer;
          }

          .services-content {
            overflow: hidden;
          }

          .services-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 30px;
            margin-bottom: 20px;
          }

          .service-item {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 15px;
            color: #555;
          }

          .check-icon {
            color: #2563eb;
            flex-shrink: 0;
          }

          .brands-container {
            display: flex;
            justify-content: space-around;
            align-items: center;
            flex-wrap: wrap;
            gap: 20px;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #eee;
          }

          .brand-logo {
            height: 60px;
            object-fit: contain;
          }

          @media (max-width: 768px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }

            .hero-title {
              font-size: 2rem;
            }

            .hero-text {
              font-size: 1rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default IndustriesSection;
