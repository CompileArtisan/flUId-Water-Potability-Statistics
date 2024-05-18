const waterStats = [
  {
    place: "India",
    stats: {
      averageRainfall: "3,700 mm/year (Highly variable)",
      waterQuality: "60 (Moderate)",
      fluorideLevel: "0.5 - 1.5 ppm (Depending on region)",
      percentageTreatedWater: "81% (Urban areas)", // Source: https://www.unicef.org/india/topics/water-sanitation-and-hygiene
    },
  },
  {
    place: "California, USA",
    stats: {
      averageRainfall: "34 inches/year (Highly variable)",
      waterQuality: "80 (Very Good)",
      waterHardness: "Varies by location (Generally Moderately Hard)",
      agriculturalWaterUse: "80% of total water use", // Source: https://cwc.ca.gov/-/media/CWC-Website/Files/Documents/2019/06_June/June2019_Item_12_Attach_2_PPICFactSheets.pdf
    },
  },
  {
    place: "Nile River Basin (Africa)",
    stats: {
      averageRainfall: "28 inches/year (Varies greatly)",
      waterQuality: "65 (Moderate)",
      turbidity: "High during wet season (due to sediment)",
      riverDischarge: "2,830 cubic kilometers/year", // Source: https://nilebasin.org/sites/default/files/2023-09/State%2520of%2520Basin%2520Report%25202021_0.pdf
    },
  },
  {
    place: "São Paulo, Brazil",
    stats: {
      averageRainfall: "1,400 mm/year", // Source: https://weatherspark.com/y/30268/Average-Weather-in-S%C3%A3o-Paulo-Brazil-Year-Round
      waterSecurity: "Moderate (Risk of future shortages)",  // Source: https://www.wri.org/data/water-stress-country
      waterTreatment: "Mostly treated with chlorine and flocculation", // Source: https://www.scielo.br/j/ambiagua/a/SvJLKwxvwbKRCLNpKZt86Ls/?lang=en
    },
  },
  {
    place: "England, UK",
    stats: {
      averageRainfall: "900 mm/year", // Source: https://www.metoffice.gov.uk/research/climate/maps-and-data/uk-climate-averages
      waterStress: "Low",
      waterMetering: "Nearly all households have water meters", // Source: https://www.water.org.uk/
    },
  },
  {
    place: "Beijing, China",
    stats: {
      averageRainfall: "500 mm/year", // Source: https://weatherspark.com/y/131055/Average-Weather-in-Beijing-China-Year-Round
      waterPollution: "Moderate to high (due to industrial activity)", // Source: https://www.worldwildlife.org/blog-posts/building-freshwater-resilience-in-china-and-beyond
      desalinationPlants: "Increasing use for coastal water supply", // Source: https://thediplomat.com/countries/china/
    },
  },
];
let currentIndex = 0;

function updateStatistics() {
  const place = waterStats[currentIndex].place;
  const stats = waterStats[currentIndex].stats;

  let statsHTML = '';
  for (let key in stats) {
    statsHTML += `
      <tr>
        <td>${key}:</td>
        <td>${stats[key]}</td>
      </tr>
    `;
  }

  document.getElementById('content').innerHTML = `
    <tr>
      <td>Place:</td>
      <td>${place}</td>
    </tr>
    ${statsHTML}
  `;
}

next.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % waterStats.length;
  updateStatistics();
});

prev.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + waterStats.length) % waterStats.length;
  updateStatistics();
});

updateStatistics();

window.addEventListener('scroll', handleScroll);

function handleScroll() {
  const randomlol = document.querySelector('.randomlol');
  const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    randomlol.style.left = '200px';
    randomlol.style.right = '200px';
  } else {
    randomlol.style.left = '400px';
    randomlol.style.right = '400px';
  }
}
