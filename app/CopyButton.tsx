import Image from "next/image"

export default function CopyButton() {

    return (
        <button className="cursor-pointer">
            <Image
            src="/content_copy_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg"
            alt="Copy button icon"
            width={24}
            height={24}
            />
        </button>
    )
}