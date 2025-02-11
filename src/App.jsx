import { useLoaderData } from "react-router-dom"
import CoffeeCard from "./components/CoffeeCard";
import { useState } from "react";
import Header from "./components/Header";


function App() {

  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)


  return (
    <div>

      <Header></Header>
      <div className="m-20">


        <h1 className="text-6xl  text-center text-purple-600">
          Hot Hot cold Coffee: {coffees.length}</h1>
        <div className="grid md:grid-cols-2 gap-4 my-20">
          {
            coffees.map(coffee => <CoffeeCard key={coffee._id}
              coffee={coffee}
              coffees={coffees}
              setCoffees={setCoffees}
            ></CoffeeCard>)
          }
        </div>


      </div>
    </div>
  )
}

export default App
