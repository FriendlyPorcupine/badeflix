import { toast } from 'react-hot-toast';

interface Bath {
  name: string;
  category: string;
}

interface Location {
  lat: number;
  lng: number;
}

export interface TrafficData {
  location: Location;
  name: string;
  address: string;
  url: string;
  ticketUrl: string;
  available: boolean;
}

export interface Step {
  distance: string;
  duration: string;
  instruction: string;
  end_location: Location;
  start_location: Location;
}

export interface Route {
  distance: string;
  duration: string;
  end_address: string;
  start_address: string;
  steps: Step[];
}

export interface BathData {
  distance: number;
  duration: string;
  end_address: string;
  start_address: string;
  steps: Step[];
  location: Location;
  name: string;
  address: string;
  url: string;
  ticketUrl: string;
  available: boolean;
}

export const fetchBathData = async (
  street: string,
  zip: string,
): Promise<BathData[]> => {
  const validZipCodes = [
    '1010',
    '1020',
    '1030',
    '1040',
    '1050',
    '1060',
    '1070',
    '1080',
    '1090',
    '1100',
    '1110',
    '1120',
    '1130',
    '1140',
    '1150',
    '1160',
    '1170',
    '1180',
    '1190',
    '1200',
    '1210',
    '1220',
    '1230',
  ];

  if (street == '') {
    toast.error('Invalid street name');
    return [];
  }

  if (!validZipCodes.includes(zip)) {
    toast.error('Invalid zip code');
    return [];
  }

  const allBathRes = await fetch('http://localhost:3000/v1/bath/baths');

  if (!allBathRes.ok) {
    throw new Error('Failed to fetch all baths');
  }

  const allBaths: Bath[] = await allBathRes.json();
  const baths = allBaths
    .filter((bath) => bath.category === 'summer')
    .map((bath) => bath.name);

  const bathTrafficData = await Promise.all(
    baths.map((bath) =>
      fetch(
        'http://localhost:3000/v1/bath/traffic?' +
          new URLSearchParams({ bath }),
      ),
    ),
  );

  const bathTraffic: TrafficData[] = await Promise.all(
    bathTrafficData.map((data) => data.json()),
  );

  const routingData = await Promise.all(
    bathTraffic.map((traffic) =>
      fetch(
        'http://localhost:3000/v1/direction/direction?' +
          new URLSearchParams({
            start_street: street,
            start_zip: zip,
            destination_address: `${traffic.name}, ${traffic.address}`,
          }),
      ),
    ),
  );

  const routes: Route[] = await Promise.all(
    routingData.map((data) => data.json()),
  );
  console.log(routes);

  const fullBathData = routes
    .map((route, i) => ({
      ...bathTraffic[i],
      ...route,
    }))
    .map((data) => ({
      ...data,
      distance: parseFloat(
        data.distance.substring(0, data.distance.length - 2),
      ),
    }))
    .sort((a, b) =>
      a.distance < b.distance ? -1 : a.distance > b.distance ? 1 : 0,
    )
    .slice(0, 3);

  return fullBathData;
};
