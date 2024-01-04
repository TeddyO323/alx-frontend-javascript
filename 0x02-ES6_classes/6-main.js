import SkyHighBuilding from './6-sky_high.js';

// Create an instance of SkyHighBuilding
const building = new SkyHighBuilding(140, 60);

// Output the values and evacuation warning message
console.log(building.sqft); // Should print the sqft value
console.log(building.floors); // Should print the floors value
console.log(building.evacuationWarningMessage()); // Should print the evacuation warning message