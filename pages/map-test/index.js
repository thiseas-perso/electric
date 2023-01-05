import Head from 'next/head';
import React, { useRef, useState } from 'react';
import ReactMapGL, { Source, Layer, ScaleControl } from 'react-map-gl';
import * as turf from '@turf/turf';

const MapTest = () => {
  let lon = 2.35;
  let lat = 48.85;
  let radius = 200;
  let center = [lon, lat];
  const options = { steps: 100, units: 'kilometers', properties: {} };
  const circle = turf.circle(center, radius, options);
  const line = turf.lineString(...circle.geometry.coordinates);

  let radiusB = 250;
  let centerB = [lon, lat];
  const optionsB = { steps: 100, units: 'kilometers', properties: {} };
  const circleB = turf.circle(centerB, radiusB, optionsB);
  const lineB = turf.lineString(...circleB.geometry.coordinates);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: 600, // , [-87.61694, 41.86625]
    latitude: lat,
    longitude: lon,
    zoom: 4.5,
    pitch: 0,
    bearing: 0,
  });
  const mapRef = useRef(null);
  return (
    <>
      <Head>
        <title>[TEST MAP]</title>
        <meta name="description" content="[DESCRIPTION HERE]" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>MapTest</div>
      <ReactMapGL
        {...viewport}
        interactive={true}
        ref={mapRef}
        onClick={(e, v) => console.log(e)}
        style={{ width: 600, height: 400 }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        transitionDuration={100}
        onMove={(evt) => setViewport(evt.viewport)}
      >
        {/* <div style={{ position: 'absolute', bottom: 200, left: 100 }}>
          <ScaleControl maxWidth={100} unit={'metric'} />
        </div> */}

        {/* first circle */}
        <Source id="circle-1" type="geojson" data={circle}>
          <Layer
            id="circle-1-fill"
            type="fill"
            paint={{
              'fill-color': '#000',
              'fill-opacity': 0.2,
              'fill-outline-color': 'white',
            }}
          />
        </Source>

        <Source id="circle-1-line" type="geojson" data={line}>
          <Layer
            id="circle-1-line"
            type="line"
            paint={{
              'line-color': 'red',
              'line-width': 2,
            }}
          />
        </Source>

        {/* second circle */}
        <Source id="circle-2" type="geojson" data={circleB}>
          <Layer
            id="circle-2-fill"
            type="fill"
            paint={{
              'fill-color': '#000',
              'fill-opacity': 0.2,
              'fill-outline-color': 'white',
            }}
          />
        </Source>

        <Source id="circle-2-line" type="geojson" data={lineB}>
          <Layer
            id="circle-2-line"
            type="line"
            paint={{
              'line-color': 'black',
              'line-width': 2,
            }}
          />
        </Source>
      </ReactMapGL>
    </>
  );
};

export default MapTest;
