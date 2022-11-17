import NavbarDetail from "../components/NavbarDetail"
import '../styles/DetKegiatanStyle.css'

function DetailKegiatan (){
    return(
        <>
        <NavbarDetail/>
        <div className="container">
            <div className="card mt-4 mb-4">
                <img src="/images/pexels-min-an-1406866.jpg" alt="logo list volunteer" />
                <div className="card-body">
                    <h5 className="card-title">Peduli Lingkungan: Pembuatan taman & Penanaman pohon di kampung Durian Runtuh</h5>
                    <p className="card-text"><small className="text-muted">Alamat Kegiatan:</small></p>
                    <p className="card-text"><i className="fas fa-map-marked-alt"></i> Kampung Durian Runtuh, RT 27 RW 07, Kec. Rakitan, Kab. Pananjung, Johor</p>
                    <p className="card-text"><small className="text-muted">Periode Kegiatan:</small></p>
                    <p className="card-text"><i className="far fa-clock"></i> 3 Bulan</p>
                    <p className="card-style card-text">Rincian Kegiatan: </p>
                    <p className="card-text">Penanaman pohon dilakukan dikampung Durian Runtuh dengan tujuan menciptakan area penghijauan sekitar rumah warga dan sebagai bentuk mencegah pemanasan global. Kegiatan kami berkerjasama dengan pihak terkait atau perangkat desa.</p>
                    <p className="card-style card-text" >Kriteria Relawan: </p>
                    <p className="card-text">Bertanggung jawab, Bekerja keras, Mencintai lingkungan, usia diatas 20 tahun.</p>
                </div>
            </div>
        </div>
        

        <nav className="navbar navbar-light">
            <div className="container justify-content-end">
                <input type="button" className="btn" value="Daftar"/>
            </div>
        </nav>
        </>
    )
}

export default DetailKegiatan