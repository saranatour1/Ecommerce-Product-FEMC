import ImageCarousel from "./ImageCarousel";
import ItemDetails from "./ItemDetails";

function ItemComponent() {
  return (
    <main className=" w-9/12 flex justify-between items-center mx-auto my-4 max-sm:flex-col  ">
      <div className="flex-1 h-1/2">
        <ImageCarousel/>
      </div>
      <div className="flex-1 lg:w-10/12 xl:w-10/12 sm:w-8/12 h-1/2">
        <ItemDetails />
      </div>
    </main>
  );
}

export default ItemComponent;