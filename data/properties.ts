import { Property } from '~types/property';

export const properties: Property[] = [
  {
    id: 1,
    images: [
      'https://images.unsplash.com/photo-1493246318656-5bfd4cfb29b8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1466098672325-c9ddda4b7975?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ],
    rentLow: 3750,
    rentHigh: 31054,
    bedroomLow: 1,
    bedroomHigh: 5,
    name: 'The Hamilton',
    street: '555 ME 34th St',
    city: 'Miami',
    state: 'Florida',
    zip: 33137,
    tags: ['Parking'],
    lat: 25.80913,
    lng: -80.186363,
  },
  {
    id: 2,
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1602941525421-8f8b81d3edbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=853&q=80',
    ],
    rentLow: 4312,
    rentHigh: 77463,
    bedroomLow: 1,
    bedroomHigh: 5,
    name: 'The Nottingham',
    street: '112 NO Nottingham St',
    city: 'Nottingham',
    state: '',
    zip: 19302,
    tags: ['Pool'],
    lat: 25.78354,
    lng: -80.21391,
  },
  {
    id: 3,
    images: [
      'https://images.unsplash.com/photo-1600585152915-d208bec867a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=852&q=80',
      'https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    ],
    rentLow: 6754,
    rentHigh: 96841,
    bedroomLow: 1,
    bedroomHigh: 5,
    name: 'The Luxurious',
    street: '142 OX Oxford St',
    city: 'Oxford',
    state: 'Ohio',
    zip: 85462,
    tags: ['Luxury'],
    lat: 25.802389,
    lng: -80.197739,
  },
];

export const getPropertiesInArea = (boundingBox: number[]): Property[] => {
  const minLat = boundingBox[0];
  const maxLat = boundingBox[1];
  const minLng = boundingBox[2];
  const maxLng = boundingBox[3];

  const propertiesInArea: Property[] = [];

  for (const i in properties) {
    if (
      properties[i].lat <= maxLat &&
      properties[i].lat >= minLat &&
      properties[i].lng <= maxLng &&
      properties[i].lng >= minLng
    )
      propertiesInArea.push(properties[i]);
  }

  return propertiesInArea;
};
