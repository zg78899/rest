import React,{useState} from 'react';

const Search=(props)=> {
  const [searchValue,setSearchValue]=useState('');

  const handelSearchInputChanges=(e)=>{
    setSearchValue(e.target.value);
  };
  const resetInputField=()=>{
    setSearchValue('');
  }
  const callSearchFunciton =(e)=>{
    console.log(e);
    e.preventDefault();
    props.search(searchValue);
    resetInputField();
  }
  console.log(props.search);
  
  
  return (
    <form className="search">
      <input
      value={searchValue}
      onChange={handelSearchInputChanges}
      type="text"
      />
      <input
      onClick={callSearchFunciton} type="submit" value="SEARCH"/>
    </form>
  )

}
export default Search;