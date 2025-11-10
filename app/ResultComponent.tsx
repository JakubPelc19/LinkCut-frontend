'use client'

import { useEffect, useState } from "react";
import CopyButton from "./CopyButton";


export default function ResultComponent( { result, isSuccessful }: { result: string, isSuccessful: boolean } ) {

    const [message, setMessage] = useState(result);

    useEffect(() => {
        if (isSuccessful)
            setMessage(window.location.href + result);
    }, [isSuccessful, result]);
    
    return (
    <div className="bg-[#e6e6e6] justify-between items-center w-full h-14 mt-2 rounded-2xl flex pl-4 pr-2">
        <p>{message}</p>
        
        {isSuccessful && <CopyButton result={message}/>}
    </div>
)
}