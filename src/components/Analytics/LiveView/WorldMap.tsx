"use client";
// components/MapChart.js or .tsx
import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const MapChart = () => {
  const chartRef = useRef(null);

  useLayoutEffect(() => {
    const root = am5.Root.new(chartRef.current);

    root.setThemes([am5themes_Animated.new(root)]);

    const chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "rotateX",
        panY: "none",
        projection: am5map.geoMercator(),
      })
    );

    const cont = chart.children.push(
      am5.Container.new(root, {
        layout: root.horizontalLayout,
        x: 20,
        y: 40,
      })
    );

    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Map",
      })
    );

    const switchButton = cont.children.push(
      am5.Button.new(root, {
        themeTags: ["switch"],
        centerY: am5.p50,
        icon: am5.Circle.new(root, {
          themeTags: ["icon"],
        }),
      })
    );

    switchButton.on("active", function () {
      if (!switchButton.get("active")) {
        chart.set("projection", am5map.geoMercator());
        chart.set("panY", "translateY");
        chart.set("rotationY", 0);
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0);
      } else {
        chart.set("projection", am5map.geoOrthographic());
        chart.set("panY", "rotateY");
        backgroundSeries.mapPolygons.template.set("fillOpacity", 0.1);
      }
    });

    cont.children.push(
      am5.Label.new(root, {
        centerY: am5.p50,
        text: "Globe",
      })
    );

    const backgroundSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {})
    );
    backgroundSeries.mapPolygons.template.setAll({
      fill: root.interfaceColors.get("alternativeBackground"),
      fillOpacity: 0,
      strokeOpacity: 0,
    });

    backgroundSeries.data.push({
      geometry: am5map.getGeoRectangle(90, 180, -90, -180),
    });

    const polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    const lineSeries = chart.series.push(am5map.MapLineSeries.new(root, {}));
    lineSeries.mapLines.template.setAll({
      stroke: root.interfaceColors.get("alternativeBackground"),
      strokeOpacity: 0.3,
    });

    const pointSeries = chart.series.push(am5map.MapPointSeries.new(root, {}));
    pointSeries.bullets.push(function () {
      const circle = am5.Circle.new(root, {
        radius: 4,
        tooltipY: 0,
        fill: am5.color(0xffba00),
        stroke: root.interfaceColors.get("background"),
        strokeWidth: 2,
        tooltipText: "{title}",
      });

      return am5.Bullet.new(root, {
        sprite: circle,
      });
    });

    const cities = [
      { title: "Vienna", latitude: 48.2092, longitude: 16.3728 },
      { title: "Minsk", latitude: 53.9678, longitude: 27.5766 },
      { title: "Brussels", latitude: 50.8371, longitude: 4.3676 },
      // Add more cities as needed
    ];

    cities.forEach((city) => {
      pointSeries.data.push({
        geometry: {
          type: "Point",
          coordinates: [city.longitude, city.latitude],
        },
        title: city.title,
      });
    });

    return () => {
      root.dispose();
    };
  }, []);

  return <div ref={chartRef} style={{ width: "100%", height: "500px" }}></div>;
};

export default MapChart;
