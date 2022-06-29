function Button (props) {
    return(
        <div className="Button"> 
            {props.children} 
            <img alt="" src="./src/images/Mouse.svg"></img>
        </div>
    );
}

export default Button;