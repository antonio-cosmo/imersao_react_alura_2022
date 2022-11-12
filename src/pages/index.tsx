import { useState } from 'react';
import config from '../config.json'
import {Header} from './components/Header'
import {Menu} from "./components/Menu"
import { Timeline } from './components/TimeLine';

interface User{
        name: string,
        job: string,
        userNameGitHub: string,
        bg: string
}

export default function Home() {
    const [filterValue, setFilterValue] = useState('')
    
    const {name, job, github, bg}= config
    const user:User = {
        name,
        job,
        userNameGitHub:github,
        bg
    }

    const handleFilterValue= (name: string)=>{
        setFilterValue(name)
    }
  return (
    <>
        <div style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
        }}>
            <Menu filterValue={filterValue} handleFilterValue={handleFilterValue} />
            <Header {...user}/>
            <Timeline searchValue={filterValue} playlists={config.playlists}/>
            
        </div>
    </>
);
}



