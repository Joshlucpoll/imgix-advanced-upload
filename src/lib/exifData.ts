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

interface Anything {
  [key: string]: any;
}

export type RawExifData = ExifData & Anything;

export default async function getExifData(file: File): Promise<ExifData> {
  const promise = new Promise<ExifData>(async (resolve) => {
    const rawExif: RawExifData = await exifr.parse(file, true);

    // const exifDataProperties = <Array<keyof ExifData>>Object.keys(<ExifData>{});

    // const processedExif = <ExifData>{};
    // console.log(exifDataProperties);
    // Object.keys(rawExif).forEach((key) => {
    //   if (exifDataProperties.indexOf(key) >= 0) {
    //     processedExif[key] = rawExif[key];
    //   }
    // });

    resolve(rawExif);
  });

  return promise;
}
