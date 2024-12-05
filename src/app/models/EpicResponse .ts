export class EpicResponse {
    identifier: string;
    caption: string;
    image: string;
    version: string;
    centroid_coordinates: {
      lat: number;
      lon: number;
    };
    dscovr_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    lunar_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    sun_j2000_position: {
      x: number;
      y: number;
      z: number;
    };
    attitude_quaternions: {
      q0: number;
      q1: number;
      q2: number;
      q3: number;
    };
    date: string;
    coords: {
      centroid_coordinates: {
        lat: number;
        lon: number;
      };
      dscovr_j2000_position: {
        x: number;
        y: number;
        z: number;
      };
      lunar_j2000_position: {
        x: number;
        y: number;
        z: number;
      };
      sun_j2000_position: {
        x: number;
        y: number;
        z: number;
      };
      attitude_quaternions: {
        q0: number;
        q1: number;
        q2: number;
        q3: number;
      };
    };
  
    constructor(
      identifier: string = '',
      caption: string = '',
      image: string = '',
      version: string = '',
      centroid_coordinates = { lat: 0, lon: 0 },
      dscovr_j2000_position = { x: 0, y: 0, z: 0 },
      lunar_j2000_position = { x: 0, y: 0, z: 0 },
      sun_j2000_position = { x: 0, y: 0, z: 0 },
      attitude_quaternions = { q0: 0, q1: 0, q2: 0, q3: 0 },
      date: string = '',
      coords = {
        centroid_coordinates: { lat: 0, lon: 0 },
        dscovr_j2000_position: { x: 0, y: 0, z: 0 },
        lunar_j2000_position: { x: 0, y: 0, z: 0 },
        sun_j2000_position: { x: 0, y: 0, z: 0 },
        attitude_quaternions: { q0: 0, q1: 0, q2: 0, q3: 0 },
      }
    ) {
      this.identifier = identifier;
      this.caption = caption;
      this.image = image;
      this.version = version;
      this.centroid_coordinates = centroid_coordinates;
      this.dscovr_j2000_position = dscovr_j2000_position;
      this.lunar_j2000_position = lunar_j2000_position;
      this.sun_j2000_position = sun_j2000_position;
      this.attitude_quaternions = attitude_quaternions;
      this.date = date;
      this.coords = coords;
    }
  }
  