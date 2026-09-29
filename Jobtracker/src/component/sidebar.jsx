function Side() {
    return (
        <aside className="sidebar">

            <div>
                <div className="sidebar-logo-box">
                    <span className="site-logo">➤</span>
                    <span className="site-logo-name">
                        JobTrack
                    </span>
                </div>
                <ul>
                    <li>
                        <span>⌂</span>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <span>▤</span>
                        <span>Applications</span>
                    </li>
                    <li>
                        <span>◷</span>
                        <span>Interviews</span>
                    </li>
                    <li>
                        <span>▥</span>
                        <span>Analytics</span>
                    </li>
                    <li>
                        <span>⚙</span>
                        <span>Settings</span>
                    </li>
                </ul>
            </div>

            <footer>
                <div className="footer-items">
                    <span>Keep going</span>
                    <p>
                        Lorem ipsum dolor sit amet.
                    </p>
                    <span>🚀</span>
                </div>
            </footer>

        </aside>
    );
}

export default Side;