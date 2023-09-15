const mapping: Record<string, string> = {
  'client-managers': 'client_manager',
  companies: 'company',
  customers: 'customer',
  'customer-supports': 'customer_support',
  'team-members': 'team_member',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
