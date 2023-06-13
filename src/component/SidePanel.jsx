const SidePanel = ({ stepone, steptwo, stepthree, stepfour }) => {
  return (
    <section className="container mx-auto my-3 md:block md:bg-White md:rounded-xl w-[1100px]">
      <img
        src="./images/bg-sidebar-desktop.svg"
        alt="bg"
        className="hidden md:block"
      />
      <div
        id="steps"
        className="md:flex md:flex-col md:pl-2 md:space-y-10 absolute
            -top-[100px] left-36 md:top-10 md:left-40"
      >
        <div id="step1">
          {stepone ? (
            <span className="bg-LightBlue  top-1 -left-5 w-8 h-8 text-lg absolute md:top-1 md:left-8 xl:left-20 rounded-full">
              <p className="text-lg font-bold absolute top-0.5 left-2.5">1</p>
            </span>
          ) : (
            <span className="border-solid border-[1px] border-White top-1 -left-5 w-8 h-8 text-lg absolute md:top-1 md:left-8 xl:left-20 rounded-full">
              <p className="text-White text-lg font-bold absolute top-0.5 left-2.5">
                1
              </p>
            </span>
          )}
          <div className="hidden text-xs text-CoolGray ml-[70px] xl:ml-[120px] md:block">
            STEP 1
          </div>
          <div className="hidden text-sm text-White ml-[70px] xl:ml-[120px] md:block">
            YOUR INFO
          </div>
        </div>
        <div id="step2">
          {steptwo ? (
            <span className="bg-LightBlue w-8 h-8 text-lg absolute  top-1 left-[45px] md:top-20 md:left-8 xl:left-20 rounded-full">
              <p className="text-black text-lg font-bold absolute top-0.5 left-2.5">
                2
              </p>
            </span>
          ) : (
            <span className="w-8 h-8 text-lg absolute  top-1 left-[45px] md:top-20 md:left-8 xl:left-20 border-solid border-[1px] border-White rounded-full">
              <p className="text-lg font-bold text-White absolute top-0.5 left-2.5">
                2
              </p>
            </span>
          )}
          <div className="hidden text-xs text-CoolGray ml-[70px] xl:ml-[120px] md:block">
            STEP 2
          </div>
          <div className="hidden text-sm text-White ml-[70px] xl:ml-[120px] md:block">
            SELECT PLAN
          </div>
        </div>
        <div id="step3">
          {stepthree ? (
            <span className="bg-LightBlue w-8 h-8 text-lg top-1 left-[107px] absolute md:top-[155px] md:left-8 xl:left-20 rounded-full">
              <p className="text-lg font-bold text-black absolute top-0.5 left-2.5">
                3
              </p>
            </span>
          ) : (
            <span className="w-8 h-8 text-lg top-1 left-[107px] absolute md:top-[155px] md:left-8 xl:left-20 border-solid border-[1px] border-White rounded-full">
              <p className="text-lg font-bold text-White absolute top-0.5 left-2.5">
                3
              </p>
            </span>
          )}
          <div className="hidden text-xs text-CoolGray ml-[70px] xl:ml-[120px] md:block">
            STEP 3
          </div>
          <div className="hidden text-sm text-White ml-[70px] xl:ml-[120px] md:block">
            ADD-ONS
          </div>
        </div>
        <div id="step4">
          {stepfour ? (
            <span className="bg-LightBlue w-8 h-8 text-lg top-1 left-[170px] absolute md:top-[230px] md:left-8 xl:left-20 rounded-full">
              <p className="text-lg font-bold text-black absolute top-0.5 left-2.5">
                4
              </p>
            </span>
          ) : (
            <span className="w-8 h-8 text-lg top-1 left-[170px] absolute md:top-[230px] md:left-8 xl:left-20 border-solid border-[1px] border-White rounded-full">
              <p className="text-lg font-bold text-White absolute top-0.5 left-2.5">
                4
              </p>
            </span>
          )}
          <div className="hidden text-xs text-CoolGray ml-[70px] xl:ml-[120px] md:block">
            STEP 4
          </div>
          <div className="hidden text-sm text-White ml-[70px] xl:ml-[120px] md:block">
            SUMMARY
          </div>
        </div>
      </div>
    </section>
  );
};

export default SidePanel;
