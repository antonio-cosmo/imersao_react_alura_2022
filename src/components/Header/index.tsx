import {StyledBanner, StyledHeader} from './style'
interface HeaderProps{
    name: string,
    job: string,
    userNameGitHub: string,
    bg: string
}
export function Header({name, job, userNameGitHub, bg}:HeaderProps) {
    return (
        <StyledHeader>
            <StyledBanner bg={bg} />
            <section className="user-info">
                <img src={`https://github.com/${userNameGitHub}.png`} />
                <div>
                    <h2>
                        {name}
                    </h2>
                    <p>
                        {job}
                    </p>
                </div>
            </section>
        </StyledHeader>
    )
  }
  