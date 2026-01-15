

export default function Skills() {
    return (
        <section id="skills" className="skills-section">
            <div className="skills-inner">
                <div className="section-heading">
                    <h2 className="skills-title">Skills</h2>
                </div>
                <div className="section-divider" />
                <div className="skills-grid">
                    <div className="skill-card">
                        <h3 className="skill-card-title">Frontend</h3>
                        <ul className="skill-list">
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>JavaScript (Basics)</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3 className="skill-card-title">Backend</h3>
                        <ul className="skill-list">
                            <li>Django</li>
                            <li>Django REST Framework</li>
                            <li>Redis</li>
                            <li>Celery</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3 className="skill-card-title">Database</h3>
                        <ul className="skill-list">
                            <li>PostgreSQL</li>
                            <li>MySQL</li>
                        </ul>
                    </div>

                    <div className="skill-card">
                        <h3 className="skill-card-title">Tools</h3>
                        <ul className="skill-list">
                            <li>Git</li>
                            <li>GitHub</li>
                            <li>Postman</li>
                            <li>Docker</li>
                            <li>VS Code</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}