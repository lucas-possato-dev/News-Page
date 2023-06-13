import Popular from "../popular/Popular";
import "./styles.css";
const Home = () => {
  return (
    <main>
      <div className="container">
        <section className="mainContent">
          <Popular />
        </section>
        <section className="sideContent"></section>
      </div>
    </main>
  );
};

export default Home;
