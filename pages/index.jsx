import Head from "next/head";

import Header from "../components/Header";
import Banner from "../components/Banner";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, cardsData }) => {
  console.log(cardsData);
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />
      {/* Banner */}
      <Banner />
      {/*  */}
      <main className="px-8 mx-auto sm:px-16 max-w-7xl">
        <section className="pt-6">
          <h2 className="pb-5 text-4xl font-semibold">Airbnb Clone by Ishaan Rajpal 🧑‍💻</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {/* Pull data from server */}
            {exploreData?.map((item) => (
              <SmallCard key={item.img} item={item} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="pb-5 text-4xl font-semibold">Live Anywhere</h2>
          <div className="flex p-3 -ml-3 space-x-3 overflow-scroll scrollbar-hide">
            {cardsData?.map((item) => (
              <MediumCard key={item.img + item.title} item={item} />
            ))}
          </div>
        </section>
      </main>
      <LargeCard
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Airbnb"
        buttonText="Get Inspired"
      ></LargeCard>

      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );
  const cardsData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardsData,
    },
  };
}
