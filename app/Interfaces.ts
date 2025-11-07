interface ServiceResponseData {
    id: number,
    originalLink: string,
    originalLinkId: string
}

export interface ServiceResponse {
    message: string,
    statusCode: number,
    isSuccessful: boolean,
    data: ServiceResponseData | null 
}