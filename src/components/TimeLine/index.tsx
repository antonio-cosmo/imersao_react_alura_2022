import { useContext } from "react";
import { SearchContext } from "../../context/searchContext";
import { StyledTimeline } from "./style";

interface Category{
    title: string,
    url: string,
    thumb:string
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
                                        <a key={video.url} href={video.url}>
                                            <img src={video.thumb} />
                                            <span>
                                                {video.title}
                                            </span>
                                        </a>
                                    )
                                })}
                        </div>
                    </section>
                )
            })}
        </StyledTimeline>
    )
  }