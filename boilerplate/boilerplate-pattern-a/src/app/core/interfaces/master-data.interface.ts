export class CountriesResponse {
  data: Array<Country>;
  responseCode: string;
}

export class  Country {
  id: number;
  value: string;
}
