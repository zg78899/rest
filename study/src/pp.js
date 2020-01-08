import { functionTypeAnnotation } from "@babel/types";

function tick(){
  const element(
    <div>
      <h1>Hello,World</h1>
      <h2>It is {new Date().toLocaleDateString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,document.getElementById('root')
  );
}
setInterval(tick,1000);

function Clock(props){
  return (
    <div>
      <h1>Hello,world</h1>
      <h2>It is {props.date.toLocaleDateString()}</h2>
    </div>
  );
}
function tick(){
 ReactDOM.render(
   <Clock date={new Date()}/>,document.getElementById('root');
 );
}
setInterval(tick,1000);

class Clock extends React.Component{
 constructor(props){
   super(state);
   this.state={date:new Date()};
 }
 componentDIdMount(){//라이프 사이크 훅,DOM이 렌더링한 이후에 동작함
  this.timerId=setInterval(()=>this.tick(),1000);

 }
 componentWillMount(){

 }
 componentWillUnmount(){
   clearInterval(this.timerId);
 }
 tick(){
   this.setState({
     date: new Date()
   })
 }
  render(){
    return(
      <div>
        <h1>Hello world</h1>
        <h2>It is {this.state.date.toLocaleDateString()}</h2>
      </div>
    )
  }
}

ReactDOM.render(<Clock/>,document.getElementById('root'));


function FormattedDate(props){
  return (
    <h2>hello {props.date.toLocaleDateString()}</h2>
    
  )

}
class Clock extends React.Component{
  constructor(props){
    super(state);
    this.state={
      date:new Date()
    }
  }
  componentDidMount(){
    this.timerId=setInterval(()=>this.tick(),1000);
  }
  tick(){
    this.setState({
      date: new Date()
    })
  }
  redner(){
    return (
      <div>
        <h1>Hello world</h1>
        <FormattedDate date={this.state.date}/>
      </div>
    )
  }
}
function App(){
  return (
    <Clock/>
    <Clock/>
    <Clock/>
  );
}

ReactDOM.redner(<App/>,document.getElementById('root'));