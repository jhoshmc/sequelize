import Cards from "../components/cards/Cards";
import NavBar from "../components/nav/NavBar";
import CreatePost from "../components/post/CreatePost";

const Home = () => {
  return (
    <section className="flex flex-col justify-center my-8 bg-orange-600">
      <div className="flex justify-center py-3">
        <CreatePost />
      </div>
      <div>
        <h2>POSTS</h2>
        <span>aqui van a ir todos los post en cascada</span>
      </div>
      <Cards />
    </section>
  );
};

export default Home;
