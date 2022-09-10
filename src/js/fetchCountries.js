export default function fetchCountries(searchQuery) {
    if (searchQuery) {
        return fetch(`https://restcountries.com/v2/name/${searchQuery}`)
            .then(response => {
                if (response.ok) {
                    console.log(response);
                    return response.json();
                } else {
                    Promise.reject(alert('hello'));
                }
            });
    } 
    
}
