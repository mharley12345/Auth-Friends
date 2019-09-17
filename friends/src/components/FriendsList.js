import React,{Component} from 'react';
import moment from 'moment';
import Loader from 'react-loader-spinner';

import { axiosWithAuth } from '../utils/AxiosWithAuth';

class FriendsList extends Component{
    state = {
        friends:[
            {id:'',
             name:'',
            age : '',
        email : ''
    }

        ]
    };
    componentDidMount(){
        this.getData()
    }
    getData = () =>{
        axiosWithAuth()
      .get('/data')
      .then(res=>{
          console.log(res.data)
      })
        .catch(err=>console.log(err))   
     
    }

render(){
    return (
        <div className="friendsList">

        </div>
    )
}
}
export default FriendsList