import { useEffect, useState } from "react";
import Product from "../components/Product";


const Home = () => {

  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [posts, setPosts] = useState([]);
  const [fliterButton, setFliterButton] = useState('All');


  async function fetchProductData() {
    setLoading(true);
    try {
      const result = await fetch(API_URL);
      const data = await result.json();
      setPosts(data);
    }
    catch (error) {
      console.log("Data Not Found");
      setPosts([]);
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchProductData();
  }, [])

  const handlerClickFilter = (category) => {
    setFliterButton(category)
  }

  const FilterProducts = fliterButton === 'All' ? posts : posts.filter((post) => post.category === fliterButton);

  
  return (
    <div>
      <section>        
            <div className=" w-full md:w-1/2 mx-auto flex md:justify-around overflow-x-scroll md:overflow-hidden">
              <button onClick={() => handlerClickFilter('All')} className="p-2 m-2 bg-blue-500 text-white rounded">All</button>
              <button onClick={() => handlerClickFilter('electronics')} className="p-2 m-2 bg-blue-500 text-white rounded">Electronics</button>
              <button onClick={() => handlerClickFilter('jewelery')} className="p-2 m-2 bg-blue-500 text-white rounded">Jewelery</button>
              <button onClick={() => handlerClickFilter(`women's clothing`)} className="p-2 m-2 bg-blue-500 text-white rounded">Women</button>
              <button onClick={() => handlerClickFilter(`men's clothing`)} className="p-2 m-2 bg-blue-500 text-white rounded">Men</button>
              
            </div>
      </section>
      
      {
        // loading ? <Spinner />  :
        FilterProducts.length > 0 ?
          (<div className="grid xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto p-5 min-h-[80vh] z-0 md:gap-8">
            {
              FilterProducts.map((post) => (
                <Product key={post.id} post={post} />
              ))
            }
          </div>) :
          <div className="flex justify-center items-center">
            <p>No Data Found</p>
          </div>
      }
    </div>
  );
};

export default Home;


