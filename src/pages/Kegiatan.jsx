import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import '../styles/KegiatanStyle.css'

function Kegiatan() {
    return(
        <>
        <Navbar/>
        <br />
        <div className="container">
            <div className="row row-cols-1 row-cols-md-4 g-4 mt-5">
                <div className="col">
                    <div className="card">
                        <img src="/images/pexels-min-an-1406866.jpg" alt="list foto 1" className="card-img-top"/>
                        <a href="#" className="btn badge bg-warning">being processed</a>
                        <div className="card-body">
                            <h5 className="card-title">Penanaman Pohon Jati di Kampung Durian Runtuh</h5>
                            <p className="card-text"><i className="far fa-clock"></i> 2 minggu</p>
                            <button  className="btn">Go Detail <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/pexels-min-an-1406866.jpg" alt="list foto 1" className="card-img-top"/>
                        <a href="#" className="btn badge bg-warning">being processed</a>
                        <div className="card-body">
                            <h5 className="card-title">Penanaman Pohon Jati di Kampung Durian Runtuh</h5>
                            <p className="card-text"><i className="far fa-clock"></i> 2 minggu</p>
                            <button  className="btn">Go Detail <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/pexels-min-an-1406866.jpg" alt="list foto 1" className="card-img-top" />
                        <a href="#" className="btn badge bg-warning">being processed</a>
                        <div className="card-body">
                            <h5 className="card-title">Penanaman Pohon Jati di Kampung Durian Runtuh</h5>
                            <p className="card-text"><i className="far fa-clock"></i> 2 minggu</p>
                            <button  className="btn">Go Detail <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="/images/pexels-min-an-1406866.jpg" alt="list foto 1" className="card-img-top" />
                        <a href="#" className="btn badge bg-warning">being processed</a>
                        <div className="card-body">
                            <h5 className="card-title">Penanaman Pohon Jati di Kampung Durian Runtuh</h5>
                            <p className="card-text"><i className="far fa-clock"></i> 2 minggu</p>
                            <button  className="btn">Go Detail <i className="fas fa-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
    )
}

export default Kegiatan