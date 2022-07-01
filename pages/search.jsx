import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";

import Header from "../components/Header";
import Footer from "../components/Footer";
import InfoCard from "../components/InfoCard";

const Search = (props) => {
  const router = useRouter();

  console.log(props.searchResults);

  const { endDate, guests, location, startDate } = router.query;

  // console.log(new Date(endDate) - (new Date(startDate)));

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;
  return (
    <div className="h-screen">
      <Header placeholder={`${location} | ${range} | ${guests} guests`} />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs">
            300+ Stays in - {range} - for {guests}{" "}
            {guests > 1 ? "number of guests" : "guest"}
          </p>

          <h1 className="mt-2 mb-6 text-3xl font-semibold">
            Stays in {location}
          </h1>

          <div className="hidden space-x-3 text-gray-800 lg:inline-flex mb-15 whitespace-nowrap">
            <p className="button transiton">Cancellation Flexibility</p>
            <p className="button transiton">Type of Place</p>
            <p className="button transiton">Price</p>
            <p className="button transiton">Rooms And Beds</p>
            <p className="button transiton">More filters</p>
          </div>
          <div className="flex flex-col">
            {props.searchResults?.map((item) => (
              <InfoCard key={item.img + item.location} item={item}></InfoCard>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps(context) {
  const searchResults = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResults,
    },
  };
}
