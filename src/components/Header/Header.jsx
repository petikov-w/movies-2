import styles from "./Header.module.scss"
import Input from "../UI/Input/Input"

function Header() {
    const styleMain =[styles.flexH].join(' ');

    return (
            // <nav className="green darken-1">
            // <nav>
                <div className={styleMain}>
                    <a href="src/components#" className="brand-logo">React Movies</a>
                    <Input />
                    {/*<ul id="nav-mobile" className="right hide-on-med-and-down">*/}
                    {/*    <li><a href="src/components#">Repo</a></li>*/}
                    {/*</ul>*/}
                </div>
            // </nav>
        )
}

export {Header}