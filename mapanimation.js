const walkHere = [
  [-83.03941619945704, 42.33495121584172],
  [-83.03956210460252, 42.335128255969906],
  [-83.0403824864924, 42.33477321770735],
  [-83.0419641870808, 42.33408795961807],
  [-83.0431093011076, 42.333591413295636],
  [-83.04363738935704, 42.33440069629177],
  [-83.04409641905306, 42.33508460855707],
  [-83.04453461724874, 42.33575718754021],
  [-83.04459391778387, 42.335594656735175],
  [-83.0448283816679, 42.33589755882091],
  [-83.04575199414629, 42.33732296084387],
  [-83.04667302946565, 42.33871741814768],
  [-83.04683177097833, 42.33887634401854],
];
  
mapboxgl.accessToken = 'pk.eyJ1Ijoic3dpbGsiLCJhIjoiY2wycXVyNm12MGl1eDNjcXJoMWkydzZ5cyJ9.1Byua7s0yB4FNlB9fbGQ-g';
  
let map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/satellite-streets-v11',
  center: [-83.0442347948237, 42.33576],
  zoom: 16,
  pitch: 45,
});
  
const marker = new mapboxgl.Marker({
  color: "#9932CC"
})
  .setLngLat([-83.03941619945704, 42.33495121584172])
  .addTo(map);

let counter = 0;

function move() {
  setTimeout(() =>{
    if (counter >= walkHere.length) return;
      marker.setLngLat(walkHere[counter]);
      counter++;
      move();
    }, 1000);
};
  
if (typeof module !== 'undefined') {
    module.exports = { move };
}