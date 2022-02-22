const airports = require("./airport/airports.json")

const isAlpha = str => /^[a-zA-Z]*$/.test(str);
exports.airportInfo = (airportCode) =>{
    if(typeof(airportCode)!='string' || airportCode.length !== 3){
        throw new Error("Invalid Airport Code")
    }
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