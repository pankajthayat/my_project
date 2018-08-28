
class Counter extends React.Component
{
    constructor(props)
    {
        super(props)
        this.handleAddOne=this.handleAddOne.bind(this)
   this.handleMinusOne=this.handleMinusOne.bind(this)
   this.handleReset=this.handleReset.bind(this);
   this.state={
     count: 0
   };
    }
    handleAddOne()
    {
        this.setState((preState)=>{
            return{
                count:preState.count+1,
               // count:count++;
            }
        })
    //    this.state.count++;
    //    console.log(this.state)

    }
    handleMinusOne()
    {

        this.setState((preState)=>{
            return{
                count:preState.count-1
            }
        })
        console.log("handleMinusOne")
    }
    handleReset()
    {
        this.setState(()=>{
            return{
                count:0
            }
        })
        console.log("reset")

    }
    
    render()
    {
        
        return(
            <div>
          <h1>Count: {this.state.count}</h1>
          <button onClick={this.handleAddOne}>+1</button>
          <button onClick={this.handleMinusOne}>-1</button>
          <button onClick={this.handleReset}>reset</button>
          </div>
        )
    }
}

// var template=(
//     <div>
//     <h1>Pankaj</h1>
//     </div>
// )
ReactDOM.render(<Counter></Counter>,document.getElementById("app"));




































// console.log("App.js is running")

// let count=0;
// const addOne=()=>
// {
//     count++;
// renderCounterApp();
// };
// const minusOne=()=>
// {
//     count--;
//     renderCounterApp();
// };
// const reset=()=>
// {
//     count=0;
//     renderCounterApp();
// }




// const appRoot = document.getElementById("app");


// const renderCounterApp=()=>
// {
//     var template=(
//         <div>
//             <h1>Count : {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={minusOne}>-1</button>
//             <button onClick={reset}>reset</button>
//         </div>
//     )
//     ReactDOM.render(template,appRoot);
// };

// renderCounterApp();

















// var template =(
// <div>
//     <p>does it change</p>
//     <ol>
//     <li>pankaj</li>
//     <li>rahul</li>
//     <li>manish</li>
//     </ol>
// </div>
// )
// var app={
//     title:"Indecion app",
//     subtitle:"put your life in the hands of a computer",
//     options:["one","two"]
// }


// var template=(
//     <div>
//     <h1>App Details</h1>
//     <p>Name : {app.title}</p>
//     {app.subtitle&&<p>{"Subtitle: "+app.subtitle}</p>}
//     <p>{app.options.length>0?options():"No Options"}</p>
//     </div>
// )

// function options()
// {//why is it not working without return??
//     return(
//     <div>
//     <p>Here are your options</p>
//     <ol>
//     <li>Item One</li>
//     <li>Item two</li>
//     </ol>
//     </div>
//     )
// }


// function getLocation(location)
// {
//   if(location)
//   {
//       return <p>Location : {location}</p>;
//   }
// }
// var user={
//     name:"kunal singh",
//     city:"bangalore",
//     age:46,
//     location:"Chennai"

// }
// var templateTwo=(
//     <div>
//     <h1>{user.name?user.name:"Anonymous"}</h1>
//     <p>City : {user.city}</p>
//    {user.age&&user.age>=18&&<p>Age:{user.age}</p>}
//    <p>{getLocation(user.location)}</p>
   
//     </div>
// )