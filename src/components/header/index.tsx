import { Link } from 'gatsby'
import './header.styl'

interface Props {
  siteTitle: string
}

export default ({ siteTitle }: Props) => (
  <nav className="header">
    { siteTitle }
    <ul className="header__container">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/example">Examples of usage</Link>
      </li>
      <li>
        <Link to={`/pageWithUrlParams/${Date.now()}`}>Page with url params</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </nav>
)
