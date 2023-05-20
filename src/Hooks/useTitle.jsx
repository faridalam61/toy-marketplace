import { useEffect } from 'react'

const useTitle = (title)=> {
  useEffect(()=>{
    document.title = `Little Racers | ${title}`;
  },[title])
}

export default useTitle