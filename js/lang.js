var arrLang = {
    'en': {
        //slide1
        'titleone': 'Data Analysis',
    },
    'sp': {
        //slide1
        'titleone': 'Análisis de datos',
    }
};

$(function() {
    let storedLang;
    const api_key = "at_0BdAWoLT79lZbivJddgUAXaIXIWYm";
    fetch(`https://api.ipify.org?format=json`).then((response) => {
        return response.json();
    }).then((json) => {
        const ip = json.ip;
        $.ajax({
            url: "https://geo.ipify.org/api/v1",
            data: {apiKey: api_key, ipAddress: ip},
            success: function(data) {
                console.log(data);
                const country = data.location.country;
                switch (country) {
                  case "IN":
                    storedLang = localStorage.getItem('stored_lang') || 'en';
                    break;
                  case "CA":
                    storedLang = localStorage.getItem('stored_lang') || 'sp';
                    break;
                  default:
                    storedLang = localStorage.getItem('stored_lang') || 'en';
                }
                console.log('Country:', country);
                console.log('Stored language:', storedLang);
                localStorage.setItem('stored_lang', storedLang);
                translateLang(storedLang);
            }
        });
    });

    function translateLang(lang) {
        $('.lang').each(function() {
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });
    }
});
