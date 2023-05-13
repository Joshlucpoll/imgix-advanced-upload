import exifr from "exifr";

export interface ExifData {
  JFIFVersion: number;
  ResolutionUnit: string;
  XResolution: number;
  YResolution: number;
  ThumbnailWidth: number;
  ThumbnailHeight: number;
  Version: number;
  CreateDate: Date;
  CreatorTool: string;
  ModifyDate: Date;
  Rating: number;
  MetadataDate: Date;
  ColorMode: number;
  ICCProfile: string;
  rights: Rights;
  title: Title;
  History: History;
  ApplicationRecordVersion: string;
  ObjectName: string;
  CopyrightNotice: string;
  ProfileCMMType: string;
  ProfileVersion: string;
  ProfileClass: string;
  ColorSpaceData: string;
  ProfileConnectionSpace: string;
  ProfileDateTime: Date;
  ProfileFileSignature: string;
  PrimaryPlatform: string;
  RenderingIntent: string;
  ProfileCreator: string;
  ProfileDescription: string;
  ProfileCopyright: string;
  MediaWhitePoint: { [key: string]: number };
  ChromaticAdaptation: { [key: string]: number };
  RedMatrixColumn: { [key: string]: number };
  BlueMatrixColumn: { [key: string]: number };
  GreenMatrixColumn: { [key: string]: number };
  RedTRC: { [key: string]: number };
  GreenTRC: { [key: string]: number };
  BlueTRC: { [key: string]: number };
  Chromaticity: { [key: string]: number };
  Make: string;
  Model: string;
  Orientation: string;
  Software: string;
  ExposureTime: number;
  FNumber: number;
  ExposureProgram: string;
  ISO: number;
  SensitivityType: number;
  ExifVersion: string;
  DateTimeOriginal: Date;
  ComponentsConfiguration: { [key: string]: number };
  CompressedBitsPerPixel: number;
  ShutterSpeedValue: number;
  ApertureValue: number;
  BrightnessValue: number;
  ExposureCompensation: number;
  MaxApertureValue: number;
  MeteringMode: string;
  LightSource: string;
  Flash: string;
  FocalLength: number;
  ColorSpace: number;
  ExifImageWidth: number;
  ExifImageHeight: number;
  FocalPlaneXResolution: number;
  FocalPlaneYResolution: number;
  FocalPlaneResolutionUnit: string;
  SensingMethod: string;
  FileSource: string;
  SceneType: string;
  ExposureMode: string;
  WhiteBalance: string;
  SceneCaptureType: string;
  Saturation: string;
  Sharpness: string;
  SubjectDistanceRange: string;
}

export interface History {
  action: string;
  softwareAgent: string;
  when: Date;
}

export interface Rights {
  lang: string;
}

export interface Title {
  lang: string;
  value: string;
}

export default async function getExifData(file: File): Promise<ExifData> {
  const promise = new Promise<ExifData>(async (resolve) => {
    const exif = await exifr.parse(file, true);
    resolve(exif);
  });

  return promise;
}
