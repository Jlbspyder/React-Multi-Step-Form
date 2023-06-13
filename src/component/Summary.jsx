import { useContext } from "react";
import { FormContext } from "../FormContext";

const Summary = ({ goback }) => {
  const { customerInfo } = useContext(FormContext);

  const billingType = customerInfo.isMonthly ? "/mo" : "/yr";
  let totalCost = customerInfo.plan.planPrice;

  for (const item of customerInfo.addOns) {
    totalCost += item.addOnPrice;
  }

  return (
    <div className="md:absolute ml-3 pl-3 md:top-[60px] md:left-[480px]">
      <div className="bg-White flex flex-col md:pl-8 pl-4 mt-[135px] ml-5 h-[300px] rounded-lg w-[400px] md:-mt-0">
        <div className="text-3xl mt-10 md:text-4xl md:m-0 text-MarineBlue font-bold text-left">
          Finishing up
        </div>
        <div className="text-md text-CoolGray mt-3 text-left w-[300px] md:w-[500px]">
          Double-check everything looks OK before confirming.
        </div>
      </div>
      <div className="flex flex-col w-[420px] -mt-[130px] space-y-5 md:-mt-[190px] ">
        <div className="w-[95%] ml-5 h-[180px] md:ml-[50px] md:h-[200px] bg-Alabaster -mt-[20px] md:mt-1 rounded-b-lg md:rounded-lg relative border-slate-200 border-[1px] cursor-pointer">
          {
            <div className="flex flex-row space-x-48">
              <div className="flex flex-col mt-5 pl-5">
                <div className="text-sm text-MarineBlue font-bold">
                  {customerInfo.plan.planName} (
                  {customerInfo.isMonthly ? "Monthly" : "Yearly"})
                </div>
                <div className="text-CoolGray hover:text-PurplishBlue text-xs">
                  <a href="#" onClick={goback}>
                    Change
                  </a>
                </div>
              </div>
              <div className="text-sm mt-7 font-bold text-MarineBlue">
                ${customerInfo.plan.planPrice}
                {billingType}
              </div>
            </div>
          }
          <div className="absolute bg-LightGray top-[60px] left-[15px] h-[1px] w-[360px]"></div>
          <div className="flex flex-col bg-White h-[50px] justify-between">
            {customerInfo.addOns.map((item) => {
              return (
                <div>
                  <div className="flex flex-row justify-between mt-3 pl-5 pr-5">
                    <div className="text-sm text-CoolGray">
                      {item.addOnName}
                    </div>
                    <div className="text-sm text-MarineBlue">
                      +${item.addOnPrice}
                      {billingType}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex flex-row space-x-52 mt-16">
            <div className="flex flex-col mt-5 md:mt-10">
              <div className="text-CoolGray text-sm ml-3">
                Total ({customerInfo.isMonthly ? "per month" : "per year"})
              </div>
            </div>
            <div className="text-sm  mt-5 md:mt-10 font-bold text-PurplishBlue">
              ${totalCost}
              {billingType}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
