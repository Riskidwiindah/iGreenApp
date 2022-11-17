import './FootStyle.css'

function Footer() {
    return(
        <section className="section-footer mt-5">
            <footer>
                <div className="container">
                    <div className="row row-sub-footer">
                        <div className="col-12 col-md-6 col-lg-4">
                        <div className="wrapper-col-1 mb-5">
                            <img src="/images/logo.png" alt=""/>
                            <div className="wrapper-icon d-flex">
                                <a href="#" className="" id="facebook"><i className="fa-brands fa-facebook fa-xl"></i></a>
                                <a href="#" className="" id="instagram"><i className="fa-brands fa-instagram fa-xl"></i></a>
                                <a href="#" className="" id="whatsapp"><i className="fa-brands fa-whatsapp fa-xl"></i></a>
                            </div>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 ">
                        <div className="wrapper-col-3 mb-5">
                            <h1>iGreen</h1>
                            <a href="#">Home</a>
                            <a href="#">Relawan</a>
                            <a href="#">Kegiatan</a>
                            <a href="#">About Us</a>
                            <a href="#">Bantuan</a>
                        </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4 mb-5">
                        <div className="wrapper-col-4">
                            <h1>Challenge Partner Kami</h1>
                            <img src="/images/asean.png" alt="" className="img-fluid"/>
                        </div>
                        </div>
                    </div>
                    <div className="wrapper-last-footer d-flex justify-content-between">
                        <div className="copyright">@2022 - iGreen - Asean Youth Organization</div>
                    </div>
                </div>
            </footer>
        </section>
    )
}

export default Footer