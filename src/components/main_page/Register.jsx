import React from 'react';

const Register = () => {
    
    return (
        <div className="font-coco text-center p-4">
            {/* Apply a red gradient background with no borders */}
            <div className="bg-gradient-to-b from-headerStart via-headerTeal to-headerEnd relative text-center p-10 grid grid-cols-3 gap-4 items-center">
                
                <div className="hidden md:flex col-span-1 flex justify-end">
                    {/*<img src={BubblesImage} alt="Bubbles" className="max-w-full h-auto" />*/}
                </div>

                <div className="col-span-3 md:col-span-1">
                    {/* Updated to a lighter text color for better contrast */}
                    <h2 className="text-4xl md:text-6xl text-textColor font-bold mb-4 text-center">
                        BEGIN YOUR VOYAGE!
                    </h2>
                    
                    <p className="text-xl md:text-3xl font-bubblegum text-[#FFD1D1] mb-2 pb-4 text-center">
                        Applications are <span className="font-bold">FREE</span> and are open <br />
                        NOW at 
                        <a href="https://registration.hexlabs.org/67033be1d1c52afadcfb2968" 
                           className="font-bubblegum text-[#FFAAAA] underline"> registration.hexlabs.org
                        </a> 
                        <br /> and close on November 5th at 11:59 PM!
                    </p>
                    
                    <a href="https://registration.hexlabs.org/67033be1d1c52afadcfb2968" 
                       className="bg-brightRed text-3xl font-bubblegum text-white whitespace-nowrap font-bold py-3 px-4 rounded-full mt-4 hover:bg-[#A10000] shadow-none">
                        APPLY HERE
                    </a>
                </div>

                <div className="hidden md:flex col-span-1 flex justify-start">
                    {/*<img src={BubblesImage} alt="Bubbles" className="max-w-full h-auto" />*/}
                </div>

            </div>
        </div>
      </div>
    </div>
  );
};

export default Register;