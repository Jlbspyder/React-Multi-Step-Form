import { useContext } from "react";
import { FormContext } from "../FormContext";
import profile from "../data";

const AddOns = () => {
  const { customerInfo, setCustomerInfo } = useContext(FormContext);
  const { isMonthly } = customerInfo;
  const { addOns } = profile;

  const handleChange = (e) => {
    const isAlreadyChecked = customerInfo.addOns.some(
      (item) => item.addOnName === e.target.value
    );

    if (isAlreadyChecked) {
      const newArr = customerInfo.addOns.filter(
        (item) => item.addOnName !== e.target.value
      );
      setCustomerInfo((prev) => ({ ...prev, addOns: newArr }));
    } else {
      const addOnInfo = addOns.filter(
        (item) => item.name === e.target.value
      )[0];
      const setPrice = isMonthly
        ? addOnInfo.monthlyPrice
        : addOnInfo.yearlyPrice;
      setCustomerInfo((prev) => ({
        ...prev,
        addOns: [
          ...prev.addOns,
          {
            addOnName: e.target.value,
            addOnPrice: setPrice,
          },
        ],
      }));
    }
  };

  return (
    <div className="md:absolute bg-White mt-[115px] ml-8 rounded-lg pt-1 md:mt-32 w-[350px] md:w-[450px] md:h-[100px] md:-top-[60px] md:left-[520px]">
      <div className="pb-5 flex flex-col mt-[30px] md:mt-0">
        <div className="text-3xl md:text-4xl ml-3 md:ml-3 text-MarineBlue font-bold text-left">
          Pick add-ons
        </div>
        <div className="text-md text-CoolGray ml-3 mt-3 md:ml-3 text-left">
          Add-ons help you enhance your gaming experience.
        </div>
        <div className="flex flex-col space-y-5 mt-8 md:mt-12">
          {addOns.map((addOn) => (
            <label
              key={addOn.name}
              htmlFor={addOn.name}
              className="w-[90%] ml-3 md:w-[100%] h-[80px] bg-White rounded-md border-slate-300 border-[1px] cursor-pointer hover:border-PurplishBlue hover:bg-Alabaster addon"
            >
              <div className="flex flex-row justify-between">
                <input
                  type="checkbox"
                  className="bg-White ml-5 mt-[20px] border-slate-300 
                  border-[1px]"
                  id={addOn.name}
                  value={addOn.name}
                  checked={customerInfo.addOns?.some(
                    (item) => item.addOnName === addOn.name
                  )}
                  onChange={(e) => handleChange(e)}
                />
                <div className="flex flex-row">
                  <div className="flex flex-col mt-5 ml-[20px] md:mr-[70px]  ">
                    <div className="text-sm text-MarineBlue font-bold md:mr-[30px]">
                      {addOn.name}
                      <p className="text-CoolGray text-xs md:text-sm font-normal w-[200px]">
                        {addOn.description}
                      </p>
                    </div>
                  </div>
                  {isMonthly ? (
                    <div className="text-xs md:text-sm mt-7 ml-[5px] mr-14 md:mr-5 text-PurplishBlue">
                      +${addOn.monthlyPrice}/mo
                    </div>
                  ) : (
                    <div className="text-xs md:text-sm mt-7 ml-[5px] mr-14 md:mr-5 text-PurplishBlue">
                      +${addOn.yearlyPrice}/yr
                    </div>
                  )}
                </div>
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddOns;
