import {useState} from 'react';

export function useLocalStorage(key,initialValue){
    const [storedValue,setValue]=useState(()=>{
      try{
        const item=window.localStorage.getItem(key);
        return item != null ? JSON.parse(item) : initialValue
   
      }catch(Error){
        return initialValue ;
      }
    });
  
    const setLocalStorage=value=>{
      try{
        window.localStorage.setItem(key,JSON.stringify(value));
        setValue(value)
      }catch(Error){
        console.log(Error)
      }
    }
  
    return [storedValue,setLocalStorage] 
  }