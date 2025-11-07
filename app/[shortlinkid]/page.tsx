
export default async function ShortLinkIdPage({ 
    params,
}: { params: Promise<{ shortlinkid: string }> }) {

    const { shortlinkid } = await params;

    return (
        <></>
    )
}