import { IAppModel } from "../interfaces/app";
import { IApiModel } from '../interfaces/api';
import { ApiModel } from "./api";

export class AppModel implements IAppModel {
  userName : string;
  userAge : number;
  constructor(fromApi : IApiModel) {
    Object.assign(
      this,
      new ApiModel(fromApi)
    );
    console.log(this);
  }
}