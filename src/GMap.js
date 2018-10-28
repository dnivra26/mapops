import React, { Component } from 'react';
import { GoogleMap, Marker } from "react-google-maps"
import logo from './img.png';
export class GMap extends Component {

    componentDidUpdate(prevProps) {
        const bounds = new window.google.maps.LatLngBounds()
        this.props.coordinates.forEach(bound => bounds.extend(new window.google.maps.LatLng(bound.lat, bound.lng)))
        this.refs.map.fitBounds(bounds)
    }

    render() {
        const bounds = new window.google.maps.LatLngBounds();
        for (var i = 0; i < this.props.coordinates.length; i++) {
            bounds.extend(new window.google.maps.LatLng(this.props.coordinates[i].lat, this.props.coordinates[i].lng));
        
        }
        
        return (
        <GoogleMap
        ref='map'
        defaultZoom={14}
        defaultCenter={{ lat: 23.7454272, lng: 90.4048799 }}
        >
        {
            this.props.coordinates.map((coord,index) => {
                var icon = logo;
                if(index === 0) {
                    icon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";
                } else if(index === (this.props.coordinates.length - 1)){
                    icon = "http://maps.google.com/mapfiles/ms/icons/red-dot.png";
                }

            return (
            <Marker
                key={index}
                position={{ lat: parseFloat(coord.lat), lng: parseFloat(coord.lng) }}
                icon={icon}
            />
            );
            }
            ) 
        }
        </GoogleMap>);
    }
}