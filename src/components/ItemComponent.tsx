import ImageCarousel from "./ImageCarousel";
import ItemDetails from "./ItemDetails";

function ItemComponent() {
  return (
    <main className=" w-9/12 flex justify-between items-center mx-auto h-fit ">
      <div className="w-3/6">
        <ImageCarousel/>
      </div>
      <div className="w-3/6">
        <ItemDetails />
      </div>
    </main>
  );
}

export default ItemComponent;