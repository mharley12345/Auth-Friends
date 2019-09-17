import {React,useState,useEffect} from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/axiosWithAuth';


  const FriendsList = () =>{
  const[name , setName] = useState('')
  const[id, setId] = useState('')
  const[email, setEmail] = useState('')


  const getData = () => {
     axiosWithAuth()
      .get('/friends')
      .then(res => {
       res.data.map(friend =>{
         return setName(res.data.name),  setId(res.data.id), setEmail(res.data.email)
       })
         
       
      })
  
      .catch(err => console.log(err));
  };

  


  

    return(

          <div className='friends'>
              <div>Name :{name}</div>
              <div>email:{email}</div>
               
      </div>
    )
    }
    

export default FriendsList;
