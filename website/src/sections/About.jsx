import './About.css'

const aims = [
  { title: 'INNOVATION', desc: "We push the boundaries of what’s possible, using cutting-edge AI and cloud technologies to create new capabilities for our clients. Our culture of innovation means we stay ahead of trends and continuously improve our solutions." },
  { title: 'RESULTS-DRIVEN', desc: 'We focus on measurable outcomes – boosting efficiency, increasing revenue, or improving customer experience. Advanced AI projects often meet or exceed expectations (about 74% of mature initiatives report achieving ROI goals), and we aim to place you among those success stories.' },
  { title: 'INTEGRITY & TRUST', desc: 'We uphold the highest ethical standards, especially in AI. Transparency, security, and responsible use of data are paramount. Clients trust us to handle their information and strategies with care' },
  { title: 'CUSTOMER-CENTRIC', desc: ' Your goals drive our work. We listen carefully, communicate clearly, and involve you at every step. By acting as an extension of your team, we ensure solutions fit your business and deliver real impact.' }
];


const About = () => {
    return (
        <section id="about">
            <div id="about_div">
                <h1>ABOUT US</h1>
                <p>
                    shadotech is a next-generation ai and digital agency on a mission to empower organizations of all 
                    sizes. we believe that technology — from cloud computing to machine learning — should be a catalyst 
                    for growth, not a barrier. founded by experienced engineers and strategists, our team brings deep 
                    expertise in ai, automation, and software development along with a passion for innovation. we work 
                    closely with clients in every industry (finance, healthcare, retail, manufacturing, and more) to tailor 
                    solutions to their unique needs.
                </p>
            </div>
            <div class="grid" id="about_grid">
                {aims.map((service, index) => (
                    <div  id="about_card" key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default About