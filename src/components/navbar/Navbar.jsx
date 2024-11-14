import "./navbar.scss"

function Navbar() {
    return (
        <nav>
            <div className="left">
                <a href="/" className="logo">
                    <img src="/logo.png" alt="logo" />
                    <span>Nilexia Estate</span>
                </a>
                <a href="/">Home</a>
                <a href="/">About</a>
                <a href="/">Contact</a>
                <a href="/">Agents</a>
            </div>
            <div className="right">
                <a href="/sign-in">Sign in</a>
                <a href="/sign-up" className="register">Sign up</a>
            </div>
        </nav>
    )
}

export default Navbar;