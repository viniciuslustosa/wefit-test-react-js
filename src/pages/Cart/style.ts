import styled from 'styled-components';

export const FinishCart = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 20px;
    box-sizing: border-box;

    .priceContent, .buttonContent {
        display: flex;
        align-items: end;
        gap: 10px;
    }

    .buttonContent {
        display: flex;
        justify-content: flex-end;
        button {
            padding-left: 60px;
            padding-right: 60px;
        }
    }

    @media only screen and (max-width: 600px) {
        .priceContent {
            justify-content: flex-end;
            margin-bottom: 20px;
        }

        .buttonContent {
            width: 100%;
            justify-content: flex-end;
            
            button {
                width: 100%;
            }
        }
    }
`
export const RowItem = styled.div`
    display: flex;

    .productInfo {
        display: flex;
        width: 100%;
        justify-content: center;
        align-items: center;

        > div {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }
    }
`

export const ProductContent = styled.div`
    display: flex;
    padding: 10px 0;

    .subtotalContent {
        display: flex;
        flex-direction: row;
    }

    .productInfo {
        display: flex;
        justify-content: space-between;
    }

    > div:last-child {
        width: 100%;
        padding: 10px;

        > div:last-child {
            display: flex;
            justify-content: space-between;
            margin-top: 20px;
    
            .subtotalContent {
                display: flex;
                flex-direction: column;
                text-align: end;
            }
        }
    }
    
`