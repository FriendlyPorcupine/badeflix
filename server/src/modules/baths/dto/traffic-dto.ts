interface Location {
  lat: number;
  lng: number;
}

export interface TrafficDto {
  location: Location;
  name: string;
  address: string;
  url: string;
  ticketUrl: string;
  available: boolean;
}
