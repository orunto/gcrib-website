function Button (props) {
    return(
        <div className="Button"> 
            {props.children} 
            <img src='https://cdn.jsdelivr.net/gh/orunto/mycdn/gcrib/images/Mouse.svg' alt=""></img>
        </div>
    );
}

export default Button;