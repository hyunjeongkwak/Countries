import { useEffect, useState } from 'react';
import { fetchCountries } from '../api/countriesApi';
import { Country } from '../types/Country';
import { Container, H2, H1, CountryContainer, CountryCard, Img, H3, P } from '../style';

const CountryList = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [selectedCountries, setSelectedCountries] = useState<Country[]>([]);

  useEffect(() => {
    const getCountries = async () => {
      try {
        const data = await fetchCountries();
        // console.log(data);
        setCountries(data);
      } catch (err) {
        console.error('countries 정보를 가져오지 못했습니다.');
      } finally {
        setLoading(false);
      }
    };
    getCountries();
  }, []);

  const handleAddCountryClick = (country: Country): void => {
    setSelectedCountries((prevSelectedCountries) => {
      if (!prevSelectedCountries.find((el) => el.cca3 === country.cca3)) {
        return [...prevSelectedCountries, country];
      }

      return prevSelectedCountries;
    });
  };
  // console.log(selectedCountries);

  const handleRemoveCountryClick = (country: Country): void => {
    setSelectedCountries((prevSelectedCountries) => prevSelectedCountries.filter((el) => el.cca3 !== country.cca3));
  };

  // 이미 선택된 나라 제외한 국가들 필터링
  const filteredCountries = countries.filter(
    (country) => !selectedCountries.some((selected) => selected.cca3 === country.cca3)
  );

  if (loading)
    return (
      <div>
        <Container>
          <CountryCard>
            <H3>Countries</H3>
            <H2>Loading...</H2>
          </CountryCard>
        </Container>
      </div>
    );

  return (
    <Container>
      <H2>Favorite Countries</H2>
      <div>
        {selectedCountries && (
          <CountryContainer>
            {selectedCountries.map((country) => (
              <CountryCard
                key={country.cca3}
                onClick={() => {
                  handleRemoveCountryClick(country);
                }}
              >
                <Img src={country.flags.svg} alt="flag" />
                <H3>{country.name.common}</H3>
                <P>{country.capital}</P>
              </CountryCard>
            ))}
          </CountryContainer>
        )}
      </div>
      <H1>Countries</H1>
      <CountryContainer>
        {filteredCountries.map((country) => (
          <CountryCard key={country.cca3} onClick={() => handleAddCountryClick(country)}>
            <Img src={country.flags.svg} alt="flag" />
            <H3>{country.name.common}</H3>
            <P>{country.capital}</P>
          </CountryCard>
        ))}
      </CountryContainer>
    </Container>
  );
};

export default CountryList;
