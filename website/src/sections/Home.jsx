import './Home.css'
import bg from '../assets/images/home_bg.png';
import Button from '../components/Button'

const Home = () => {
    return (
        <section id="home" style={{ backgroundImage: `url(${bg})` }}>
            <h1>
                TRANSFORM YOUR BUSINESS
                <br/>
                WITH US AND AI
            </h1>
            <p>
                In Today's Data-Driven World, Leading Companies Rely On Intelligent 
                Technology To Stay Competitive. 92% Of Enterprises Have Adopted 
                Cloud Solutions, And Over Three-Quarters Use AI In At Least One 
                Business Function. ShadoTech Helps You Harness These Innovations: 
                We Build Scalable Cloud-Based Systems And Custom AI Tools That Turn 
                Your Data Into Insights, Automate Workflows, And Drive Growth. Our 
                Team Of Experts Delivers End-To-End Solutions From Strategy And 
                Design Through Development And Deployment – So You Can Focus 
                On Your Core Business While We Handle The Tech
            </p>
            <Button/>
        </section>
    )
}

export default Home