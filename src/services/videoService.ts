import { createClient } from "@supabase/supabase-js";

const url = process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL
const key = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY
const supabase = createClient(url!, key!);

interface formData{
    title: string
    url: string
    thumb: string
    playlist: string
    idVideo: string
}
export function videoService() {
    return {
        async getAllVideos() {
            return await supabase.from("video")
                    .select("*");
        },
        async createVideo({title, url, thumb, playlist, idVideo}:formData){
            const res = await supabase.from("video").insert({
                title,
                url,
                thumb,
                playlist,
                idVideo
             })
        }
    }
}