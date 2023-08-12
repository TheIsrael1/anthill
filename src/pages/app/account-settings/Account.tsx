import { LazyLoadImage } from "react-lazy-load-image-component"
import profilePicture from 'assets/image/profilePicture.png';
import { shimmer, toBase64 } from "utils/general/shimmer";
import CustomInput from "components/shadcn/CustomInput.tsx";
import { useState } from "react";


const Account = () => {
    const [disabled, setDisabled] = useState(true)
    return (
        <div className="flex flex-col">
            <div className="bg-white w-100 shadow-3 px-5 py-7 rounded-md">
                <div className="flex flex-col md:flex-row md gap-x-4 md:items-center">
                    <div className="w-32 h-32">
                        <LazyLoadImage
                            src={profilePicture}
                            alt='avatar'
                            className='w-full h-full  transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
                            placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                        />
                    </div>
                    <div className="flex mt-3 md:mt-0 flex-col gap-y-2">
                        <div className="flex gap-x-2 md:gap-x-4">
                            <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] bg-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ease-in-out duration-300 group'>
                                <span className='leading-[28px] tracking-[0.15px] text-white text-[13px] md:text-[14px] lg:text-[16px]'>UPLOAD A NEW PHOTO</span>
                            </button>
                            <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] border border-red-200 bg-white text-red-500 rounded-[8px] flex items-center justify-center gap-2 hover:bg-red-100 hover:opacity-90 transition-all ease-in-out duration-300 group'>
                                <span className='leading-[28px] tracking-[0.15px] text-[13px] md:text-[14px] lg:text-[16px]'>RESET</span>
                            </button>
                        </div>
                        <p className='font-[300] text-[12px] md:text-[13px] lg:text-[14px] text-secondary-2 leading-[21px] tracking-[0.15px]'>
                            Allowed JPG, GIF or PNG. Max size of 800K
                        </p>
                    </div>
                </div>
                <div className="w-full mt-10 flex flex-col gap-y-3 md:gap-y-5">
                    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-3 md:gap-y-0">
                        <CustomInput label="First Name" type="text" className="w-full" />
                        <CustomInput label="Last Name" type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-3 md:gap-y-0">
                        <CustomInput label="Email" type="email" className="w-full" />
                        <CustomInput label="Organization" type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-3 md:gap-y-0">
                        <CustomInput label="Phone Number" type="tel" className="w-full" />
                        <CustomInput label="Address" type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-3 md:gap-y-0">
                        <CustomInput label="State" type="text" className="w-full" />
                        <CustomInput label="Zip Code" type="number" className="w-full" />
                    </div>

                    {/* this ones are drop select, could be searchable too, the input below would be changed */}
                    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-3 md:gap-y-0">
                        <CustomInput label="Country" type="text" className="w-full" />
                        <CustomInput label="Language" type="text" className="w-full" />
                    </div>
                    <div className="flex flex-col md:flex-row w-full md:gap-x-4 gap-y-3 md:gap-y-0">
                        <CustomInput label="Status" type="text" className="w-full" />
                        <CustomInput label="Currency" type="text" className="w-full" />
                    </div>
                    {/* .... */}
                    
                    <div className="flex w-full gap-x-4 mt-2">
                        <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] bg-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ease-in-out duration-300 group'>
                            <span className='leading-[28px] tracking-[0.15px] text-white text-[13px] md:text-[14px] lg:text-[16px]'>SAVE CHANGES</span>
                        </button>
                        <button className='w-max py-[0.3rem] px-[1.1rem] md:px-[1.5rem] border border-gray-200 bg-white text-gray-500 rounded-[8px] flex items-center justify-center gap-2 hover:bg-gray-100 hover:opacity-90 transition-all ease-in-out duration-300 group'>
                            <span className='leading-[28px] tracking-[0.15px] text-gray-500 text-[13px] md:text-[14px] lg:text-[16px]'>CANCEL</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-white w-100 shadow-3 px-5 py-7 rounded-md mt-7 flex flex-col">
                <p className="text-gray-500 font-semibold">Delete Account</p>
                <span className="mt-6 flex items-center gap-x-3">
                    <input id="default-checkbox" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-white border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                    <p className='font-[300] text-[14px] text-gray-700 leading-[21px] tracking-[0.15px]'>
                        I confirm my account deactivation
                    </p>
                </span>
                <button className={`${disabled ? "bg-gray-200 text-gray-400" : "border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:opacity-90 transition-all ease-in-out duration-300 group"} w-max mt-4 py-[0.3rem] px-[1.1rem] md:px-[1.5rem]  rounded-[8px] flex items-center justify-center gap-2`} disabled={disabled}>
                    <span className='leading-[28px] tracking-[0.15px]
                    text-[13px] md:text-[14px] lg:text-[16px]
                    '>DEACTIVATE ACCOUNT</span>
                </button>
            </div>  
        </div>
    )
}

export default Account