import Image from "next/image"

export default function SendButton() {
    return (
    <button type="submit">
        <Image
            src="/arrow_upward_24dp_999999_FILL0_wght400_GRAD0_opsz24.svg" 
            alt="send button icon"
            width={24}
            height={24}
            />
    </button>)
}