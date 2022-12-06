export interface IServerInfoDetails {
    name: string,
    ip: string,
    photo?: string
    premium: boolean
    ms?: string
}

type transferType = "Upload" | "Download";

export interface IServerNetworkInfo {
    transferType: transferType
    amount: string,
}