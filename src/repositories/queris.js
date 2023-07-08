function addRowLockOnFlights(flightID)
{
    return `SELECT * from Flights WHERE Flights.id = ${flightID} FOR UPDATE`
}

module.exports = {
    addRowLockOnFlights,
}