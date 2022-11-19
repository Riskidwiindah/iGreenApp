import '../styles/FormStyle.css'
import {useParams} from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

function Form() {
    const {id} = useParams()
    const [idCard, setIdCard] = useState("")
    const [cv, setCv] = useState("")
    const [studentCard, setStudentCard] = useState("")
    const [healthLetter, setHealthLetter] = useState("")
    const [noHp, setNoHp] = useState("")
    const [emaill, setEmaill] = useState("")
    const [reasonn, setReasonn] = useState("")
    let [data, setData] = useState([])

    useEffect(() => {
        document.title = "Daftar"
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(id);

        const url = axios.get(`https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPendaftaranVolunteer/${id}`)
        .then ((result) => {
            setData = result.data
            console.log(result.data);
        })
        console.log(data);

        const link = axios.post("https://634b803dd90b984a1e3ac3f4.mockapi.io/api/fe9/apiPenyimpananDataPendaftaran", {
            nomor_telepon: noHp,
            link_cv: cv,
            link_studentCard: studentCard,
            link_HealthLetter: healthLetter,
            email: emaill,
            reason: reasonn,
            link_IDCard: idCard,
            status: "being processed",
            name_event: data.title,
            periode_event: data.periode,
            gambar_event: data.gambar,
            detail_aktivitas: data.detail_activities,
            address: data.address,
            id_event: data.id
        })
        .then(result => {
            console.log(result.data);
        })
    }

    return(
        <>
        <nav className="navbar navbar-light">
            <div className="container">
                <a href="/list-relawan" className="navbar-brand mb-0 h1"><i className="fas fa-arrow-left"></i> Back</a>
            </div>
        </nav>

        <div className="form-daftar container">
            <div className="form-card card mt-4 mb-4">
                <form className="form-card-body card-body" id="form-daftar" onSubmit={handleSubmit}>
                    <label htmlFor="id-card" className="form-label">Enter your ID Card (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="id-card" required value={idCard} onChange={(e) => setIdCard(e.target.value)}/>

                    <label htmlFor="cv" className="form-label">Enter your CV (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="cv" required value={cv} onChange={(e) => setCv(e.target.value)}/>
                    
                    <label htmlFor="student-card" className="form-label">If you are student, you can enter a student ID Card (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="student-card" required value={studentCard} onChange={(e) => setStudentCard(e.target.value)}/>

                    <label htmlFor="health-letter" className="form-label">A health leter from a doctor (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="health-letter" required value={healthLetter} onChange={(e) => setHealthLetter(e.target.value)}/>
                    
                    <label className="form-label">Enter your mobile number and email address to make it easier for the organization to contact you<span className="required">*</span></label>
                    <div className="form-group input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="+62 xxxx xxxx xx" id="number-phone" required value={noHp} onChange={(e) => setNoHp(e.target.value)}/>
                        <input type="text" className="form-control" placeholder="email" id="email" required value={emaill} onChange={(e) => setEmaill(e.target.value)}/>
                    </div>

                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Why are you interested in volunteering for this activity?<span className="required">*</span></label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" required value={reasonn} onChange={(e) => setReasonn(e.target.value)}></textarea>
                    
                    <button type="submit" className="btn">Send <i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Form