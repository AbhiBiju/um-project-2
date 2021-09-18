// This function uses the google geocode API to convert postal code to coordinates
async function getCoordinates(event) {
    event.preventDefault();

    const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=33773&key=${process.env.GOOGLE_API_KEY}`);

    const convertedZip = await response.json();
    console.log(convertedZip);
    // Need to have lat and lon saved to table related to User
    const latitude = convertedZip.results[0].geometry.location.lat;
    console.log(latitude);
    const longitude = convertedZip.results[0].geometry.location.lng;
    console.log(longitude);

    const city = convertedZip.results[0].formatted_address;
    console.log(city);
    // This separates the city information and puts it in an array
    const cityName = city.split(' ');
    console.log(cityName);
    // This takes out the city and state from the split need to display on page
    const dispCity = cityName[0] + ' ' + cityName[1];
    console.log(dispCity);
}

// This function gets the coordinates based off geolocation confirmed by the user when they click on 'near me' button
async function getLocation(position) {
    if ('geolocation' in navigator) {
        console.log('geolocation available');
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position.coords.latitude);
            const latitude = position.coords.latitude;
            lat.push(latitude);
            console.log(position.coords.longitude);
            const longitude = position.coords.longitude;
            lon.push(longitude);
        });
    } else {
        console.log('geolocation not available');
    }
}


// This method adds an event listener to the zip code submit button to call the getCoordinates function when clicked
document.querySelector('.zip-submit').addEventListener('submit', getCoordinates);
// Need to add a {{#if logedin}} button to the header with an id="near-me"
document.querySelector('#near-me').addEventListener('click', getLocation);