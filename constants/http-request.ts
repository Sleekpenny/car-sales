import { cardProps } from "@/interfaces";

export interface filterProps {
    year: number;
    limit: number;
    model:string;
    fuel:string;
    manufacturer: string
} 

export const fetchCars = async ({model, year, limit, fuel, manufacturer}: filterProps) => {
   const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=${model}&year=${year}&limit=${limit}&fuel_type=${fuel}&make=${manufacturer}`
    const headers = {
		'x-rapidapi-key': '6b2c51e2d2msh3068b1a218f9b34p186f2ejsn3f94424c16fe',
		'x-rapidapi-host': 'cars-by-api-ninjas.p.rapidapi.com'
	}

    try{        
        const response = await fetch(url, {headers: headers});
        const result = await response.json();
        
        return result;
    } catch(error) {
        console.log(error)
    }
};

export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age

    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;

    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

    return rentalRatePerDay.toFixed(0);
}

export const generateCarImageUrl = (car: cardProps, angle?: string) => {
    const url = new URL('https://cdn.imagin.studio/getImage');
    const { make, year, model } = car;

    url.searchParams.append('customer', 'hrjavascript-mastery');
    url.searchParams.append('make', make.toLowerCase());
    url.searchParams.append('modelFamily', model.split(' ')[0].toLowerCase());
    url.searchParams.append('zoomtype', 'fullscreen');
    url.searchParams.append('modelYear', `${year}`);
    if (angle) {
        url.searchParams.append('angle', angle.padStart(2, '0'));
    }

    return url.toString();
}

export const updateSearchParams = (type:string, value:string) => {
    const searchParams =  new URLSearchParams(window.location.search);
    searchParams.set(type, value);

    const newPathname = `${window.location.pathname}?${searchParams.toString()}`

    return newPathname;
}