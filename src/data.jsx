const profile = {
   plans: [
        {
            id: "1",
        name: "Arcade",
        image: "/images/icon-arcade.svg",
        monthlyPrice: 9,
        yearlyPrice: 90,
        },

        {
            id: "2",
        name: "Advanced",
        image: "/images/icon-advanced.svg",
        monthlyPrice: 12,
        yearlyPrice: 120,
        },

        {
            id: "3",
        name: "Pro",
        image: "/images/icon-pro.svg",
        monthlyPrice: 15,
        yearlyPrice: 150,
        },  
    ],
    addOns: [
    {   
        id: 1,
        name: "Online service",
        monthlyPrice: 1,
        yearlyPrice: 10,
        description: "Access to multiplayer games",
        },
    {   
        id: 2,
        name: "Larger storage",
        monthlyPrice: 2,
        yearlyPrice: 20,
        description: "Extra 1TB of cloud save",
    },
    {   
        id: 3,
        name: "Customizable profile",
        monthlyPrice: 2,
        yearlyPrice: 20,
        description: "Custom theme on your profile",
    }
    ]
}

 
export default profile;