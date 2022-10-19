import { Routes, Route } from 'react-router-dom'
import { Homepage } from './pages/Homepage/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />}></Route>
    </Routes>
  )
}
