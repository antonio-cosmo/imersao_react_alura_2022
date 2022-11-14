import { useState } from "react";
import { videoService } from "../../services/videoService";
import { StyledRegisterVideo } from "./style";

interface formData{
    titulo: string,
    url: string,
    playlist: string

}

function getThumbnail(url:string) {
    return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`;
}

function useForm() {
    const [values, setValues] = useState<formData>({} as formData);

    return {
        values,
        handleChange: (el:HTMLInputElement) => {
            const value = el.value;
            const name = el.name
            setValues({
                ...values,
                [name]: value,
            });
        },
        clearForm() {
            setValues({} as formData);
        }
    };
}

export default function RegisterVideo() {
    const formCadastro = useForm();
    const [formVisivel, setFormVisivel] = useState(false);
    const service = videoService()

    const handleOnSubmit = async ()=>{
        await service.createVideo({
            title: formCadastro.values.titulo,
            url: formCadastro.values.url,
            thumb: getThumbnail(formCadastro.values.url),
            playlist: formCadastro.values.playlist,
        })

        setFormVisivel(false);
        formCadastro.clearForm();
    }
    return (
        <StyledRegisterVideo>
            <button className="add-video" onClick={() => setFormVisivel(true)}>
                +
            </button>
            {formVisivel
                ? (
                    <form onSubmit={handleOnSubmit}>
                        <div>
                            <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}>
                                X
                            </button>
                            <input
                                placeholder="Titulo do vídeo"
                                name="titulo"
                                value={formCadastro.values.titulo || ''}
                                onChange={(e)=> formCadastro.handleChange(e.target)}
                            />
                            <input
                                placeholder="URL"
                                name="url"
                                value={formCadastro.values.url || ''}
                                onChange={(e)=> formCadastro.handleChange(e.target)}
                            />
                            <input
                                placeholder="Playlist"
                                name="playlist"
                                value={formCadastro.values.playlist || ''}
                                onChange={(e)=> formCadastro.handleChange(e.target)}
                            />
                            <button type="submit">
                                Cadastrar
                            </button>
                        </div>
                    </form>
                )
                : false}
        </StyledRegisterVideo>
    )
}
