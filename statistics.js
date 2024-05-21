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
      listTitle1: "Filtration is a critical process in water treatment that involves the removal of particles from water by passing it through a filter medium. This medium can be composed of various materials such as sand, gravel, and activated carbon, each with specific properties that aid in the filtration process. The primary purpose of filtration is to eliminate suspended solids, bacteria, viruses, and other impurities, thereby producing clean and safe drinking water. Filtration methods are diverse and include slow sand filters, which rely on biological activity to purify water over extended periods; rapid sand filters, which use sand and sometimes gravel layers to quickly remove contaminants; and advanced membrane filtration techniques like reverse osmosis and ultrafiltration. These membrane technologies are particularly effective at removing dissolved substances and pathogens, making them essential in producing high-quality drinking water and treating wastewater for reuse."
  },
  {
      listTitle2: "Coagulation and flocculation are essential water treatment processes used to remove suspended particles from water, particularly those that are too small to settle out or be filtered directly. During coagulation, chemicals known as coagulants (such as aluminum sulfate or ferric chloride) are introduced into the water. These chemicals neutralize the charges on the particles, allowing them to come together to form larger aggregates known as flocs. The subsequent process, flocculation, involves gentle and controlled mixing that helps these small particles coalesce into larger, more easily settled flocs. This is achieved using various mechanical and hydraulic mixers. The effectiveness of these processes is influenced by several factors, including the type and dose of coagulant, the water’s pH, temperature, and the nature of the suspended particles. Properly executed coagulation and flocculation can significantly enhance the efficiency of subsequent sedimentation and filtration steps, leading to clearer and safer water."
  },
  {
      listTitle3: "Sedimentation, also known as clarification, is a gravity-based process that allows the flocs formed during coagulation and flocculation to settle out of the water. This process typically occurs in sedimentation basins or clarifiers, which are designed to hold the water for a sufficient period, allowing heavier particles to settle to the bottom due to gravity. The design of these basins can vary, but they usually feature inclined plates or tubes to enhance the settling process by increasing the surface area. The particles that settle out of the water form a layer of sludge at the bottom of the basin. This sludge is periodically removed and treated separately, often through thickening and dewatering processes. Sedimentation not only reduces the turbidity of the water but also decreases the load on downstream filtration systems, making the overall treatment process more efficient. Advanced techniques like lamella clarifiers and dissolved air flotation can further improve the sedimentation process, particularly for waters with fine particles or low-density flocs."
  },
  {
      listTitle4: "Disinfection is a crucial and final step in water treatment that aims to eliminate or deactivate harmful microorganisms, including bacteria, viruses, and protozoa, to ensure the water is safe for human consumption. Several disinfection methods are employed, each with its advantages and considerations. Chlorine, one of the most widely used disinfectants, is effective and provides a residual effect, meaning it continues to disinfect as water travels through distribution systems. Chloramine, a combination of chlorine and ammonia, is another option that provides longer-lasting disinfection but requires careful handling to avoid harmful by-products. Ozone disinfection, although highly effective and rapid, does not leave a residual and requires sophisticated equipment and energy. Ultraviolet (UV) disinfection involves exposing water to UV light, which disrupts the DNA of microorganisms, rendering them harmless. This method is effective and leaves no chemical residues, but its efficacy can be affected by water turbidity."
  },
  {
      listTitle5: "Desalination is the process of removing salt and other minerals from seawater or brackish water to produce fresh, potable water. This process is vital in regions where freshwater resources are scarce, such as arid and coastal areas. The two most common desalination methods are reverse osmosis (RO) and distillation. Reverse osmosis uses a semi-permeable membrane to separate salts and impurities from water molecules. Under high pressure, water molecules pass through the membrane, leaving the salts and other contaminants behind. RO systems are highly effective but require significant energy and regular maintenance to manage membrane fouling. Distillation, on the other hand, involves heating water to create steam, which is then condensed back into liquid form, leaving the salts and impurities behind. This method mimics the natural hydrologic cycle but on an industrial scale and can be energy-intensive."
  },
  {
      listTitle6: "Activated carbon is a highly porous material used in water treatment to remove a wide range of organic compounds, chlorine, and other contaminants through a process called adsorption. The high surface area of activated carbon allows it to effectively trap and hold impurities, thereby improving the taste, odor, and safety of the water. Activated carbon can be used in both granular and powdered forms, depending on the specific application. Granular activated carbon (GAC) is commonly used in filtration systems, where it acts as a medium to adsorb contaminants as water flows through it. Powdered activated carbon (PAC) is often added directly to the water in treatment plants for rapid contaminant removal. Activated carbon is particularly effective at removing chlorine and its by-products, volatile organic compounds (VOCs), pesticides, and certain industrial pollutants. Regular regeneration or replacement of activated carbon is necessary to maintain its adsorption capacity and effectiveness."
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