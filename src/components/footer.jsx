function Footer() {
    return (
        <footer className="page-footer green lighten-4">
            <div className="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Petikov Vladimir
                    <a className="dm" href="#">Repo</a>
                </div>
            </div>
        </footer>
        )
}

export {Footer}