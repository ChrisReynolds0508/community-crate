import '../main.css';

const DonateNow = () => {
    const goToFoodBanks = () => {
        window.location.href = '/foodbanks';
    };

    return (
        <div>
            <header className="hero">
                <h1 style={{fontSize:'80px', marginTop:'30px',fontFamily:'Arial'}}>Make a Difference</h1>
                <p style={{fontSize:'60px' ,fontFamily:'Brush Script MT', padding:'10px',marginBottom:'30px', marginLeft:'20px'
                }}>Your donations can change lives!</p>
            </header>

            <div>
            <div>
            <div style={{ display: 'flex', justifyContent: 'center', padding: '30px', marginTop:'30px',  }}>
                <button className='state' style={{backgroundColor: 'darkgreen', padding: '10px', fontSize:'50px', color:'#f3b706', borderRadius:'15px', fontFamily:'Arial'}} onClick={goToFoodBanks}>Food Banks</button>
            </div>
            </div>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop:'15px'}}> 
                    
                    <button><a href='#about'>About Us</a></button>
                    <button><a href='#mission'>Our Mission</a></button>
                    <button><a href='#donation'>How Your Donation Helps</a></button>
                    <button><a href='#contribute'>Ways to Contribute</a></button>
                    <button><a href='#involved'>Get Involved</a></button>
                </div>
              
                
                <div className="donation-info" id='about'>
                    <h2>About Us</h2>
                    <p>We are a dedicated platform connecting kind-hearted individuals with food banks across Australia. Our mission is to fight hunger by facilitating food donations and volunteer support for local communities. We believe that no one should go hungry, and through your generosity, we aim to create a future where nutritious food is accessible to everyone.</p>
                </div>
                <div className="donation-info" id='mission'>
                    <h2>Our Mission</h2>
                    <p>Our mission is simple but impactful: to eliminate hunger and promote food security throughout Australia. We work with a network of food banks and community organizations to ensure that donations reach those who need them most. By supporting us, you’re helping to reduce food waste, uplift communities, and bring comfort to families facing food insecurity.</p>
                </div>
                <div className="donation-info" id='donation'>
                    <h2>How Your Donation Helps</h2>
                    <ul className="liststyle">
                        <li><strong>Feeds families in need:</strong> Your contributions provide essential nourishment to families, children, and the elderly who struggle to afford healthy meals.</li>
                        <li><strong>Supports local food banks:</strong> Your support strengthens food banks, allowing them to distribute more food to underserved communities.</li>
                        <li><strong>Reduces food waste:</strong> By donating surplus food, you’re helping to divert resources from landfills and channel them to those in need.</li>
                        <li><strong>Empowers communities:</strong> With access to nutritious food, individuals can focus on education, employment, and personal growth.</li>
                    </ul>
                </div>
                <div className="donation-info" id='contribute'>
                    <h2>Ways to Contribute</h2>
                    <ul>
                        <li><strong>Food Donations:</strong> Donate shelf-stable items or surplus food that can be safely distributed to those in need.</li>
                        <li><strong> Volunteer Opportunities:</strong>Help sort, pack, and distribute food at food banks. Your time and energy are invaluable!</li>
                        <li><strong>Monetary Support:</strong> If you’re unable to volunteer or donate food, consider a financial donation to help us expand our reach and improve our resources.</li>
                        </ul>
                </div>
                <div className="donation-info" id='involved'>
                    <h2>Get Involved</h2>
                    <p>Join us in our mission to end hunger across Australia. By donating, volunteering, or simply spreading awareness, you can help create a lasting impact in the lives of countless Australians. Together, we can build a nation where everyone has access to nutritious food and no one goes to bed hungry.</p>
                   
                </div>
            </div>
        </div>
    );
};

export default DonateNow;