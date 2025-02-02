import { Country } from '../types/Country';

export async function fetchCountries(): Promise<Country[]> {
  const res = await fetch(`https://restcountries.com/v3.1/all`);
  if (!res.ok) {
    throw new Error();
  }
  return res.json() as any as Country[];
}

// fetchCountries().then((res) => console.log(res[0]));
