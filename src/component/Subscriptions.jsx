import React, { useContext } from "react";
import TotalPrice from "./TotalPrice";
import PriceContext from "./PriceContext";

function Subscriptions() {
  const { selectedPrice, handlePriceChange } = useContext(PriceContext);

  const showComponent = false;
  const subscriptionPlans = [
    {
      value: "plan1",
      label: "12 Month Subscription",
      totalPrice: "₹99",
      perMonthPrice: "₹8",
      disabled: true
    },
    {
      value: "₹179",
      label: "12 Month Subscription",
      totalPrice: "₹179",
      perMonthPrice: "₹15",
      disabled: false
    },
    {
      value: "₹149",
      label: "6 Month Subscription",
      totalPrice: "₹149",
      perMonthPrice: "₹25",
      disabled: false
    },
    {
      value: "₹99",
      label: "3 Month Subscription",
      totalPrice: "₹99",
      perMonthPrice: "₹33",
      disabled: false
    }
  ];

  const handlePlanChange = (event) => {
    handlePriceChange(event.target.value);
  };

  return (
    <div className="plan-container">
      {subscriptionPlans.map((plan, index) => (
        <div
          key={plan.value}
          className={`subscription-plan ${
            plan.value === selectedPrice ? "selected" : ""
          } ${plan.disabled ? "disabled" : ""}`}
        >
          {index === 0 && (
            <span className="expired-label common-label ">Offer expired</span>
          )}
          {index === 1 && (
            <span className="recommended-label common-label ">Recommended</span>
          )}
          <label className="plan-details-left">
            <input
              type="radio"
              name="subscriptionPlan"
              value={plan.value}
              checked={plan.value === selectedPrice}
              onChange={handlePlanChange}
              disabled={plan.disabled}
            />
            <div className="plan-label">{plan.label}</div>
          </label>

          <div className="plan-details-right">
            <span className="total">
              <span>Total</span> {plan.totalPrice}
            </span>
            <span className="per-month">
              {plan.perMonthPrice} <span>/mo</span>
            </span>
          </div>
        </div>
      ))}
      {showComponent && selectedPrice && (
        <div className="total-container">
          <TotalPrice
            totalPrice={
              subscriptionPlans.find((plan) => plan.value === selectedPrice)
                ?.totalPrice
            }
          />
        </div>
      )}
    </div>
  );
}

export default Subscriptions;
