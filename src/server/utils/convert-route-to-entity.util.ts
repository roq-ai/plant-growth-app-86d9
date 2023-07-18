const mapping: Record<string, string> = {
  agricultures: 'agriculture',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
