import Link from 'next/link'

const navToggle = (event) => {
  document.querySelector('.navbar-menu').classList.toggle('is-active')
}

const Header = () => (
  <nav className="navbar has-shadow center">
    <div className="navbar-brand">
      <Link href="/" prefetch={false}>
        <span className="navbar-item logo">
          <img src="/logo.png" />
          <b>Japan BugBounty Forums</b>
        </span>
      </Link>
      <div className="navbar-burger burger" onClick={navToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarContent" className="navbar-menu">
      <div className="navbar-start">
        <Link href="/post" prefetch={false}>
          <a className="navbar-item">
            <i className="fas fa-stream" style={{color:'#67D5B5'}}></i>ブログ記事
          </a>
        </Link>
        <Link href="/agreement" prefetch={false}>
          <a className="navbar-item">
            <i className="fas fa-book" style={{color:'#6a60a9'}}></i>参加規約
          </a>
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <a className="button" href="https://discord.com/invite/XP92Zxz">
            <span className="icon">
              <i className="fas fa-users"></i>
            </span>
            <span>フォーラムに参加する</span>
          </a>
        </div>
      </div>
    </div>
  </nav>
)

export default Header