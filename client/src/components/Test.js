import React, {useState} from 'react'
import axios from 'axios'
export default function Test() {
  const [abname, setAbname] = useState('')
  const ann = localStorage.getItem('token')
  const id = localStorage.getItem('id');
  const url = 'http://localhost:3001/api/users/'+ id;
  console.log(ann);
    axios.get(url,{
      params:{token:ann}
    }).then(
      (response) => {
        console.log(response);
        setAbname(response.data.username);
      }
    );
  return (
    <div>test <br />
      {abname}
    </div>
  )
}
