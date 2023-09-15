import { ClientManagerInterface } from 'interfaces/client-manager';
import { CustomerInterface } from 'interfaces/customer';
import { CustomerSupportInterface } from 'interfaces/customer-support';
import { TeamMemberInterface } from 'interfaces/team-member';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  client_manager?: ClientManagerInterface[];
  customer?: CustomerInterface[];
  customer_support?: CustomerSupportInterface[];
  team_member?: TeamMemberInterface[];
  user?: UserInterface;
  _count?: {
    client_manager?: number;
    customer?: number;
    customer_support?: number;
    team_member?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
