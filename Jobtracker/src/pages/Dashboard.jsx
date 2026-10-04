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
                            <p>4</p>
                        </div>
                        <div className="card-days">
                            <span>This week</span>
                        </div>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Interviews
                        </div>
                        <div className="card-count">
                            <p>1</p>
                        </div>
                        <div className="card-days">
                            <span>This week</span>
                        </div>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Selected
                        </div>
                        <div className="card-count">
                            <p>1</p>
                        </div>
                        <div className="card-days">
                            <span>This month</span>
                        </div>
                    </div>
                </div>

                <div className="card-box">
                    <div className="card-body">
                        <div className="card-title">
                            Rejected
                        </div>
                        <div className="card-count">
                            <p>1</p>
                        </div>
                        <div className="card-days">
                            <span>This month</span>
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
