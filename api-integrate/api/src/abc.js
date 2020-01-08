export default function Eample(){
  const name=useFormInput('name');
  const email=useFormInput('emial');

  return (
    <>
    <input {...name}/>
    <input {...email}/>
    </>
  )
}
export default function userFormInput(defaultValue:string){
  const [value,setValue]=useState(defaultValue);
  function changeValue(e){
    setValue(e.target.value)
  };
  return {
    value,
    onChange:changeValue
  }
}

class Data extends React.Component{
  constructor(props){
    super(props);
    this.state={item:null};
    this.setData=this.setData.bind(this);
  }
  componentDidMount(){
    API.getData().then((response)=>{this.sateData(response)});
  }
  setData(data){
    this.setData({item:data});
  }
  render(){
    const isLoading =this.state.item === null;
    return {isLoading? "lOADING...":this.state.item};
  }
}

import {useState,useEffect} from 'react';

export function Data(){
  const [data,setData]=useState(nll);

  useEffect(()=>{
    API.getData().tehn((repsonse)=>setData(response));
  },[]);
  const isLoading=data ===null;
  return {
    isLoading ? 'loading...': data
  }
}

export function Eample(){
  const profile=useFect(API.fetchProfile);
  const friends=useFect(API.fectFriends);

  return (
    <>
    {profile.isLoaing? 'Loading...':profile.data}
    {friends.isLoaing? 'loading ...':friends.data}
    </>
  )
}
export function useFect(func,conditions=[]){
  const [data,setData]=useState(null);

  const fetch=()=>{
   func().then(response=>{setData(response)})
  }
  useEffect(fect,conditions);
  const isLoading=(data === null);
  return {data,isLoading};
}
