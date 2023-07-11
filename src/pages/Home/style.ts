import styled from "styled-components";

export const SearchContent = styled.div`
    width: 100%;
    background-color: white;
    border-radius: 8px;
    padding: 10px;
    margin: 20px 0;
    box-sizing: border-box;

    display: flex;
    justify-content: space-between;

    > input {
        font-size: 18px;
        width: 100%;
        border: none;
    }
`

export const LoadingContent = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
`

export const ContentSearching = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;

    padding-bottom: 20px;

    @media only screen and (max-width: 600px) {
        flex-direction: column;
    }
`