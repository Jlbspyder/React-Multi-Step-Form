const ThankYou = () => {
  return (
    <div className="h-[380px] w-[350px] z-10 md:h-[400px] rounded-lg md:w-[450px] md:ml-5 bg-White absolute top-[132px] left-[50px] md:top-[70px] md:left-[600px]">
      <div>
        <img
          src="./images/icon-thank-you.svg"
          alt="icon"
          className="ml-[130px] mt-[70px] md:ml-[120px] md:mt-[70px]"
        />
        <div className="text-3xl mt-[20px] ml-[90px] md:ml-[30px] md:text-5xl font-bold text-MarineBlue md:mt-[30px]">
          Thank you!
        </div>
      </div>
      <div className="text-sm text-center w-[300px] ml-[20px] mt-[10px] md:-ml-[40px] md:tracking-wide md:mt-5 md:w-[380px] text-CoolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default ThankYou;
