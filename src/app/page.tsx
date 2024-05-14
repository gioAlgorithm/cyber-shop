import HeroMain from "./pageComponents/HeroMain";
import HeroGrid from "./pageComponents/HeroGrid";
import Categories from "./pageComponents/Categories";
import Products from "./pageComponents/Products";
import BigSummerSale from "./pageComponents/BigSummerSale";

export default function Home() {
   return (
      <>
         <HeroMain />
         <HeroGrid />
         <Categories />
         <Products />
         <BigSummerSale />
      </>
   );
}
