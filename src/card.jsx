import profilePic from './assets/profile.png'
function card(){
    return(
        <div className="card">
            <img className="card-image" src={profilePic}  />
            <h2 className="card-title">GoMyCode</h2>
            <p className="card-text">i study fullstack development at GoMyCode and i like it</p>
        </div>
    )
}

export default card