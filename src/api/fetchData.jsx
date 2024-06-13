import React from 'react';

export default async function fetchData() {

     const response = await fetch('https://api.fda.gov/drug/ndc.json?limit=20');
     const data = await response.json();
     for (let i = 0; i < data.results.length; i++) {
           data.results[i].id = i;
           // verifica tamanho muito grande no generic_name
               if (data.results[i].generic_name.length > 50) {
                    data.results[i].generic_name = data.results[i].generic_name.substring(0, 50);
               }
      }
     return data.results;
}

 
