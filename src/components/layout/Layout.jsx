import { Outlet } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Header from './Header'
import Footer from './Footer'
import { localBusinessSchema } from '../../lib/schema'

export default function Layout() {
  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema())}
        </script>
      </Helmet>

      <div className="min-h-screen bg-soft-white">
        <Header />
        <main id="main-content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  )
}
