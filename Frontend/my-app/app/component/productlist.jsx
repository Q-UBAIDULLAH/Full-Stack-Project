import DesktopProductCard from './desktopProductCard'
import ProductListPage from './productListpage'
import Footer from './footer'
function ProductList(){
    return(<>
     <ProductListPage></ProductListPage> 
         <Footer></Footer>
    <DesktopProductCard></DesktopProductCard>
    </>)
}
export default ProductList