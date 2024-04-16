import { Fragment } from "react";

const CountryCard = ({country:{flags, name, capital, languages, population, currencies}})=>{
    return (
        <>
        <div className="country">
            <div className="country_flag">
                <img src={flags.png} alt={name.common}/>
            </div>
            <h3>{name.common}</h3>
            <div className="country-text">
                <p><span>Capital: </span> {capital}</p>
               <p> <span>languages: </span> {languages && typeof languages === 'object' && Object.entries(languages).map(([code, lang], index)=>{
                
                    if (Object.keys(languages).length > 1){
                        const key = Object.keys(languages)
                        console.log(key[key.length-1])
                       
                        return (
                            <Fragment>
                                        {lang}
                                        {   key[index] !== key[key.length-1] && ", " }
                            </Fragment>
                        )
                                
                    }else{
                        
                        return(
                            <Fragment key={code}>{lang}</Fragment>
                        )
                    }
                })}
                </p>
                
                <p><span>Population: </span> {parseInt(population).toLocaleString()}</p>
                <p><span>Currency: </span> {
                    currencies && typeof currencies === 'object' && Object.entries(currencies).map(([code, currency], index)=>{
                        if(Object.keys(currencies).length > 1){
                            const key = Object.keys(currencies)
                            return(
                                <Fragment key={code}>
                                {currency.name}
                                {   key[index] !== key[key.length-1] && ", " }
                                </Fragment>
                            )

                        }else{
                            return(
                                <Fragment key={code}>
                                {currency.name}
                                </Fragment>
                            )
                        }
                    })
                }</p>
                 <p><span>Currency Symbol: </span> 
                 {
                    currencies && typeof currencies === 'object' && Object.entries(currencies).map(([code, currency], index)=>{
                        if(Object.keys(currencies).length > 1){
                            const key = Object.keys(currencies)
                            return(
                                <Fragment key={code}>
                                {currency.symbol}
                                {   key[index] !== key[key.length-1] && ", " }
                                </Fragment>
                            )

                        }else{
                            return(
                                <Fragment key={code}>
                                {currency.name}
                                </Fragment>
                            )
                        }
                    })
                }
                 </p>
            </div>

        </div>
        <style jsx>{`
        .country{
            background: #fff;
            border-radius: 0.2rem;
            margin: 0.5rem;
            max-width: 25rem;
            min-width: 25rem;
            padding: 2rem;
            text-align: center; 
        }
        .country:hover{
            box-shadow: 0 0.1rem 1rem #cfc9c7;
            -webkit-transform: scale(1.015);
            transform: scale(1.015);
            -webkit-transition: all .2s ease-in;
        }
        .country_flag{
            height: auto;
            margin: auto;
            text-align: center;
            width: 20rem;
        }
        .country h3{
            color: orange;
            font-size: 1.6rem;
            font-weight: bolder;
            letter-spacing: .075rem;
            margin-bottom: 1rem;
        }
        .country p{
            color: #747474;
            font-size: 1.6rem;
            font-weight: 500;
            letter-spacing: .05rem;
            padding: 0.2rem;
            text-align: left;
        }
        .country span{
            font-weight: 600;
            color: #616161;
        }
        `}</style>
        </>
    )
}
export default CountryCard;