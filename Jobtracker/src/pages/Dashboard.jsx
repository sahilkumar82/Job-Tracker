function Dash() {
    return (
        <>

            <div className="hero">
                <span>Overview</span>
                <h1>Welcome back, Sahil </h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur
                    adipisicing elit. Laboriosam, natus.
                </p>
            </div>

            <div className="card">
                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Total Applications
                        </div>
                        <div className="card-count">
                            0
                        </div>
                        <div className="card-days">
                            This week
                        </div>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Interviews
                        </div>
                        <div className="card-count">
                            0
                        </div>
                        <div className="card-days">
                            This week
                        </div>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Selected
                        </div>
                        <div className="card-count">
                            0
                        </div>
                        <div className="card-days">
                            This month
                        </div>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Rejected
                        </div>
                        <div className="card-count">
                            0
                        </div>
                        <div className="card-days">
                            This month
                        </div>
                    </div>
                </div>
            </div>

            <div className="overview">
                <div className="overview-box-left">
                    Application Overview
                </div>
                <div className="overview-box-right">
                    Upcoming Interviews
                </div>
            </div>

        </>
    );
}

export default Dash;
