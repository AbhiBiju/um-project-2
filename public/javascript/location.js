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

// This method adds an event listener to the zip code submit button to call the getCoordinates function when clicked
document.querySelector('.zip-submit').addEventListener('submit', getCoordinates);