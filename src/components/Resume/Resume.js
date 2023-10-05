import './Resume.css'

const Resume = () =>
<div>
    <header>
        <h1>Ian Pomaznyuk</h1>
        <p>Monroe, NC 28110</p>
        <p>Phone: 913-340-2192</p>
        <p>Email: <a href="mailto:ianpomaznyuk@gmail.com">ianpomaznyuk@gmail.com</a></p>
        <p>Website: <a href="https://ianpomaz.github.io/my_portfoliov2/">Bold Profile</a></p>
    </header>

    <section class="professional-summary">
        <h2>Professional Summary</h2>
        <p>Hey there! I'm Ian, a former small-business owner who started my career at 19, remodeling homes. Lately, I've been diving headfirst into the world of web development and coding. With a background rooted in construction precision, problem-solving, and teamwork, I've seamlessly transitioned these skills into the digital sphere. I'm proficient particularly in JavaScript, spanning from front-end to back-end development.</p>
    </section>

    <section class="skills">
        <h2>Skills</h2>
        <ul>
            <li>Front-end: HTML, CSS, JavaScript, React, Angular</li>
            <li>Databases: SQL (MySQL), NoSQL (MongoDB)</li>
            <li>Back-end: Node.js, Express.js, RESTful APIs</li>
            <li>Version Control: Git, GitHub</li>
            <li>Responsive Design, Mobile-first Approach</li>
        </ul>
    </section>

    <section class="work-history">
        <h2>Work History</h2>
        <h3>Remodeling Contractor | 10/2019 to Current</h3>
        <p>IXP Remodeling - Kansas City, MO And Charlotte, NC</p>
        <ul>
            <li>Managed project timelines and resources to complete projects on schedule and budget.</li>
            <li>Prepared cost estimates for labor and materials to help with planning.</li>
            <li>Met with customers and clients to determine project needs and prepared proposals incorporating production schedules, scopes of work, and budgets.</li>
        </ul>
    </section>

    <section class="education">
        <h2>Education</h2>
        <p>UNCC FullStack Bootcamp - Charlotte, NC</p>
        <p>Software Development, Expected in 10/2023</p>
        <ul>
            <li>Proficient in front-end technologies such as HTML5, CSS3, JavaScript, and modern frameworks like React and Angular.</li>
            <li>Strong grasp of back-end development using Node.js and Express.js, including RESTful API design.</li>
            <li>Experience with database management systems, including SQL (e.g., MySQL, PostgreSQL) and NoSQL (e.g., MongoDB).</li>
        </ul>
    </section>

    <section class="projects">
        <h2>Projects</h2>
        <p><a href="https://flavor-impersonator-2e87d3d63575.herokuapp.com/">Flavor Impersonator</a></p>
        <p>Description: Flavor Impersonator is a user-friendly platform where food enthusiasts can share and discover their favorite recipes from popular restaurants or famous dishes. By leveraging the power of Node.js, Express.js, Handlebars.js, MySQL, Sequelize, Bootstrap, and Animate.css, we will deliver a secure and efficient web application that meets the needs of recipe enthusiasts. This project promises to be an exciting endeavor that celebrates the joy of cooking and sharing delicious meals.</p>
        <p>Motivation for Development: We wanted to create an app that would combine the usefulness of a recipe blog with a social media element, for foodies, by foodies.</p>
        <p>User Story: AS a food enthusiast, I WANT to use the Flavor Impersonator to discover, save, share, and comment on recipes conveniently, SO THAT I can recreate my favorite restaurant recipes from the comfort of my own home.</p>
    </section>

    <footer>
        <p>Connect with me on <a href="https://www.linkedin.com/in/ian-pomaznyuk-1875b9287/">LinkedIn</a></p>
    </footer>
</div>


export default Resume;