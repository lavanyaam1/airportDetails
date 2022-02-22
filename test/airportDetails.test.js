const airport = require('../airportDetails');

describe("Airport Details",()=>{
    it("should throw an error if code length is greater than 3",()=>{
        // const airportInfo = airport.airportInfo("AAAA");
        expect(()=>{
            airport.airportInfo("AAAA")
        }).toThrow("Invalid Airport Code");
    });
    it("should return a list of airport name ,city and country ",()=>{
        const airportInfo = airport.airportInfo("AAA");
        expect(airportInfo).toStrictEqual(['Anaa Airport', 'Anaa', 'French Polynesia'])
    })
})