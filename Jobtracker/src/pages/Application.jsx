function Appli() {
    return (
        <>
            <div className="appli-hero">
                <span>Manage Your Opportunities</span>
                <h1>Applications</h1>
            </div>
            <div className="appli-box">
                <div className="left-appli-box">
                    <form action="">
                        <h2>Add Application</h2>
                        <input type="text" placeholder="Company Name"/>
                        <input type="text" placeholder="Job Role"/>
                        <input type="text" placeholder="Location"/>
                        <input type="date" />
                        <input type="Number" placeholder="Salary"/>
                        <input type="text" placeholder="Applied"/>
                        <input type="text" placeholder="Job URL"/>
                        <button type="submit">Add Application</button>
                    </form>
                </div>
                <div className="right-appli-box"></div>
            </div>

        </>

    );
}
export default Appli;