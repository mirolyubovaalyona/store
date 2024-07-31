import styled from 'styled-components';

const Image = styled.div`
    width: ${props => props.sizeWidth};
    overflow: hidden;
    display: flex;
    align-item:center;
    & img {
        width: 100%;
    }
`
export default Image