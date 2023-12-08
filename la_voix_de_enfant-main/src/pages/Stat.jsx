import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
export default function Stat() {
        const [data, setData] = useState([]);
      
        useEffect(() => {
          const apiUrl = 'http://127.0.0.1:8000/api/bebes';
          axios.get(apiUrl)
            .then(response => {
              setData(response.data);
            })
            .catch(error => {
              console.error('Error fetching data:', error);
            });
        }, []); 
      
  return (
    <div>
        {data.length}
    </div>
  )
}
