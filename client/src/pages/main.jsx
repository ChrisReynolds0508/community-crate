import '../main.css';

const DonateNow = () => {
    return (
        <div>
            <header className="hero">
                <h1 style={{fontSize:'80px', marginTop:'30px',fontFamily:'Arial'}}>Make a Difference</h1>
                <p style={{fontSize:'60px' ,fontFamily:'Brush Script MT', padding:'10px',marginBottom:'30px', marginLeft:'20px'
                }}>Your donations can change lives!</p>
            </header>

            <div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop:'15px' }}> 
                    <button><a href='#about'>About Us</a></button>
                    <button><a href='#mission'>Our Mission</a></button>
                    <button><a href='#donation'>How Your Donation Helps</a></button>
                    <button><a href='#contribute'>Ways to Contribute</a></button>
                    <button><a href='#involved'>Get Involved</a></button>
                </div>
                <div className="donation-info" id='about'>
                    <h2>About Us</h2>
                    <p>We are a non-profit organization dedicated to providing assistance to those in need. Your generous donations help us to support various causes, from healthcare and education to disaster relief and environmental conservation.</p>
                </div>
                <div className="donation-info" id='mission'>
                    <h2>Our Mission</h2>
                    <p>Our mission is to empower individuals and communities by providing them with the necessary tools and resources to thrive. We believe in the power of collective action and the impact it can have on the world.</p>
                </div>
                <div className="donation-info" id='donation'>
                    <h2>How Your Donation Helps</h2>
                    <ul className="liststyle">
                        <li>Provides essential resources to underprivileged communities</li>
                        <li>Supports educational programs for children</li>
                        <li>Offers medical assistance to those in need</li>
                        <li>Funds disaster relief efforts and recovery programs</li>
                    </ul>
                </div>
                <div className="donation-info" id='contribute'>
                    <h2>Ways to Contribute</h2>
                    <p>Your contributions can take many forms, whether it's a one-time donation, a monthly sponsorship, or volunteering your time. Every effort counts, and we are grateful for your support.</p>
                </div>
                <div className="donation-info" id='involved'>
                    <h2>Get Involved</h2>
                    <p>Join us in our mission to make the world a better place. Every contribution counts, and together we can create lasting change.</p>
                </div>
            </div>
        </div>
    );
};

export default DonateNow;