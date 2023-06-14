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
    <div className="md:absolute bg-White bg-White mt-[105px] ml-3 h-[390px] rounded-lg pt-1 md:mt-32 w-[330px] md:w-[450px] md:-top-[60px] md:left-[500px]">
      <div className="flex flex-col md:pl-8 pl-1 mt-[135px] ml-5 rounded-lg w-[400px] md:-mt-0">
        <div className="text-3xl -mt-24 md:text-4xl md:m-0 text-MarineBlue font-bold text-left">
          Finishing up
        </div>
        <div className="text-md text-CoolGray mt-3 text-left w-[300px] md:w-[500px]">
          Double-check everything looks OK before confirming.
        </div>
      </div>
      <div className="flex flex-col w-[420px] mt-6">
        <div className="bg-Alabaster w-[73%] h-[180px] ml-3 md:ml-[50px] md:h-[200px] md:w-[410px] md:mt-1 rounded-lg md:rounded-lg border-slate-200 border-[1px]">
          {
            <div className="flex flex-row space-x-20 md:space-x-48">
              <div className="flex flex-col mt-5 pl-5">
                <div className="text-sm text-MarineBlue font-bold w-[150px] md:w-[140px]">
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
          <div className="absolute bg-LightGray md:top-[170px] md:left-[65px] top-[200px] left-[35px] h-[1px] md:w-[370px] w-[280px]"></div>
          <div className="flex flex-col h-[50px] justify-between">
            {customerInfo.addOns.map((item,index) => {
              return (
                <div key={index}>
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
        </div>
        <div className="flex flex-row space-x-32 md:space-x-48">
            <div className="flex flex-col mt-5 ml-3 md:ml-10">
              <div className="text-CoolGray text-sm ml-3  md:w-[150px]">
                Total ({customerInfo.isMonthly ? "per month" : "per year"})
              </div>
            </div>
            <div className="text-sm  mt-5 font-bold text-PurplishBlue">
              ${totalCost}
              {billingType}
            </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
