import { Root } from "./routes/Root"
import { MainPage } from "./Components/MainPage/MainPage"
import { ErrorPage } from './Components/ErrorPage/ErrorPage'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { fetchNavigation } from "./features/navigationSlice"
import { fetchColors } from "./features/colorsSlice"
import { ProductPage } from "./Components/ProductPage/ProductPage"
import { FavoritePage } from "./Components/FavoritePage/FavoritePage"
import { CartPage } from "./Components/CartPage/CartPage"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<MainPage />} />
      <Route path='/favorite' element={<FavoritePage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='product/:id' element={<ProductPage />} />
      <Route path='catalog/:gender/:category?' element={<MainPage />} />
      {/* <Route path='men' element={<MainPage gender='men' />} />
      <Route path='kids' element={<MainPage gender='kids' />} />
      <Route path='women/:category' element={<MainPage gender='women' />} />
      <Route path='men/:category' element={<MainPage gender='men' />} />
      <Route path='kids/:category' element={<MainPage gender='kids' />} /> */}
      <Route path='*' element={<ErrorPage />} />
    </Route>
  )
)

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);

  return <RouterProvider router={router}></RouterProvider>;
}