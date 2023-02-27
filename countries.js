const loadcountires = () => {

    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => showcountires(data))
}


const showcountires = coun =>{

    const country = document.getElementById('country')
    coun.forEach(counts => {

        console.log(counts.name.common)
        const countryDiv = document.createElement('div');
        countryDiv.classList.add('counts');
        countryDiv.innerHTML = `
    <h3> Name : ${counts.name.common} </h3>
    <p> Capital :  ${counts.capital ? counts.capital[0] : 'No capital'}</p> 
    <button onclick="countdetail('${counts.cca2}')">Details</button>`
        ;
        country.appendChild(countryDiv);
        
    });
}


const countdetail = code => {

    const url = `https://restcountries.com/v2/alpha/${code}`;
    
    fetch(url)
    .then(res => res.json())
    .then(data => showcoundetail(data[0])) ;

}

const showcoundetail = country1 =>{
    const detailcontainer = document.getElementById('count-details');
    detailcontainer.innerHTML= `
    
   
    <img src="${country1.flags.png}">
`;
}
loadcountires();