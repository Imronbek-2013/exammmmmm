import { useNavigate } from 'react-router-dom'
import { ArrowIcon } from '../components/Icons'

function NotFound() {
  const navigate = useNavigate()

  return (
    <section className="not-found">
      <h1><span>404</span>Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <button className="btn" type="button" onClick={() => navigate('/')}>Back to Home page <ArrowIcon /></button>
    </section>
  )
}

export default NotFound
