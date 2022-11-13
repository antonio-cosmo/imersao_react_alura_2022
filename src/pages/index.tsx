import config from '../config.json'
import {Header} from '../components/Header'
import {Menu} from "../components/Menu"
import { Timeline } from '../components/TimeLine';
import { StyledHome } from '../styles/style.home';

interface User{
        name: string,
        job: string,
        userNameGitHub: string,
        bg: string
}

export default function Home() {

    const {name, job, github, bg}= config
    const user:User = {
        name,
        job,
        userNameGitHub:github,
        bg
    }

   
  return (
    <>
        <StyledHome>
            <Menu/>
            <Header {...user}/>
            <Timeline playlists={config.playlists}/>
            
        </StyledHome>
    </>
);
}



