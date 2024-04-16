import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Banner from "./banner";
import CountryCard from "./CountriesCard";

const HomePage = () => {
    const [data, setData] = useState([])
    const [searchQuery, setSearchQuery] = useState("");
    useEffect(()=>{
        fetchData()
    }, [])
   
    const fetchData= async ()=>{
        const url = 'https://restcountries.com/v3.1/all'
        try{
          const response = await axios.get(url)
          const data = await response.data
          setData(data)
        }catch (error){
          console.log(error)
        }
      }
      const filteredCountries = data.filter((country)=>{
        return country.name.common.toLowerCase().includes(searchQuery.toLowerCase());

      });
      const handleSearchChange = (event) =>{
        setSearchQuery(event.target.value);
      }
     
    return (
        <>
            <main>
                <Banner onChange={handleSearchChange} value={searchQuery}/>
                <div className="countries-wrapper">
                    {searchQuery ? (filteredCountries.map((country, index)=>(<CountryCard key={index} country={country}/>))): (data.map((country, index)=>(<CountryCard key={index} country={country}/>)))}
                </div>
            </main>
            <style jsx>{`
        main{
            width: 100%;
        }
        .countries-wrapper{
            background: #f0f0f0;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
            justify-items: center;
            margin: 1rem 0 3rem;
            padding: 1rem;  
        }
        `}</style>
        </>
    )
}
export default HomePage;