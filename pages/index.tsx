import type { NextPage } from 'next'
import Head from 'next/head'

import Header from "../components/Header"
import Banner from "../components/Banner"
import SmallCard from "../components/SmallCard"
import MediumCard from "../components/MediumCard"

const Home: NextPage = ({exploreData,cardsData}) => {
  console.log(cardsData)
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
          <h2 className="pb-5 text-4xl font-semibold">Explore Nearby</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {/* Pull data from server */}
              {exploreData?.map(item => (
                <SmallCard key={item.img} item={item} />
              ))}
          </div>
        </section>
      

      <section>
        <h2 className="pb-5 text-4xl font-semibold">
          Live Anywhere
        </h2>
        <div className="flex space-x-3 overflow-scroll">
        {cardsData?.map(item => (
          <MediumCard key={item.img + item.title} item={item} />
        ))}
        </div>
      </section>
      </main>

    </div>
  )
}

export default Home

export async function getStaticProps() {
    const exploreData = await fetch("https://links.papareact.com/pyp").then(
      (res) => res.json(),
    )
    const cardsData = await fetch("https://links.papareact.com/zp1").then((res) => res.json())
    
    return {
      props: {
        exploreData,
        cardsData
      }
    }
}
