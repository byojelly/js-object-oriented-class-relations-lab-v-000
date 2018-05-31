//driver has many trip
//passenger has many trips
//trips
//passenger
//driver

let store = {drivers: [], passengers: [], trips: []}
let driverId=0
let passengerId=0
let tripId=0

class Driver{
    constructor(name){
      this.id = ++ driverId
      this.name = name
      store.drivers.push(this)
    }
    //trips - returns all the trips a driver has taken
    trips(){
        return store.trips.filter(trip => {
                return trip.driverId === this.id
        })
    }
    //passengers - returns all the passengers a driver has taken
    passengers(){
        return this.trips().map(trip => {
          return trip.passenger()
        })
    }
}

class Passenger{
      constructor(name){
          this.id = ++passengerId
          this.name = name
          store.passengers.push(this)
      }

      //trips - returns all the trips a passenger has taken
      trips(){
          return store.trips.filter(trip => {
            return trip.passengerId ===this.id
          })
      }
      //drivers - returns all the drivers a passenger has taken
      drivers(){
          return this.trips().map(trip => {
            return trip.driver()
          })
      }
}

class Trip{
   constructor(driver, passenger){
     this.id = ++ tripId
     this.driverId = driver.id
     this.passengerId= passenger.id
     store.trips.push(this)
   }
   //driver - returns the driver associated with the trip
   driver(){
      return store.drivers.find(driver => {
        return driver.id === this.driverId
      })
   }
   //passenger - returns the passenger associated with the trip
   passenger(){
      return store.passengers.find(passenger => {
        return passenger.id === this.passengerId
      })
   }
}
