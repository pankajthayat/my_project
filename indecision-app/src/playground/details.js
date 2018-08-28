
class VisibilityToggle extends React.Component
{
    showDetails()
    {
        console.log("showDetails")
        
       return(<h1 key="x">hey here is the details: i am a computer</h1>);
    }
    render()
    {
        return(
            <div>
            <h1>Visibility Toggle</h1>
            <button onClick={this.showDetails}>showDetail</button>
            </div>
        )
    }
}




const vt=<VisibilityToggle></VisibilityToggle>
ReactDOM.render(vt,document.getElementById("app"));





















// console.log("app is running")

// const showDetail=()=>
// {
//     console.log("details");
//     return <p>here is the Details</p>
// }

// const template=(
//     <div>
//     <h1>Visibility Toggle</h1>
//     <button onClick={showDetail}>Show Details</button>
//     </div>
// )


// const appRoot=document.getElementById("app");
// ReactDOM.render(template,appRoot);