const Form = ({ formData, setFormData, errors }) => {
  return (
    <form className="md:absolute bg-White mt-[115px] ml-5 rounded-lg pt-1 md:mt-32 w-[330px] md:w-[450px] md:h-[100px] md:-top-[60px] md:left-[520px]">
    <div className="flex flex-col">
      <div className="text-3xl mt-8 ml-3 md:-ml-0.5 md:text-4xl md:mt-1 text-MarineBlue font-bold text-left">
        Personal info
      </div>
      <div className="w-[250px] ml-3 md:w-[450px] md:-ml-0.5  text-md text-CoolGray mt-3 text-left">
        Please provide your name, email address, and phone number.
      </div>
    </div>
    <div className="flex flex-col mt-8 pl-3 pb-5">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between">
          <label
            htmlFor="name"
            className="text-sm -mt-2 ml-3 md:ml-1 md:text-left text-MarineBlue"
          >
            Name
          </label>
          <div className="text-xs text-StrawberryRed font-bold mr-[30px] md:mr-[1px]">
            {errors.name}
          </div>
        </div>
        <input
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({
              ...formData,
              name: e.target.value,
            });
          }}
          className={
            errors.name
              ? "bg-White rounded-md w-[90%] md:ml-0 md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-StrawberryRed-300 cursor-pointer border-[1px] border-StrawberryRed outline-none focus:border-PurplishBlue"
              : "bg-White rounded-md w-[90%] md:ml-0 md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-slate-300 cursor-pointer border-[1px] outline-none focus:border-PurplishBlue"
          }
          placeholder="e.g. Stephen King"
        />
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-row justify-between">
          <label
            htmlFor="email"
            className="text-sm  ml-3 md:ml-1 md:text-left text-MarineBlue"
          >
            Email Address
          </label>
          <div className="text-xs text-StrawberryRed font-bold mr-[30px] md:mr-[1px]">
            {errors.email}
          </div>
        </div>
        <input
          type="email"
          value={formData.email}
          autoComplete="email"
          onChange={(e) => {
            setFormData({
              ...formData,
              email: e.target.value,
            });
          }}
          className={
            errors.email
              ? "bg-White rounded-md w-[90%] md:ml-0 md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-StrawberryRed-300 border-[1px] cursor-pointer border-StrawberryRed outline-none focus:border-PurplishBlue"
              : "bg-White rounded-md w-[90%] md:ml-0 md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-slate-300 border-[1px] cursor-pointer border-CoolGray outline-none focus:border-PurplishBlue"
          }
          placeholder="e.g. stephenking@lorem.com"
        />
      </div>
      <div className="flex flex-col mt-5">
        <div className="flex flex-row justify-between">
          <label
            htmlFor="name"
            className="text-sm ml-3 md:ml-1 md:text-left text-MarineBlue"
          >
            Phone Number
          </label>
          <div className="text-xs text-StrawberryRed font-bold mr-[30px] md:mr-[1px]">
            {errors.number}
          </div>
        </div>
        <input
          type="text"
          value={formData.number}
          autoComplete="number"
          onChange={(e) => {
            setFormData({
              ...formData,
              number: e.target.value,
            });
          }}
          className={
            errors.number
              ? "bg-White rounded-md w-[90%] md:ml-0 md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-StrawberryRed-300 border-[1px] cursor-pointer border-StrawberryRed outline-none focus:border-PurplishBlue"
              : "bg-White rounded-md w-[90%] md:ml-0 md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-slate-300 border-[1px] cursor-pointer border-CoolGray outline-none focus:border-PurplishBlue"
          }
          placeholder="e.g. +1 234 567 890"
        />
      </div>
    </div>
    </form> 
  );
};

export default Form;

{/* */}

// <section id="form">
// <div className="container mx-auto bg-black absolute top-[70px] left-[80px] md:w-[500px] md:top-[60px] md:left-[550px]">
//   <form>
//     <h1 className="text-3xl text-MarineBlue font-bold text-left">
//       Personal info
//     </h1>
//     <p className="text-md text-CoolGray text-left mt-3">
//       Please provide your name, email address, and phone number.
//     </p>
//   </form>
//   <div className="flex flex-col mt-10">
//     <div>
//       <div className="flex flex-row justify-between items-end">
//         <label htmlFor="name" className="text-left text-MarineBlue">
//           Name
//         </label>
//         <div className="text-xs text-StrawberryRed font-bold mr-4">
//           {errors.name}
//         </div>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="e.g. Stephen King"
//           autoComplete="name"
//           value={formData.name}
//           onChange={(e) => {
//             setFormData({
//               ...formData,
//               name: e.target.value,
//             });
//           }}
//           className={
//             errors.name
//           ? "bg-White rounded-sm ml-0 w-[350px] md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-StrawberryRed-300 cursor-pointer border-[1px] border-StrawberryRed outline-none focus:border-PurplishBlue"
//           : "bg-White rounded-sm ml-0 w-[350px] md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-slate-300 cursor-pointer border-[1px] border-CoolGray outline-none focus:border-PurplishBlue"
//           }
//         />
//       </div>
//     </div>
//     <div className="mt-5">
//       <div className="flex flex-row justify-between items-end">
//         <label htmlFor="email" className="text-left text-MarineBlue">
//           Email
//         </label>
//         <div className="text-xs text-StrawberryRed font-bold mr-4">
//           {errors.email}
//         </div>
//       </div>
//       <div>
//         <input
//           type="email"
//           placeholder="e.g. stephenking@lorem.com"
//           value={formData.email}
//           autoComplete="email"
//           onChange={(e) => {
//             setFormData({
//               ...formData,
//               email: e.target.value,
//             });
//           }}
//           className={  
//             errors.email
//           ? "bg-White rounded-sm ml-0 w-[350px] md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-StrawberryRed-300 cursor-pointer border-[1px] border-StrawberryRed outline-none focus:border-PurplishBlue"
//           : "bg-White rounded-sm ml-0 w-[350px] md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-slate-300 cursor-pointer border-[1px] border-CoolGray outline-none focus:border-PurplishBlue"
//           }
//         />
//       </div>
//     </div>
//     <div className="mt-5">
//       <div className="flex flex-row justify-between items-end">
//         <label htmlFor="phone" className="text-left text-MarineBlue">
//           Phone Number
//         </label>
//         <div className="text-xs text-StrawberryRed font-bold mr-4">
//           {errors.number}
//         </div>
//       </div>
//       <div>
//         <input
//           type="text"
//           placeholder="e.g. +1 234 567 890"
//           value={formData.number}
//           autoComplete="number"
//           onChange={(e) => {
//             setFormData({
//               ...formData,
//               number: e.target.value,
//             });
//           }}
//           className={  
//             errors.number
//           ? "bg-White rounded-sm ml-0 w-[350px] md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-StrawberryRed-300 cursor-pointer border-[1px] border-StrawberryRed outline-none focus:border-PurplishBlue"
//           : "bg-White rounded-sm ml-0 w-[350px] md:w-[440px] ml-2 mt-1 px-30 p-2 md:rounded-md border-slate-300 cursor-pointer border-[1px] border-CoolGray outline-none focus:border-PurplishBlue"
//           }
//         />
//       </div>
//     </div>
//   </div>
// </div>
// </section>