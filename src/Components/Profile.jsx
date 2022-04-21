import "./Wrapper.css"

function Profile(props){
    return(
        <div>
            <img className="avatar" src={props.profilePic} alt="" />
          
        </div>
    )
}
export default Profile