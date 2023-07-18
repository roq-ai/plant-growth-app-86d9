interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Plant Specialist'],
  customerRoles: [],
  tenantRoles: ['Plant Specialist'],
  tenantName: 'Agriculture',
  applicationName: 'Plant growth application',
  addOns: [],
};
