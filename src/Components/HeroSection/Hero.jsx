import { Banner } from "./BannerAndCategory/Banner";
import CategoryList from "./BannerAndCategory/CategoryList";

export default function Hero() {
  return (
    <div className="flex  my-10 ">
      {/* <div className="md:lg:w-1/3 hidden lg:block">
        <CategoryList />
      </div> */}
      <Banner />
    </div>
  );
}
