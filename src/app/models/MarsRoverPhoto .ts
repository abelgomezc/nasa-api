export class MarsRoverPhoto {
  id: number;
  sol: number;
  camera: any;
  img_src: string;
  earth_date: string;
  rover: any;

  // Constructor con valores predeterminados
  constructor(
    id: number = 0,
    sol: number = 0,
    camera: any = {
      id: 0,
      name: '',
      rover_id: 0,
      full_name: ''
    },
    img_src: string = '',
    earth_date: string = '',
    rover: any = {
      id: 0,
      name: '',
      landing_date: '',
      launch_date: '',
      status: '',
      max_sol: 0,
      max_date: '',
      total_photos: 0,
      cameras: [
        { name: '', full_name: '' }
      ]
    }
  ) {
    this.id = id;
    this.sol = sol;
    this.camera = camera;
    this.img_src = img_src;
    this.earth_date = earth_date;
    this.rover = rover;
  }
}
