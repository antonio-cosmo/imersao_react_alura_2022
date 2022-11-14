import config from '../config.json'
import {Header} from '../components/Header'
import {Menu} from "../components/Menu"
import { Timeline } from '../components/TimeLine';
import { StyledHome } from '../styles/style.home';
import { useEffect, useState } from 'react';
import { videoService } from '../services/videoService';

interface User{
        name: string,
        job: string,
        userNameGitHub: string,
        bg: string
}

interface VideoData{
    title: string
    url: string
    thumb: string
    playlist: string
}

interface IPlaylists{
    [name: string]: VideoData[]
}

export default function Home() {
    const service = videoService()
    const [playlists, setPlaylists] = useState<IPlaylists>({} as IPlaylists);
    const {name, job, github, bg}= config
    const user:User = {
        name,
        job,
        userNameGitHub:github,
        bg
    }

    useEffect(() => {
        async function load(){
            const res =  await service.getAllVideos()
            const resData: VideoData[] | null = res.data
            const newPlaylists = {...playlists}
            console.log(resData)
            if(resData){
                resData.forEach((video)=>{
                    if(!newPlaylists[video.playlist]) newPlaylists[video.playlist] = []
                    newPlaylists[video.playlist] = [
                        video,
                        ...newPlaylists[video.playlist]
                    ]
                })
                
                setPlaylists(newPlaylists)
            }
        }

        load()
        
    }, []);

   
  return (
    <>
        <StyledHome>
            <Menu/>
            <Header {...user}/>
            <Timeline playlists={playlists}/>
            
        </StyledHome>
    </>
);
}



