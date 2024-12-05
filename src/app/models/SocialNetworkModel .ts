export class SocialNetworkModel {
    name: string;
    url: string;
    icon: string;
  
    constructor(name: string = '', url: string = '', icon: string = '') {
      this.name = name;
      this.url = url;
      this.icon = icon;
    }
  }
  