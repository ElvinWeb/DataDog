import React from "react";
import { CustomersList } from "../../Data/CustomersData";

const HeroCustomers = () => {
  return (
    <div className="container main-customers">
      <div className="row justify-content-center">
        <div className="col-12 mb-3">
          <h6 className="text-center text-uppercase text-gray fw-bold title">
            Thousands of customers love & trust Datadog
          </h6>
        </div>
        <div className="col-12 col-sm-10">
          <div className="company-logos d-flex justify-content-center">
            {CustomersList.map((customer) => (
              <a href="./#" className="logo" key={customer.id}>
                <img src={customer.src} alt="" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroCustomers;
