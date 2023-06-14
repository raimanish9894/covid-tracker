import React,{ useState } from 'react'

const SearchPage = () => {

  const [ search, setSearch ] = useState("");
  const [ caseData, setCaseData ] = useState();
  const [ deathData, setDeathData ] = useState();
  const [ testData, setTestData ] = useState();
  const [ responseData, setResponseData ] = useState();


  
    const handleSearch = async() => {
      const url = `https://covid-193.p.rapidapi.com/statistics?country=${search}`
      const response = await fetch(url,{
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': 'f360ecb18dmsh9d9fe69cc80e353p1673e8jsnf0bccc3f012c',
        },
      });
      const result = await response.json();
      setResponseData(result.response[0]);
      setCaseData(result.response[0].cases);
      setDeathData(result.response[0].deaths);
      setTestData(result.response[0].tests);

      console.log(responseData);
    }
  

  return (
    <div>
      <h1>Search Country covid data</h1>
      <div>
        <input
        placeholder='search.. eg.. China'
        type='search'
        value={search}
        onChange={(e) => setSearch(e.target.value)} />

        <button onClick={handleSearch}>Search</button>
      </div>

      <div>
        <h3>Country:- {responseData && responseData.country}</h3>
        <h3>Continent:- {responseData && responseData.continent}</h3>
        <h3>Total Population:- {responseData && responseData.population}</h3>
        <h3>Date:- {responseData && responseData.day}</h3>
        <h3>Total Case:- {caseData && caseData.total}</h3>
        <h3>Active Case:- {caseData && caseData.active}</h3>
        <h3>New Case:- {caseData && caseData.new}</h3>
        <h3>Critical Case:- {caseData && caseData.critical}</h3>
        <h3>Recovered Case:- {caseData && caseData.recovered}</h3>
        <h3>Total Deaths:- {deathData && deathData.total}</h3>
        <h3>New Deaths:- {deathData && deathData.new}</h3>
        <h3>Total Tests:- {testData && testData.total}</h3>
      </div>
    </div>
  )
}

export default SearchPage