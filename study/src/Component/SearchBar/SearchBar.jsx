import React from 'react';

const SearchBar =props=>{
  const handleEnter=serach=>e=>{
    if(e.key === 'Enter'){
      serach(e.target.value);
    }
  }
  let input;  
  return(
    <div>
      <input
      ref={ref=>(input=ref)}
      type="serach"
      placeholder="검색어를 입력하세요"
      onKeyPress={handleEnter(props.onSearchVideo)}
      onChange={(e)=>props.onSearchVideo(e.target.value)
      }
      />
      <button onClick={()=>props.onSearchVideo(input.value)}>
        
      </button>

    </div>

  )
}
export default SearchBar; 