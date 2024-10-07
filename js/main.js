  // Function to extract the country name from the URL path
  function getCountryFromURL() {
    const path = window.location.pathname;  // Gets the path part of the URL (e.g., /country_name)
    const parts = path.split('/');          // Split by '/'
    const country = parts[1];               // Assuming the country name is the first part after the domain
    return country ? country.toUpperCase() : null;  // Return country code in uppercase
  }

  // Function to update the <a> link and the currency based on the country
  function updateLinkAndCurrencyBasedOnURLCountry() {
    const country = getCountryFromURL();

    // Define URL mappings based on the country name from the URL
    const urlMappings = {
      'US': 'https://quickloadexpress.com/c?p=3128&o=1944&s2=taboola&s6=Lorax Pro - Healthy-Non-slip Barefoot Shoes&s7=https://hike-footwearz.com/img/main-image.webp',
      'IN': 'https://quickloadexpress.com/c?p=3128&o=1944&s2=taboola&s6=Lorax Pro - Healthy-Non-slip Barefoot Shoes&s7=https://hike-footwearz.com/img/main-image.webp',
      'EU': 'https://quickloadexpress.com/c?p=3128&o=1944&s2=taboola&s6=Lorax Pro - Healthy-Non-slip Barefoot Shoes&s7=https://hike-footwearz.com/img/main-image.webp',
      'default': 'https://quickloadexpress.com/c?p=3128&o=1944&s2=taboola&s6=Lorax Pro - Healthy-Non-slip Barefoot Shoes&s7=https://hike-footwearz.com/img/main-image.webp'
    };

    // Define currency mappings based on the country
    const currencyMappings = {
      'US': '&#36;',   // HTML code for USD ($)
      'IN': '&#8377;', // HTML code for Indian Rupee (₹)
      'EU': '&#8364;', // HTML code for Euro (€)
      'default': '&#36;' // Default to USD ($)
    };

    // Update the href attribute of the <a> tag (link + button)
    const linkElement = document.getElementById('myDynamicLinkButton');
    if (country && urlMappings[country]) {
      linkElement.href = urlMappings[country];
    } else {
      linkElement.href = urlMappings['default'];
    }

    // Update the currency symbol based on the country
    const currencyElement = document.getElementById('currencySymbol');
    if (country && currencyMappings[country]) {
      currencyElement.innerText = currencyMappings[country];
    } else {
      currencyElement.innerText = currencyMappings['default'];
    }
  }

  // Call the function to update the link and currency when the page loads
  window.onload = updateLinkAndCurrencyBasedOnURLCountry;
