import './Description.css'
import Button from '../components/Button'
import bg from '../assets/images/desc.png';

const content = [
  { title: 'AI & MACHINE LEARNING', desc: 'We develop custom predictive models (computer vision, nlp, recommendation engines, generative ai, etc.) that unlock insights and automate processes. we help companies investing in ai and automation often see double-digit performance gains.' },
  { title: 'AUTOMATION & OPTIMIZATION', desc: 'Intelligent automation streamlines your operations. we analyze existing workflows and rep solutions to eliminate manual tasks, reduce errors, and accelerate processes (delivering measurable efficiency improvements).' },
  { title: 'DATA ANALYTICS & BI', desc: 'we transform raw data into actionable intelligence. our data engineers and analysts build dashboards and predictive systems that help you make data-driven decisions for better outcomes. nearly 30% of businesses report significant profit boosts from advanced analytics.' },
  { title: 'WEB & MOBILE DEVELOPMENT', desc: 'our designers and developers create responsive, high-performance web and mobile applications tailored to your needs. intuitive ui/ux is critical — e.g. 74% of mobile users are more likely to return to a mobile-friendly site — and we ensure your product looks great and works seamlessly.' },
  { title: 'DIGITAL STRATEGY & CONSULTING', desc: 'we partner with you to define and execute a forward-looking technology roadmap. from digital assessment to full transformation plans, we align innovation with your business goals. industry surveys show that improved efficiency, faster time-to-market, and better customer experience...' },
  { title: 'UI/UX DESIGN', desc: "user-centered design is at the heart of what we do. our designers create engaging, accessible interfaces that enhance user satisfaction and adoption. focusing on the human experience, we help you build products that customers love and competitor's envy." },
  { title: 'CLOUD SOLUTIONS & DEVOPS', desc: 'we architect reliable, secure cloud infrastructures (aws, azure, google cloud) and implement devops best practices. this means scalable systems, automated deployments, and fast iteration cycles. the vast majority of companies (92%) are in the cloud now...' },
  { title: 'CUSTOM SOFTWARE DEVELOPMENT', desc: "when off-the-shelf won't suffice, we deliver fully custom software. our engineers turn your unique requirements into reliable, maintainable applications. from enterprise platforms to niche tools, we write clean code and integrate advanced features (ai modules, apis, integrati..." }
];

const Description = () => {
    return (
        <section id='desc'>
            <div class='grid'>
                {content.map((service, index) => (
                    <div class ='card' key={index}>
                        <h3>{service.title}</h3>
                        <p>{service.desc}</p>
                    </div>
                ))}
            </div>
            <div id="second" style={{ backgroundImage: `url(${bg})` }}>
                <div>
                    <h2>READY TO TRANSFORM YOUR</h2><h2>BUSINESS WITH INTELLIGENT</h2><h2>TECHNOLOGY?</h2>
                    <Button/>
                </div>
            </div>
        </section>
    )
}

export default Description