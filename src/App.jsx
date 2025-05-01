import "./App.scss";
import Header from "./components/Header/Header";
import ItemCard from "./components/ItemCard/ItemCard";

export default function App() {
  return (
    <>
      <Header />
      <div className="itemcard">
        <ItemCard />
      </div>
    </>
  );
}
