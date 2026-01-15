import { FaGraduationCap, FaSchool } from 'react-icons/fa';

const educationData = [
    {
        degree: 'SEE (Secondary Education Examination)',
        school: 'Resunga English Boarding School',
        batch: 'Completed: 2076 BS',
        icon: <FaSchool />,
    },
    {
        degree: '+2 / Intermediate',
        school: 'Kalika manavgyan Secondary school ',
        batch: 'Completed: 2079 BS',
        icon: <FaSchool />,
    },
    {
        degree: "Bachelor's Degree",
        school: 'Butwal multiple campus',
        batch: 'Running / Completed: 2083 BS',
        icon: <FaGraduationCap />,
    },
];

export default function Education() {
    return (
        <section id="education" className="skills-section">
            <div className="skills-inner">
                <div className="section-heading">
                    <h2 className="skills-title">Education</h2>
                </div>
                <div className="section-divider" />

                <div className="education-grid">
                    {educationData.map((edu, index) => (
                        <div className="education-card" key={index}>
                            <div className="education-icon">{edu.icon}</div>
                            <div className="education-content">
                                <h3 className="education-degree">{edu.degree}</h3>
                                <p className="education-school">{edu.school}</p>
                                <span className="education-batch">{edu.batch}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}