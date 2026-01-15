import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState } from 'react';
export default function Header() {
    const [overlayOpen, setOverlayOpen] = useState(false);

    const navItems = [
        { label: 'Home', href: '#home' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Education', href: '#education' },
        { label: 'Contact', href: '#contact' },
    ];

    const handleToggleClick = () => {
        setOverlayOpen((prev) => !prev);
    };

    const handleNavClick = () => {
        setOverlayOpen(false);
    };

    return (
        <>
            <Navbar 
                expand="lg" 
                className="custom-navbar" 
                sticky="top"
            >
                <Container className='color-dark'>
                    <Navbar.Brand className="text-white navbar-brand-mobile" style={{ fontFamily: "'Brush Script MT', cursive", fontStyle: "italic" }}>Sanjay</Navbar.Brand>

                    {/* Desktop navbar links (same items as mobile) */}
                    <Nav className="nav d-none d-lg-flex">
                        {navItems.map((item) => (
                            <Nav.Link
                                key={item.href}
                                href={item.href}
                                className="nav-item-animated"
                            >
                                {item.label}
                            </Nav.Link>
                        ))}
                    </Nav>

                    {/* Mobile toggle (same icon / behavior) */}
                    <Navbar.Toggle 
                        aria-controls="basic-navbar-nav" 
                        className={`custom-toggler d-lg-none ${overlayOpen ? 'active' : ''}`}
                        onClick={handleToggleClick}
                    >
                        <span className="toggler-bar bar1"></span>
                        <span className="toggler-bar bar2"></span>
                        <span className="toggler-bar bar3"></span>
                    </Navbar.Toggle>
                </Container>
            </Navbar>

            {/* Fixed transparent overlay for nav on small screens, does not push content */}
            <div className={`nav-overlay ${overlayOpen ? 'show' : ''}`}>
                <div className="nav-overlay-inner">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="nav-overlay-btn"
                            onClick={handleNavClick}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}