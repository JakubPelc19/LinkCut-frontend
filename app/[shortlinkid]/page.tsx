import { redirect } from "next/navigation";
import { ServiceResponse } from "../Interfaces";

let message = "";

async function getOriginalLinkRequest(shortLinkId: string) {
    let response: ServiceResponse | null;
    try {
        const request = await fetch(`http://localhost:5167/api/LinkCutter/getoriginallink/${shortLinkId}`);

        response = await request.json();
    }
    catch {
        response = null;
    }

    return response;
}

export default async function ShortLinkIdPage({ 
    params,
}: { params: Promise<{ shortlinkid: string }> }) {

    const { shortlinkid } = await params;

    const response: ServiceResponse | null = await getOriginalLinkRequest(shortlinkid);

    if (response === null)
        message = "Something went wrong! Try it again later";
    else if (!response.isSuccessful)
        message = response.message;
    else
        redirect(response.data?.originalLink!);

    return (
        <p>{message}</p>
    )
}