import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartColumn } from '@fortawesome/free-solid-svg-icons';

import Input from "./Input";

const Banner =({onChange, value})=>{
    return(
        <>
        <section>
            <header className="country-header">
                <h2>World Countries Data</h2>
                <p>Currently, we have 250 countries</p>
            
            </header>
            <Input onChange={onChange} value={value}/>
            <div className="icon"><FontAwesomeIcon icon={faChartColumn} className="icons" /></div>
        </section>
      
        <style jsx>{`
        section{
            max-width: 1200px;
            margin: 5% auto;
        }
        .country-header{
            background: #f0f0f0;
            padding: 1.5rem;
            text-align: center;
        }
        .country-header h2{
            color: orange;
            font-size: 4rem;
            font-weight: 600;
            letter-spacing: .25rem;
            margin: 0.5rem auto;
        }
        .country-header p{
            color: #555;
            font-size: 1.6rem;
            font-weight: 600;
        }
        .icon{
            text-align: center;
        }
        .icons{
            color: orange;
            font-size: 56px;
            font-weight: 600;
            cursor: pointer;
        }
        `}</style>
        </>
    )
}
export default Banner;