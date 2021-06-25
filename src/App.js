import React, { useEffect,useState }  from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Covid from './components/Covid'


function App() {
  
  const [covidData, setCovidData] = useState({"country" : "","countryInfo": {"flag" : ""}})
  const getCovidData = async () => {
    try {
      const res = await fetch("https://disease.sh/v3/covid-19/countries/India");
      let data = await res.json()
      
      setCovidData(data)

      console.log(covidData);
    } catch (error) {
      console.log("Error occured");
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <div className="App">
      <Header flag = {covidData.countryInfo.flag} country = {covidData.country}/>
      <Covid data = {covidData}/>
      <Footer />
    </div>
  );
}

export default App;
