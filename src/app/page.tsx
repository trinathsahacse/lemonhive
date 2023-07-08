import Image from 'next/image'
import Header from './header'
import Analytic from './analytic'
import Products from './products'

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
        <Header></Header>      
        <Analytic></Analytic>
        <Products></Products>
    </main>
  )
}
