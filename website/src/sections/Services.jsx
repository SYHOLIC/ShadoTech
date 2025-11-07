import './Services.css'
import ai from '../assets/images/ai.jpg'
import app from '../assets/images/app.jpg'
import auto from '../assets/images/auto.jpg'
import cloud from '../assets/images/cloud.jpg'
import custom from '../assets/images/custom.jpg'
import data from '../assets/images/data.jpg'
import digital from '../assets/images/digital.jpg'
import uiux from '../assets/images/uiux.jpg'

const services = [
  { title: 'AI & MACHINE LEARNING SOLUTIONS', desc: ' We build and deploy advanced AI systems that learn from your data. This includes supervised and unsupervised models, deep learning neural networks, NLP engines, computer vision, and generative AI tools. For example, our predictive analytics models can forecast demand or detect anomalies, and our chatbots and voice assistants leverage NLP to enhance cust...', img: ai },
  { title: 'AUTOMATION AND WORKFLOW OPTIMIZATION', desc: ' Our automation services focus on eliminating manual, repetitive work. We analyze your existing processes and identify opportunities for Robotic Process Automation (RPA), AI-driven decisionmaking, and low-code workflows. For instance, we can automate invoice processing using OCR and machine learning, or optimize your production schedule with...', img: auto },
  { title: 'DATA ANALYTICS AND BUSINESS INTELLIGENCE', desc: ' Data is a strategic asset, and we help you unlock its value. Our data analytics team sets up robust data pipelines, warehouses, and visualization tools. We create BI dashboards and reports that let you monitor KPIs in real time. Beyond descriptive analytics, we develop predictive and prescriptive models to guide decisions. For example, sales forecasting moveBy...', img: data },
  { title: 'WEB AND MOBILE APP DEVELOPMENT', desc: ' We design and build high-quality web and mobile applications that engage users and support your business goals. Our mobile apps run smoothly on iOS and Android; our websites are responsive and SEO-friendly. We emphasize clean, scalable architecture and agile development – incorporating client feedback in every sprint. Whether it’s a customer-facing e-com...', img: app },
  { title: 'DIGITAL STRATEGY AND CONSULTING', desc: ' Successful digital transformation starts with strategy. Our consultants work with your leadership to assess current capabilities and define a clear roadmap. We identify the best technologies (AI, cloud, analytics, etc.) for your objectives and outline a phased implementation plan. This might include digital maturity assessments, change management plans, and p...', img: digital },
  { title: 'UI/UX DESIGN', desc: " Great technology must be usable and appealing. Our design team crafts intuitive interfaces and delightful user experiences. We conduct user research and prototyping to ensure that designs solve real problems. From wireframes to polished UI, every element is optimized for clarity and ease of use. We pay particular attention to mobile responsiveness and...", img: uiux },
  { title: 'CLOUD SOLUTIONS AND DEVOPS', desc: ' We leverage cloud platforms to build flexible, scalable solutions. Our cloud services include architecture design, migration, and management on AWS, Azure, or Google Cloud. We implement containerization, microservices, and automated CI/CD pipelines so your applications can evolve quickly and reliably. Security and disaster recovery are built in...', img: cloud },
  { title: 'CUSTOM SOFTWARE DEVELOPMENT', desc: " For specialized needs, we offer bespoke software development. Our team covers the full stack: frontend, back-end, databases, and integrations. We follow agile practices and rigorous QA to deliver bugfree, high-performance applications. Whether building a new product from scratch or modernizing legacy systems, we apply proven frameworks and languages suited to your needs (e.g. Python,...", img: custom }
];

const Services = () => {
    return (
        <section id="services">
            <h1>OUR SERVICES</h1>
            <div class='grid'>
                {services.map((service, index) => (
                    <div class ='services_card' key={index}>
                        <div id="image" style={{ backgroundImage: `url(${service.img})` }}>
                        </div>
                        <div id="content">
                            <h3 id="title">{service.title}</h3>
                            <p id="text">{service.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Services