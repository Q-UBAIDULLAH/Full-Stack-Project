import BlackNavbar from './component/blackNavbar'
import LightNavbar from './component/lightNavbar'
import Hero from './component/hero'
import DesktopShopCard from './component/dektopShopCard'
import DesktopProductCard from './component/desktopProductCard'
import Hero2 from './component/hero2'
export default function Home() {
  return (
    <main>
      {/* <div className=''>
 <Image
       src={hero}
                 
                    alt={`Slide ${1}`}
                  className="object-contain w-96"
                />
      </div> */}
       
<BlackNavbar></BlackNavbar>
<LightNavbar></LightNavbar>
<Hero></Hero>
<DesktopShopCard></DesktopShopCard>
<DesktopProductCard></DesktopProductCard>
<Hero2></Hero2>



    </main>
  );
}
