import { SystemUserAddressProtocol } from "./system-user-address-protocol";

export interface SystemUserProtocol {
  firstName: string;
  userName: string;

  getAddresses(): Promise<SystemUserAddressProtocol[]>;
}
