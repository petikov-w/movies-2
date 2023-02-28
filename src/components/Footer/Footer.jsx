import styles from "./Footer.module.scss"

function Footer() {
    return (
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Petikov Vladimir
                    <a className="grey-text text-lighten-4 right" href="src/components#!">Repo</a>
                </div>
            </div>
        </footer>
        )
}

export {Footer}