const Input =({onChange, value})=>{
    return(
        <>
        <div className="controls">
            <input 
            type="text" 
            value={value}
            onChange={onChange}
            placeholder="Search countries by name, city and languages"/>
        </div>
        <style jsx>{`
        .controls{
            text-align: center;
            
        }
        .controls input{
            background: #faf6f6;
            border: 0.2rem solid #f8e7e7;
            border-radius: 3rem;
            color: orange;
            font-size: 2rem;
            height: 5rem;
            margin: 3rem auto;
            outline: none;
            text-indent: 2rem;
            width: 50%;
        }
        `}</style>
        </>
    )
}
export default Input;