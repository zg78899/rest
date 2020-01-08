const object={
  a:{
    x:1,
    y:2,
    x:3
  },
  b:1,
  c:[1,2,3,4]

}
(left,right) => left.a ===right.a && left.b===right.b && left.c === right.c

function withsSomething(WrappedComponent){
  return (props)=>(
    <WrappedComponent {...props} something="Something"/>
  )
}
const MyComponent=({something})=>{
  return <div>{somehting}</div>
}
const EnhancedMyComponent =withsSomething(MyComponent);

const App =()=>{
  return <EnhancedMyComponent />
}