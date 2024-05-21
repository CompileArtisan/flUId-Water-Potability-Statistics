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
  const scrollPosition = document.documentElement.scrollTop;

  if (scrollPosition > 0) {
    randomlol.style.left = '200px';
    randomlol.style.right = '200px';
  } else {
    randomlol.style.left = '400px';
    randomlol.style.right = '400px';
  }
}

const waterTreatmentProcesses = [
  {
      listTitle1: "Filtration is a process that removes particles from water by passing it through a filter medium. The filter medium can be made from various materials such as sand, gravel, and activated carbon. The primary purpose of filtration is to remove suspended solids, bacteria, viruses, and other impurities to produce clean and safe drinking water. Filtration can be done using different methods, including slow sand filters, rapid sand filters, and membrane filtration techniques like reverse osmosis and ultrafiltration."
  },
  {
      listTitle2: "Coagulation and flocculation are processes used to remove suspended particles from water. During coagulation, chemicals known as coagulants (such as aluminum sulfate or ferric chloride) are added to the water, causing small particles to clump together into larger particles called flocs. Flocculation follows coagulation and involves gentle mixing to encourage the formation of larger flocs, which can then be more easily separated from the water in subsequent treatment steps like sedimentation or filtration."
  },
  {
      listTitle3: "Sedimentation is a process that allows flocs formed during coagulation and flocculation to settle out of the water due to gravity. This process typically takes place in sedimentation basins or clarifiers, where the water is allowed to remain undisturbed for a period, allowing heavier particles to settle to the bottom. The settled particles, known as sludge, are then removed from the bottom of the basin, and the clarified water is moved on to further treatment stages such as filtration."
  },
  {
      listTitle4: "Disinfection is a crucial process in water treatment that aims to kill or deactivate harmful microorganisms, including bacteria, viruses, and protozoa. Common disinfection methods include the use of chlorine or chloramine, ozone, and ultraviolet (UV) light. Chlorine is one of the most widely used disinfectants because of its effectiveness and residual disinfectant capability, ensuring water remains safe as it travels through distribution systems. UV disinfection involves exposing water to UV light, which disrupts the DNA of microorganisms, rendering them harmless."
  },
  {
      listTitle5: "Desalination is the process of removing salt and other minerals from seawater or brackish water to produce fresh, potable water. The most common desalination methods are reverse osmosis (RO) and distillation. Reverse osmosis uses a semi-permeable membrane to separate salts from water molecules, while distillation involves heating water to create steam and then condensing it back into liquid form, leaving the salts behind. Desalination is especially important in arid regions and areas with limited freshwater resources."
  },
  {
      listTitle6: "Activated carbon is a highly porous material used in water treatment to remove organic compounds, chlorine, and other contaminants through adsorption. The high surface area of activated carbon allows it to effectively trap and hold impurities, improving the taste, odor, and safety of the water. It is commonly used in both granular and powdered forms in various water treatment applications, including point-of-use filters, large-scale municipal water treatment plants, and industrial processes."
  }
];

window.onload = function() {
  let listTitles = document.getElementsByClassName('listTitle');
  let descriptionsContainer = document.getElementById('descriptions');

  for (let i = 0; i < listTitles.length; i++) {
    listTitles[i].addEventListener('mouseover', function() {
      // Find the corresponding description in the waterTreatmentProcesses array
      let descriptionObject = waterTreatmentProcesses.find(process => process[this.id]);
      if (descriptionObject) {
        descriptionsContainer.innerHTML = descriptionObject[this.id];
      }
    });
  }
}