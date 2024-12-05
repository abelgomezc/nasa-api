// Definir la clave de la API de la NASA
export const NASA_KEY = 'jEZkPFz0d7fLpQnDcObHyHoIVWrndrgct2qGB5Jz'; // Sustituye con tu clave real si es necesario

// Rutas para el servicio APOD (Astronomy Picture of the Day)
export const NASA_APOD_URL = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;

export const NASA_MARS_PHOTOS_URL = `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?api_key=${NASA_KEY}`;



// Rutas para las fotos del rover de Marte (Curiosity)
export const MARS_ROVER_PHOTOS_URL = (date: string) => {
  return `https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=${date}&api_key=${NASA_KEY}`;
};

// Rutas para las imágenes de EPIC (Earth Polychromatic Imaging Camera)
export const NASA_EPIC_URL = `https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_KEY}`;
export const NASA_EPIC_BY_DATE_URL = (date: string) => {
  return `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${NASA_KEY}`
};
export const NASA_EPIC_IMAGE_URL = (date: string, image: string) => {
  return `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${image}.png?api_key=${NASA_KEY}`
};
