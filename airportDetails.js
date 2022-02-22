const airports = require("./airport/airports.json")
exports.airportInfo = (airportCode) =>{
    let airportDetails =[];
    airports.map(airport =>{
        if(airport.code === airportCode){
            airportDetails.push(airport.name)
            airportDetails.push(airport.city)
            airportDetails.push(airport.country)
        }
    })
    return airportDetails;
};

// console.log(module)