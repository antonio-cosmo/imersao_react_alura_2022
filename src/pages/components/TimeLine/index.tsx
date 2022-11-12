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
    searchValue: string
}
export function Timeline({searchValue, playlists}:TimeLineProps) {
    const playlistNames = Object.keys(playlists);
   
    return (
        <StyledTimeline>
            {playlistNames.map((playlistName) => {
                const videos = playlists[playlistName];
                return (
                    <section key={playlistName}>
                        <h2>{playlistName}</h2>
                        <div>
                            {/* {videos.map((video) => {
                                return (
                                    <a href={video.url} key={video.url}>
                                        <img src={video.thumb} />
                                        <span>
                                            {video.title}
                                        </span>
                                    </a>
                                )
                            })} */}
                            {videos
                                .filter((video) => {
                                    const titleNormalized = video.title.toLowerCase();
                                    const searchValueNormalized = searchValue.toLowerCase();
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