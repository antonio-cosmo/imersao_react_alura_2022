import config from '../config.json'
import {Header} from '../components/Header'
import {Menu} from "../components/Menu"
import { Timeline } from '../components/TimeLine';
import { StyledHome } from '../styles/style.home';
// import { useEffect, useState } from 'react';
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
    idVideo: string
}

interface IPlaylists{
    [name: string]: VideoData[]
}

interface HomeProps{
    playlists: IPlaylists
}

export default function Home({playlists}:HomeProps) {
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
            <Timeline playlists={playlists}/>
        </StyledHome>
    </>
);
}

export async function getServerSideProps(){
    const service = videoService()
    const res =  await service.getAllVideos()
    const resData: VideoData[] | null = res.data
    const playlists:IPlaylists = {}
    if(resData){
        resData.forEach((video)=>{
            if(!playlists[video.playlist]) playlists[video.playlist] = []
            playlists[video.playlist] = [
                video,
                ...playlists[video.playlist]
            ]
        })
        
    }
    return{
        props:{
            playlists
        }
    }
}

