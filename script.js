document.getElementById('darkModeToggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

let allCountries = [];

fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(countries => {
        allCountries = countries;
        displayCountries(countries);
    });

    function displayCountries(countries) {
        const container = document.getElementById('countries');
        container.innerHTML = countries.map(country => `
            <div class='country'>
            <img src='${country.flags.png}' alt='Flag of ${country.name.common}'>
            <h3>${country.name.common}</h3>
            </div>
            `).join('');
        }
    document.getElementById('search').addEventListener('input', ('event') => {
        const searchTerm = event.target.value.toLowerCase();
        const filteredCountries = allCountries.filter(country => 
            country.name.common.toLowerCase().includes(searchTerm)
        );
        displayCountries(filteredCountries);
        });