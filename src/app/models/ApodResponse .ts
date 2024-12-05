export class ApodResponse {
    title: string;
    explanation: string;
    media_type: string;
    url: string;
    hdurl: string;
    copyright: string;
    date: string;
    service_version: string;
  
    constructor(
      title: string = '',
      explanation: string = '',
      media_type: string = '',
      url: string = '',
      hdurl: string = '',
      copyright: string = '',
      date: string = '',
      service_version: string = ''
    ) {
      this.title = title;
      this.explanation = explanation;
      this.media_type = media_type;
      this.url = url;
      this.hdurl = hdurl;
      this.copyright = copyright;
      this.date = date;
      this.service_version = service_version;
    }
  }
  