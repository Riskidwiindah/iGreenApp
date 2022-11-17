import './NavStyle.css'

function Navbar() {
    return(
        <section id="hero">
            <nav className="navbar navbar-expand-lg navbar-light position-fixed w-100">
                <div className="container">
                    <a className="navbar-brand" href="#hero">
                        <img src="/images/logo.png" alt="logo iGreen" width="100" className="d-inline-block "/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto mb-6 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Relawan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kegiatan</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About Us</a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><i className="fa-regular fa-bell"></i></a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link"><i className="fa-regular fa-circle-user"></i></a>
                            </li>
                        </ul> 
                    </div>
                </div>
            </nav>
    </section>
    )
}

export default Navbar