interface Location {
  lat: number;
  lng: number;
}

export interface Step {
  distance: string;
  duration: string;
  instruction: string;
  end_location: Location;
  start_location: Location;
}

export interface RouteDto {
  distance: string;
  duration: string;
  end_address: string;
  start_address: string;
  steps: Step[];
}
