class TripService extends Trip {
    
    constructor() {
        let trips = new Set();

        let trip1 =  new Trip('paris', 'Paris', 'img/paris.jpg')
        let trip2 =  new Trip('nantes', 'Nantes', 'img/nantes.jpg')
        let trip3 =  new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg')

        trips.add(trip1);
        trips.add(trip2);
        trips.add(trip3);
    }  
    
    findByName(tripName) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
            // ici l'exécution du code est asynchrone
            // TODO utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        });
    }
}

class PriceService {
    constructor() {
        
        let priceMap = new Map();

        priceMap.set('Paris', 100 );
        priceMap.set('Rio-de-Janeiro', 800);
        
    }

    findPriceByTripId(tripId) {
        return new Promise((resolve, reject) => {
            setTimeout( () => {
                // ici l'exécution du code est asynchrone
                // TODO utiliser resolve et reject en fonction du résultat de la recherche
            }, 2000)
        });
    }
}

  