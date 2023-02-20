import {useRouter} from 'next/router'
import { Menu } from "../../components/Menu";
import { StyledVideo } from "../../styles/style.video";

export default function Video(){
    const router = useRouter()
    const {id} = router.query
    return(
        <>
            <Menu/>
            <StyledVideo>
                <iframe 
                    width="700" 
                    height="400" 
                    src={`https://www.youtube.com/embed/${id}`} 
                    title="YouTube video player" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                >

                </iframe>
            </StyledVideo>
        </>
        
    )
}