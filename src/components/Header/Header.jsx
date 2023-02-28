import styles from "./Header.module.scss"

function Header() {
    return (
            <nav className="green darken-1">
                <div className="nav-wrapper">
                    <a href="src/components#" className="brand-logo">React Movies</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="src/components#">Repo</a></li>
                    </ul>
                </div>
            </nav>
        )
}

export {Header}