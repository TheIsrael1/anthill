export interface getContentInterface {
  organization_id: string;
  page?: number;
  size?: number;
  search_value: string;
}

export interface getSingleContentInterface {
  id?: string;
  organization_id: string;
}
