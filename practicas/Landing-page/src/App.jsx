import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Card from "./components/Card";
function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="h-[90vh] flex gap-8 p-8 pt-0">
        <Sidebar />
        <div className="flex-1 h-full overflow-y-scroll">
          {/* Portada */}
          <div className="rounded-2xl mb-4">
            <img
              src="src/img/wallhaven-3z2gwd.jpg"
              className="w-full h-[500px] object-cover object-right md:object-top rounded-2xl"
            />
          </div>
          <div className="flex md:grid md:grid-cols-2 xl:flex items-center justify-around lg:justify-between flex-wrap gap-8">
           
            <Card
              img="https://i.pinimg.com/564x/af/bf/cf/afbfcfcaf49486a63eafbd6e845beccf.jpg"
              title="Hogwarts Legacy"
              category="PC"
              price="$80"
            />
            <Card
              img="https://staticctf.akamaized.net/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/6fJyRdi8O9VwIQGonGNFai/8ac090fe69e7dd2bc9ac8fc213a25927/ac-4-black-flag-heroBanner.jpg"
              title="Assassin's Creed 4"
              category="PC-Xbox"
              price="$70"
            />
            <Card
              img="https://i.pinimg.com/564x/2d/d7/bb/2dd7bb0533e2b9c363160a38d9527039.jpg"
              title="Resident evil 4"
              category="Xbox"
              price="$25"
            />
            <Card
              img="https://i.pinimg.com/564x/1b/6d/e2/1b6de21da1b0b769b5ece63c412f7471.jpg"
              title="call of duty"
              category="PS4"
              price="$20"
            />
             <Card
              img="https://pbs.twimg.com/media/FJ-e00rUYAQzxzJ?format=jpg&name=900x900"
              title="HALO ORIGINAL"
              category="PS5"
              price="$60"
            />
            <Card
              img="https://e00-elmundo.uecdn.es/assets/multimedia/imagenes/2021/06/23/16244426663318.jpg"
              title="VALORANT"
              category="PC"
              price="$70"
            />
            <Card
              img="https://i.pinimg.com/564x/4a/33/8f/4a338f865a23edd2139205ad62500606.jpg"
              title="Alice Radness Returns"
              category="PS5"
              price="$60"
            />
            <Card
              img="https://i.pinimg.com/236x/a3/10/9d/a3109dfb0e1ad44826dd96d13f17aa58.jpg"
              title="The Last of US"
              category="PS4"
              price="$60"
            />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
