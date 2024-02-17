import { Route, Routes } from "react-router-dom"
import { MainLayout } from "./layout/main-layout"
import { pages } from "./router/main-router"
import { nanoid } from "nanoid"
import { NotFound } from "./pages/not-found"
import { ShopSingle } from "./pages/shop-single/shop-single"
import { CartPage } from "./pages/cart/cart"
import { useScrollToTop } from "./hooks/scrollTop/scroll-top"

function App() {
  useScrollToTop()

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          {pages.map((route) => (
            <Route key={nanoid()} path={route.path} index={route.path ? false : true} element={route.component}/>
          ))}
        <Route path="shop-single/:id" element={<ShopSingle/>} />
          <Route path="*" element={<NotFound/>}/>
          <Route path="/cart" element={<CartPage/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
