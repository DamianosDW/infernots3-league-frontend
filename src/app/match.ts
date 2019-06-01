import {UserInfo} from "./user-info";

export interface Match
{
  id?: number;
  matchStartDate?: Date;
  firstPlayer?: UserInfo;
  secondPlayer?: UserInfo;
  firstPlayerScore?: number;
  secondPlayerScore?: number;
  bo3?: boolean;
  matchEnded?: boolean;
}
