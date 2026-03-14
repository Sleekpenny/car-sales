
import { CarCard, CustomFilter, Hero, SearchBar, ShowMore } from "@/components";
import { fetchCars, fuels, yearsOfProduction } from "@/constants";
import { cardProps } from "@/interfaces";
import Image from "next/image";

export default async function Home({searchParams}: any) {

  const allCars = await fetchCars({
    model: searchParams.model || '',
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || ''
  });

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;
  
  return (
    <main className="overflow-hidden"> 
        <Hero />

        <div className="mt-12 padding-x padding-y max-width" id="discover">
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
            <p>Explore the cars you might like</p>
          </div>

          <div className="home_filters">
            <SearchBar />

            <div className="home__filter-container">
              <CustomFilter title="fuel" options={fuels} />
              <CustomFilter title="year" options={yearsOfProduction} />
            </div>
          </div>

          {!isDataEmpty ? (

            <section> 
              <div className="home__cars-wrapper">
                {allCars?.map((car: cardProps) => (
                  <CarCard car={car} key={`${car.make}-${car.model}-${car.year}-${car.transmission}-${car.drive}`}/>
                ))}
              </div>

              <ShowMore 
                pageNumber={(Number(searchParams?.limit) || 10) / 10}
                isNext={(allCars?.length || 0) < (Number(searchParams?.limit) || 10)} /> 
            </section>
          ) : (
            <div className="home__error-container">
              <h2 className="text-black text-xl font-bold">Oops, no results</h2>
              <p>{allCars?.message}</p>
            </div>
          )}
        </div>
    </main>
  );
}
