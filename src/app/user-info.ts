export class UserInfo
{
  userId?: number;
  username?: string;
  ts3Nickname?: string;
  lolNickname?: string;
  csgoNickname?: string;

  constructor(userId: number, username: string, ts3Nickname: string, lolNickname: string, csgoNickname: string)
  {
    this.userId = userId;
    this.username = username;
    this.ts3Nickname = ts3Nickname;
    this.lolNickname = lolNickname;
    this.csgoNickname = csgoNickname;
  }

  public getUserId(): number
  {
    return this.userId;
  }

  public getUsername(): string
  {
    return this.username;
  }

  public getTs3Nickname(): string
  {
    return this.ts3Nickname;
  }

  public getLolNickname(): string
  {
    return this.lolNickname;
  }

  public getCsgoNickname(): string
  {
    return this.csgoNickname;
  }
}