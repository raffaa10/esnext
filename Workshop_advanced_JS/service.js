const { Trip } = require('./app');

class TripService {
    
    constructor() {
        this.trips = new Set();

        let trip1 =  new Trip('paris', 'Paris', 'img/paris.jpg')
        let trip2 =  new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        let trip3 =  new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        this.trips.add(trip1);
        this.trips.add(trip2);
        this.trips.add(trip3);
    }  
    
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                for (let trip of this.trips) {
                    if (trip.name === tripName) {
                        resolve(trip);
                    }
                }
                    reject(`No trip found with name ${tripName}`)
            }, 2000)
        });
    }
}

const tripServ = new TripService();
tripServ.findByName('Paris').then(tripFound => console.log(tripFound))
    .catch(err => console.log(err));

tripServ.findByName('Montpellier')
    .then(tripFound => console.log(tripFound))
    .catch(err => console.log(err))


class PriceService {
    constructor() {
        
        this.priceMap = new Map();

        this.priceMap.set('paris', 100 );
        this.priceMap.set('rio-de-janeiro', 800);
        
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                const price = this.priceMap.get(tripId);
                if (price) {
                    resolve(price);
                } else {
                    reject(`No price found with id=${tripId}`);
                }

            }, 2000)
        });
    }
}

const priceServ = new PriceService();

priceServ.findPriceByTripId('paris').then(price => console.log(price))
    .catch(err => console.log(err));
priceServ.findPriceByTripId('nantes')
    .then(price => console.log('price = ', price))
    .catch(err => console.log(err));

const tripNmae = 'Montpellier';

// tripService then => priceService then price =>
tripServ.findByName(tripNmae).then(nameFound => priceServ.findPriceByTripId(nameFound.id))
    .then(price => console.log(price))
    .catch(err => console.log(err));