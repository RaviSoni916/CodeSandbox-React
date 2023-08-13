import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="RS.jpg" alt="Ravi Soni" />;
}

function Intro() {
  return (
    <div>
      <h1>Ravi Soni</h1>
      <p>
        Hi this is Ravi Soni, currently working as Mainframe Designer in Tata
        Consultancy Services Limited. When I get time from work I love to play
        cricket, and I also love to watch WWE.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="&#129311;" color="red" />
      <Skill skill="HTML+CSS" emoji="&#128122;" color="blue" />
      <Skill skill="JavaScript" emoji="&#128081;" color="green" />
      <Skill skill="SQL" emoji="&#129313;" color="pink" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
