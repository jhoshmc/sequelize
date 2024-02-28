import Cards from "../components/cards/Cards";
import NavBar from "../components/nav/NavBar";

const Home = () => {
  return (
    <section className="flex flex-col justify-center my-8">
      {/* <NavBar /> */}

      <div>
        <h2>POSTS</h2>
        <span>aqui van a ir todos los post en cascada</span>
      </div>
      <Cards />
    </section>
  );
};

export default Home;
