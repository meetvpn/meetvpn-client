export interface IServerInfoDetails {
  id: number
  hostname: string
  quality: number
  location: ILocation
}

export interface ILocation {
  country: string
  countryCode: number
}

type transferType = "Upload" | "Download";

export interface IServerNetworkInfo {
  transferType: transferType
  amount: string
}

export interface ServerListProps {
  title: string;
  servers: any[],
  premiumServers?: boolean
}

export interface IMessages {
  headerTitle: string;
  footerText: string;
}