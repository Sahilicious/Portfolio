import './index.scss'

const Logo = () => (
  <div className="logo-container" aria-label="Sahil Rohankar, developer">
    <div className="orbit orbit-one" />
    <div className="orbit orbit-two" />
    <div className="brand-card">
      <span className="brand-kicker">DEVELOPER / PUNE</span>
      <span className="brand-monogram">SR</span>
      <span className="brand-caption">Turning ideas into<br />working software.</span>
    </div>
    <span className="orbit-tag tag-python">Python</span>
    <span className="orbit-tag tag-react">React</span>
    <span className="orbit-tag tag-api">REST APIs</span>
  </div>
)

export default Logo
