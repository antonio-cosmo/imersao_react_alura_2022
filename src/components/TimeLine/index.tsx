import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";
import { StyledTimeline } from "./style";

interface Category{
    title: string
    url: string
    thumb: string
    idVideo: string
}
interface PlayLists{
  [name: string]: Category[]
}


interface TimeLineProps{
    playlists: PlayLists
}
export function Timeline({playlists}:TimeLineProps) {
    const {filterValue} = useContext(SearchContext)
    const playlistNames = Object.keys(playlists);
    
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = playlists[playlistName];

                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = filterValue.toLowerCase();
                                    return titleNormalized.includes(searchValueNormalized)
                                })
                                .map((video) => {
                                    return (
                                        <Link key={video.idVideo} href={`/video/${video.idVideo}`}>
                                        
                                            <Image loader={()=> video.thumb} src='video.img' alt='' width={200} height={200}/>
                                            <span>
                                                {video.title}
                                            </span>
                                        </Link>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }