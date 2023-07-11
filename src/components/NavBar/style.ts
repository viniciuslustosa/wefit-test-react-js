import styled from 'styled-components';

export const ContentCart = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
    align-items: center;
    cursor: pointer;

    > div {
        display: flex;
        flex-direction: column;
        text-align: end;

        > span:first-child {
            font-weight: 500;
        }

        > span:last-child {
            color: #97A1B0;
            font-size: 14px;
        }
    }
`