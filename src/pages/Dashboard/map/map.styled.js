import {useEffect} from 'react';
import styled from 'styled-components';
import {initMap} from '.';

export const Map = () => {

    useEffect(() => {
        initMap();
    }, [])

    return (
        <DivMap id="map"/>
    )    
}

export const DivMap = styled.div`
    height: ${props => props.theme.sizes.dashboardItemHeight}px;
    width: ${props => props.theme.sizes.dashboardItemWidth}px;
    margin-bottom: 20px;
`
