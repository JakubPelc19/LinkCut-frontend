import CopyButton from "./CopyButton";


export default function ResultComponent( { result }: { result: string } ) {

    return (
    <div className="bg-[#e6e6e6] justify-between items-center w-full h-14 mt-2 rounded-2xl flex pl-4 pr-2">
        <p>{result}</p>
        
        <CopyButton/>
    </div>
)
}