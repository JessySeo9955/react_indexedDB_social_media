import {useState} from "react";

const MainPage: React.FC = () => {

    const [dropdownDisplay, setDropdownDisplay] = useState<boolean>(false);

    return (
        <div className="bg-white d-flex align-items-center fixed-top shadow"
             style={{minHeight: "56px", zIndex: "5"}}>
            <div className="container-fluid">
                <div className="column align-items-center">
                    {/*search*/}
                    <div className="col d-flex align-items-center">
                        <i className="bi bi-facebook text-primary" style={{fontSize: "3rem"}}></i>


                        <div className="ms-2">
                            {/*desktop*/}
                            <div className="d-none d-lg-block">
                                <div
                                    className="input-group border-0 rounded-pill px-3 bg-light"
                                    style={{minHeight: "40px", minWidth: "230px"}}
                                    onClick={() => setDropdownDisplay(!dropdownDisplay)}
                                    type="button"
                                >
                                    <div className="input-group-prepend ">
                                    <span className="input-group-text border-0 text-muted">
                                        <i className="bi bi-search"></i>
                                    </span>
                                    </div>
                                    <input type="button" className=" text-muted border-0 bg-light"
                                           placeholder="Search Flexbook"/>
                                </div>
                            </div>

                            {/*mobile*/}
                            <div className="d-lg-none">
                                <div
                                    className="input-group border-0"
                                    onClick={() => setDropdownDisplay(!dropdownDisplay)}
                                    style={{minHeight: "40px"}}
                                    type="button"
                                >
                                <span className="input-group-prepend"  >
                                    <div  className="input-group-text border-0 text-muted rounded-circle bg-light">
                                        <i className="bi bi-search"></i>
                                    </div>
                                </span>

                                </div>

                            </div>

                            {/*dropdown*/}
                            {dropdownDisplay && <ul
                                className="dropdown-menu border-0 shadow p-3 overflow-auto"
                                style={{width: "20rem", maxHeight: "600px", display: "block"}}>
                                <li>
                                    <input
                                        type="text"
                                        className="rounded-pill border-0 bg-light dropdown-item"
                                        placeholder="Search Flexbook"
                                    />
                                </li>
                                <li className="my-4">
                                    <div
                                        className="alert dropdown-item p-1 m-0 d-flex align-items-center justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <img
                                                src="https://picsum.photos/35/35"
                                                alt="avatar"
                                                className="rounded-circle me-2"
                                                style={{ objectFit: "cover" }}
                                            />
                                            <p className="m-0">Lorem ipsum</p>
                                        </div>
                                        <button className="btn-close"></button>
                                    </div>
                                </li>
                            </ul>}

                        </div>

                    </div>
                    {/*navigate*/}
                    <div className="col d-none d-lg-flex justify-content-center">
                    sdfs
                    </div>
                    <div className="col"></div>
                </div>
            </div>

        </div>

    )
}

export default MainPage
