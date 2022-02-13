
console.log("hello")
const Counter=()=>{
    const [count,setCount] = React.useState(0);
    const [taps,setTaps] = React.useState(0);

    const incrementCount=()=>{
        setCount(prevCount =>  prevCount + 1)
        setTaps(prevCount =>  prevCount + 1)
      
    }
    const decrementCount=()=>{
        (count ===0)
        ?setTaps(prevCount =>  prevCount + 1)
        :
        setCount(prevCount =>  prevCount - 1)
        setTaps(prevCount =>  prevCount + 1)
      
    }
    const reset =()=>{
        setCount(0);
    }
    const resetAll =()=>{
        setCount(0);
        setTaps(0);
    }

    return(
        <div> 
        <div className="counter">
            <h1>Counter</h1>
            <h2 className="count">{count}</h2>
            <h4 className="taps">Total taps:{taps}</h4>
            <div>
                <button className="buttonCounter" onClick={decrementCount}>Decrement -</button>
                <button  className="buttonCounter" onClick={incrementCount}>Increment +</button>
            </div>
            <div>
                <button className="reset-count buttonCounter" onClick={reset}>Reset Count</button>
                <button className="reset-all buttonCounter" onClick={resetAll} >Reset All</button>
            </div>
        </div>
    </div>
    )
}


const App = () => {

    const [countShow,setCountShow] = React.useState(true)
    const [buttonText,setButtonText]= React.useState("Hide")
    const handelToggle =()=>{
        setCountShow(prevCountShow=>setCountShow(!prevCountShow))
        countShow === false ? setButtonText("Hide"):setButtonText("Show")
    }
    
    return (
        <div className="app">
            <button className="buttonToggle" onClick={handelToggle} >{buttonText}</button>
            { countShow &&<Counter />}
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));
