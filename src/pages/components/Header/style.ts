import styled from "styled-components";

export const StyledHeader = styled.div`
    img {
        width: 80px;
        height: 80px;
        border-radius: 50%;
    }
    .user-info {
        margin-top: 50px;
        display: flex;
        align-items: center;
        width: 100%;
        padding: 16px 32px;
        gap: 16px;
    }
`;

interface StyleBannerProps{
    bg: string
}
export const StyledBanner = styled.div<S>`
    background-color: blue;
    background-image: url(${({ bg }) => bg});
    height: 230px;
`;