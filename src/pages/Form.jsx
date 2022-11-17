import NavbarDetail from "../components/NavbarDetail"
import '../styles/FormStyle.css'

function Form() {
    return(
        <>
        <NavbarDetail/>
        <div className="container">
            <div className="card mt-4 mb-4">
                <form className="card-body" id="form-daftar">
                    <label htmlFor="id-card" className="form-label">Enter your ID Card (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="id-card" required/>

                    <label htmlFor="cv" className="form-label">Enter your CV (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="cv" required/>
                    
                    <label htmlFor="student-card" className="form-label">If you are student, you can enter a student ID Card (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="student-card" required/>

                    <label htmlFor="health-letter" className="form-label">A health leter from a doctor (.pdf)<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Link file" id="health-letter" required/>
                    
                    <label className="form-label">Enter your mobile number and email address to make it easier for the organization to contact you<span className="required">*</span></label>
                    <div className="input-group flex-nowrap">
                        <input type="text" className="form-control" placeholder="+62 xxxx xxxx xx" id="number-phone" required/>
                        <input type="text" className="form-control" placeholder="email" id="email" required/>
                    </div>

                    <label htmlFor="opini" className="form-label">Why are you interested in volunteering for this activity?<span className="required">*</span></label>
                    <input type="text" className="form-control" placeholder="Your answer" id="opini" required/>
                    
                    <button type="submit" className="btn">Send <i className="fas fa-arrow-right"></i></button>
                </form>
            </div>
        </div>
        
        </>
    )
}

export default Form