const ThankYou = () => {
  return (
    <div className="md:absolute bg-White mt-[115px] ml-9 rounded-lg pt-1 md:mt-32 w-[300px] md:w-[450px] md:h-[100px] md:-top-[60px] md:left-[550px]">
      <div>
        <img
          src="./images/icon-thank-you.svg"
          alt="icon"
          className="ml-[110px] mt-[50px] md:ml-[120px] md:mt-[70px]"
        />
        <div className="text-3xl mt-[20px] ml-[70px] md:ml-[30px] md:text-5xl font-bold text-MarineBlue md:mt-[30px]">
          Thank you!
        </div>
      </div>
      <div className="text-sm text-center w-[250px] ml-[20px] pb-5 mt-[10px] md:-ml-[40px] md:tracking-wide md:mt-5 md:w-[380px] text-CoolGray">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default ThankYou;
