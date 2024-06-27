import React from 'react';

interface ChipProps {
    children: React.ReactNode;
}

export default React.memo((props:ChipProps)=>{
    const {children} = props;

    return(
        <div className="flex justify-center items-center font-medium py-1 px-2 bg-white rounded-full text-gray-700 bg-gray-100 border border-gray-300 ">
        <div className="text-xs font-normal leading-none max-w-full flex-initial">
        {children}
        </div>
      </div>
    )
})