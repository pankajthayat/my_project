// const obj={
//     name:"pankaj",
//     age:44,
//     add()
//     {
//         console.log("i am inside add : "+this.age);
//     },
//     sub()
//     {
//        console.log("i am inside sub : "+this.age);
//        this.add()
//     },
//     getName()
//     {
//         return this.name;
//     }

// };

//  obj.sub();
// const getName=obj.getName;
//console.log(getNAme());
//console.log(getName.bind(obj)()); alternative way explore

class Demo
{
    sub()
    {
        console.log("i am inside sub : "+this.name)
        this.add();
    }
    constructor(name,age)
    {
        this.name=name;
        this.age=age;
    }
    add()
    {
        console.log("i am inside add : "+this.name)
    }
   
}

const obj=new Demo("pankaj",55);
obj.add();
obj.sub();





























class IndecisionApp extends React.Component
{
    render()
    {
        return(
<div>
<Header title="Indecision" msg="put your life in the hands of computer"/>
<Action action="What should I do"></Action>
<Options options="Options Component" arr={["Item one","Item Two","Item Three"]}></Options>
<AddOption></AddOption>

</div>
        );
    }
}

class Header extends React.Component
{
    render(){
        return(
            <div>
            <h1>{this.props.title}</h1>
            <h3>{this.props.msg}</h3>
            </div>
        );
    }
}

class Action extends React.Component{
handlePick()
{
    alert("HandlePick")
}
    render(){
        return(
            <div>
            <button onClick={this.handlePick}>{this.props.action}</button>
            </div>
        )
    }
}

class Options extends React.Component{

    removeAll()
    {
        console.log(this.props.arr)
       // alert("removeAll")
        
    }
    render(){
        return(
            <div>
            <button onClick={this.removeAll}>RemoveAll</button>
            <p>{this.props.options}</p>
       {this.props.arr.map((x)=><Option key={x} optionText={x}></Option>)}
            </div>
        )
    }
}
class Option extends React.Component{
    render(){
        return(
<div>
Option : {this.props.optionText}
</div>
        );
    }
}


class AddOption extends React.Component{
    handleOnSubmit(e)
    {
       e.preventDefault();
       const option = e.target.elements.option.value.trim();
       console.log(option)
       if(option)
       {
           alert(option);
       }
    }
    render()
    {
        return(
            <div>
            <form onSubmit={this.handleOnSubmit}>
            <input type="text" name ="option"></input>
            <button>Add</button>
            </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp></IndecisionApp>,document.getElementById("app"));