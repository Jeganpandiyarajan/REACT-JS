import { Fragment } from "react";
function Card(props){
    return(
        <div className="container">
            <div className="pic">
                    <img src={props.profile} alt="user" height={200} width={250} />
            </div>
        <div>
        <span className="pro">{props.online ? "ONLINE" : "OFFLINE"}</span>
            <p>Name:{props.name}</p>
            <p>Country:{props.country}</p>
            <p>Role:{props.skill}</p>
        </div>
        <div className="buttons">
            <button className="primary">Message</button>
            <button className="outline">Follow</button>
            <button className="outline">Following</button>
        </div>
        <div className="skills">
            <p >SKILLS</p>
            <ul>
                <li>FRont End Developer</li> 
                <li>PHP</li>
                <li>UI/UX</li> 
                <li>HTML</li> 
                <li>CSS</li> 
                <li>JavaScript</li> 
                <li>React</li> 
                <li>Node</li>
            </ul>
        </div>
        </div>
        
    );
}
export default Card;
