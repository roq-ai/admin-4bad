interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Customer'],
  tenantRoles: ['Admin', 'Team Member', 'Client Manager', 'Customer Support'],
  tenantName: 'Company',
  applicationName: 'admin',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View the Company profile.', 'View the details (name, email, phone, services) of the Company.'],
  ownerAbilities: [
    'Manage Company profiles',
    'Invite Team Members, Client Managers, and Customer Support roles to the application',
    'Manage the details of each Company',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d85284f0-5d8a-4a1e-8a28-755d6f1accf6',
};
