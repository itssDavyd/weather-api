export interface WeatherData {
  latitude: number;
  longitude: number;
  resolvedAddress: string;
  adress: string;
  timezone: string;
  description: string;
  days: Day[];
}

export interface Day {
  datetime: string;
  tempmax: number;
  tempmin: number;
  temp: number;
  humedity: number;
  presure: number;
  precip: number;
  precipprob: number;
  preciptype: string[];
  hours: Hour[];
  description: string;
  conditions: string;
}

export interface Hour {
  datetime: string;
  temp: number;
  humedity: number;
  presure: number;
  visibility: number;
  conditions: string;
  precip: number;
  precipprob: number;
}
