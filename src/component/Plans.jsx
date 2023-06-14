import { useState, useContext } from "react";
import profile from "../data";
import { FormContext } from "../FormContext";

const Plans = () => {
  const [monthly, setMonthly] = useState(true);
  const [yearly, setYearly] = useState(false);
  const { customerInfo, setCustomerInfo } = useContext(FormContext);
  const { isMonthly } = customerInfo;
  const { plans, addOns } = profile;

  const changePlan = (event) => {
    const currentPlan = plans.filter(
      (plan) => plan.name === event.target.value
    );
    const currentPlanPrice = isMonthly
      ? currentPlan[0].monthlyPrice
      : currentPlan[0].yearlyPrice;
    setCustomerInfo((prev) => ({
      ...prev,
      plan: {
        planName: event.target.value,
        planPrice: currentPlanPrice,
      },
    }));
  };

  const changeBilling = (event) => {
    event.preventDefault();
    const currentPlan = customerInfo.plan.planName;
    const currentPlanInfo = plans.filter(
      (plan) => plan.name === currentPlan
    )[0];
    const changedPrice = !isMonthly
      ? currentPlanInfo.monthlyPrice
      : currentPlanInfo.yearlyPrice;

    const currentAddOns = customerInfo.addOns;

    let newAddons = [];
    if (currentAddOns.length > 0) {
      for (const item of currentAddOns) {
        const theAddOnInfo = addOns.filter(
          (info) => info.name === item.addOnName
        );
        newAddons.push({
          addOnName: item.addOnName,
          addOnPrice: !isMonthly
            ? theAddOnInfo[0].monthlyPrice
            : theAddOnInfo[0].yearlyPrice,
        });
      }
    }

    setCustomerInfo((prev) => ({
      ...prev,
      isMonthly: !prev.isMonthly,
      plan: {
        ...prev.plan,
        planPrice: changedPrice,
      },
      addOns: newAddons,
    }));
      setMonthly((prev) => !prev)
  };

  return (
    <>
      <div className="md:absolute bg-White mt-[115px] ml-10 rounded-lg pt-1 md:mt-32 w-[330px] md:w-[450px] md:h-[100px] md:top-[0] md:left-[520px]">
        <div className="mt-[40px] ml-[30px] md:-mt-16 md:ml-5 md:flex flex-col">
          <div className="text-3xl md:text-4xl text-MarineBlue font-bold text-left">
            Select your plan
          </div>
          <div className="w-[250px] text-md mt-3 md:w-[350px] text-CoolGray text-left">
            You have the option of monthly or yearly biling.
          </div>
        </div>
        <div className="flex flex-col  mt-5 md:mt-0 md:flex md:flex-row md:space-x-3">
          {plans.map((plan) => {
            return (
              <label
                key={plan.name}
                htmlFor={plan.name}
                className={
                  plan.name === customerInfo.plan.planName
                    ? "w-[300px] md:w-[400px] h-[80px] mt-3 ml-5 md:w-42 md:h-44 md:pl-5 md:mt-14 rounded-md border-PurplishBlue-300 border-[1px] border-PurplishBlue cursor-pointer flex md:flex-col bg-Magnolia space-y-12 hover:border-PurplishBlue"
                    : "w-[300px] md:w-[400px] h-[80px] mt-3 ml-5 md:w-42 md:h-44 md:pl-5 md:mt-14 rounded-md border-slate-300 border-[1px] cursor-pointer flex md:flex-col hover:bg-Alabaster space-y-12 hover:border-PurplishBlue"
                }
              >
                <img
                  src={plan.image}
                  alt=""
                  className="w-10 mt-1 ml-5 md:w-10 md:ml-1 md:mt-5"
                />
                <input
                  hidden
                  name="plan"
                  type="radio"
                  id={plan.name}
                  value={plan.name}
                  checked={plan.name === customerInfo.plan.planName}
                  onChange={(e) => changePlan(e)}
                />
                {monthly ? (
                  <div className="flex flex-col">
                    <div className="px-5 font-bold text-MarineBlue md:-ml-[19px] -mt-[30px] md:mt-5">
                      {plan.name}
                    </div>
                    <div className="px-5 text-xs mb-[5px] text-CoolGray md:-ml-[20px]">
                      ${plan.monthlyPrice}/mo
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col">
                    <div className="px-5 font-bold text-MarineBlue md:-ml-[19px] -mt-[35px] md:mt-1">
                      {plan.name}
                    </div>
                    <div className="px-5 text-xs text-CoolGray md:-ml-[20px]">
                      ${plan.yearlyPrice}/yr
                    </div>
                    <div className="px-5 text-xs text-MarineBlue font-semi-bold md:-ml-[20px]">
                      2 months free
                    </div>
                  </div>
                )}
              </label>
            );
          })}
        </div>

        <div className="bg-Alabaster mt-7 w-[100%] h-10 rounded-md"></div>
        {!monthly ? (
          <div
            className="absolute bg-MarineBlue top-[470px] right-[35%] md:right-[40%] md:top-[288px] w-8 h-4
        rounded-full cursor-pointer "
          ></div>
        ) : (
          <div
            className="absolute bg-MarineBlue top-[470px] right-[35%] md:right-[40%] md:top-[288px] w-8 h-4
        rounded-full cursor-pointer "
          ></div>
        )}
        {!monthly ? (
          <div
            className="absolute top-[472px] right-[40.5%] md:right-[40.4%] md:top-[290.5px] w-[10px] h-[10px] bg-White 
        rounded-full cursor-pointer"
            onClick={(e) => changeBilling(e)}
          ></div>
        ) : (
          <div
            className="absolute hidden top-[472px] right-[40.5%] md:right-[40.4%] md:top-[290.5px] w-[10px] h-[10px] bg-White 
        rounded-full cursor-pointer"
            onClick={(e) => changeBilling(e)}
          ></div>
        )}
        {!monthly ? (
          <div
            className="hidden absolute top-[472px] right-[35.5%] md:right-[44.5%] md:top-[290.5px] w-[10px] h-[10px] bg-White 
        rounded-full cursor-pointer"
            onClick={(e) => changeBilling(e)}
          ></div>
        ) : (
          <div
            className="absolute top-[472px] right-[35.5%] md:right-[44.5%] md:top-[290.5px] w-[10px] h-[10px] bg-White 
        rounded-full cursor-pointer"
            onClick={(e) => changeBilling(e)}
          ></div>
        )}
        {!monthly ? (
          <div className="absolute text-sm font-bold tracking-tighter top-[470px] right-[60%] md:right-[65%] md:top-[285px] w-[10px] h-[10px] text-CoolGray">
            Monthly
          </div>
        ) : (
          <div className="absolute text-sm font-bold tracking-tighter top-[470px] right-[60%] md:right-[65%] md:top-[285px] w-[10px] h-[10px] text-MarineBlue">
            Monthly
          </div>
        )}
        {!monthly ? (
          <div className="absolute text-sm font-bold tracking-tighter top-[470px] right-[26%] md:right-[30%] md:top-[285px] w-[10px] h-[10px] text-MarineBlue">
            Yearly
          </div>
        ) : (
          <div className="absolute text-sm font-bold tracking-tighter top-[470px] right-[26%] md:right-[30%] md:top-[285px] w-[10px] h-[10px] text-CoolGray">
            Yearly
          </div>
        )}
      </div>
    </>
  );
};

export default Plans;
