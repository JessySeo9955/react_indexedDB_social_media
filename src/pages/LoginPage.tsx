
export default function LoginPage() {
    return (
        <div
            className='container d-flex flex-column flex-lg-row justify-content-evenly mt-5 pt-d'>
            <div className="text-center text-lg-start mt-lg-5 pt-lg-5">
                <h1 className="text-primary fw-bold fs-0">Flexbook</h1>
                <p className="w-75 mx-auto mx-lg-0 fw-4">Flexbook helps you connect and share with the people in your
                    life.</p>
            </div>
            <div style={{maxWidth: "28rem", width: "100%"}}>
                <div className="bg-white shadow rounded p-3 input-group-lg">
                    <input type="email" className="form-control my-3" placeholder="Email address or phone number"/>
                    <input type="password" className="form-control my-3" placeholder="password"/>
                    <a href="#">
                        <button className="btn btn-primary w-100 my-3">Log In</button>
                    </a>
                    <a href="#" className="text-decoration-none text-center">
                        <p>forgotten password</p>
                    </a>
                    <hr/>
                    <div className="text-center my-4">
                        <button className="btn btn-success btn-lg">Create New Account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
