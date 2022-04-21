import '../Components/Wrapper.css'
import Profile from "../Components/Profile"
import UserName from "../Components/UserName"
import Wallpaper from "../Components/Wallpaper"
import UserInfo from "../Components/UserInfo"

function Global(props){
    return(
        <div className="wrapper">
         <Wallpaper Wallpaper={props.Wallpaper}/>
          <Profile profilePic={props.profilePic}/>
          <UserName username={props.username}/>
          About
          <UserInfo userInfo={props.userInfo}/>
          Web: <a href="https://phin.dev">https://phin.dev</a><br />
          twitter: <a href="https://twittwr.com/phin">https://twittwr.com/phin</a>

        </div>
    )
}

export default Global