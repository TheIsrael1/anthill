import { LazyLoadImage } from "react-lazy-load-image-component"
import profilePicture from 'assets/image/profilePicture.png';
import { shimmer, toBase64 } from "utils/general/shimmer";
import CustomInput from "components/shadcn/CustomInput";


const Account = () => {
    return (
        <div className="bg-white w-100 shadow-3 px-5 py-7 rounded-md">
            <div className="flex gap-x-4 items-center">
                <div className="w-32 h-32">
                    <LazyLoadImage
                        src={profilePicture}
                        alt='avatar'
                        className='w-full h-full  transition-transform duration-300 ease-in-out bg-top bg-cover group-hover:scale-105'
                        placeholderSrc={`data:image/svg+xml;base64,${toBase64(shimmer(700, 475))}`}
                    />
                </div>
                <div className="flex flex-col gap-y-2">
                    <div className="flex gap-x-4">
                        <button className='w-max py-[0.5rem] px-[1.5rem] bg-primary-1 rounded-[8px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity ease-in-out duration-300 group'>
                            <span className='leading-[28px] tracking-[0.15px] text-white'>UPLOAD A NEW PHOTO</span>
                        </button>
                        <button className='w-max py-[0.5rem] px-[1.5rem] border border-red-200 bg-white text-red-500 rounded-[8px] flex items-center justify-center gap-2 hover:bg-red-100 hover:opacity-90 transition-all ease-in-out duration-300 group'>
                            <span className='leading-[28px] tracking-[0.15px]'>RESET</span>
                        </button>
                    </div>
                    <p className='font-[300] text-[14px] text-secondary-2 leading-[21px] tracking-[0.15px]'>
                        Allowed JPG, GIF or PNG. Max size of 800K
                    </p>
                </div>
            </div>

            <CustomInput/>
        </div>
    )
}

export default Account