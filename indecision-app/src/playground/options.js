console.log("App is running")

var app={
    title:"Indecion app",
    subtitle:"put your life in the hands of a computer",
    options:[]
};

const onFormSubmit=(e)=>
{
e.preventDefault();
const option=e.target.elements.option.value;
if(option){
    app.options.push(option);
    e.target.elements.option.value='';
    render();
}
}

const removeAll=()=>{
app.options.length=0;
render();
};

const appRoot=document.getElementById("app");

const numbers=[50,101,1000];

const render=()=>
{
    var template=(
        <div>
        <h1>App Details</h1>
        <p>Name : {app.title}</p>
        {app.subtitle&&<p>{"Subtitle: "+app.subtitle}</p>}
       <p>{app.options.length}</p>
       <button onClick={removeAll}>RemoveAll</button>
      
      {
    //      numbers.map((number)=>
    //      {
    //          return <p key ={number}>Number : {number}</p>
    //      })
      }
       <ol>
       {
       app.options.map((x)=>
       {
           return <li key ={x}>{x}</li>;
       })
    }
       </ol>
        <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button >Add Option</button>
        </form>
        </div>
    )
    ReactDOM.render(template,appRoot);
}
render();