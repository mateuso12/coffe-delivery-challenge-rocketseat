import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout/index'
import { Homepage } from './pages/Homepage/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Homepage />} />
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
