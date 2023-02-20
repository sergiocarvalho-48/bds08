export type Gender = 'MALE' | 'FEMALE' | 'OTHER';

export type SalesByGender = {
  gender: string;
  sum: number;
};

export type SalesSummaryData = {
  sum?: number;
  min: number;
  max: number;
  avg: number;
  count: number;
};

export type SalesStores = {
  id: number;
  name: string;
};

export type FilterData = {
  stores?: SalesStores;
};

export type PieChartConfig = {
  labels: string[];
  series: number[];
};
