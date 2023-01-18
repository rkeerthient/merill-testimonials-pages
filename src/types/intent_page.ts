export interface ImageThumbnail {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  url: string;
  width: number;
  height: number;
  thumbnails?: ImageThumbnail[];
  alternateText?: string;
}

export interface ComplexImage {
  image: Image;
  details?: string;
  description?: string;
  clickthroughUrl?: string;
}

export interface EntityReference {
  entityId: string;
  name: string;
}

export interface C_specialtyList {
  name: string;
  description: string;
  image: Image;
}

export default interface Ce_intentPage {
  primaryPhoto?: ComplexImage;
  richTextDescription?: string;
  shortDescription?: string;
  description?: string;
  name: string;
  c_advisor?: EntityReference[];
  c_servicesTitle?: string;
  c_specialtyList?: C_specialtyList[];
  photoGallery?: ComplexImage[];
  headshot?: Image;
  mainPhone?: any;
  services?: string[];
  id: string;
}
