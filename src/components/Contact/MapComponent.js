import React from "react";
import MapChart from "./MapChart";


const MapComponent = () =>
    <section className="container mb-50 d-none d-md-block">
        <div className="border-radius-15 overflow-hidden">
            <div id="map-panes" className="leaflet-map">
                <MapChart />
            </div>
        </div>
    </section>

export default MapComponent