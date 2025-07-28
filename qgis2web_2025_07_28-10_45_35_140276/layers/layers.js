var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 0.600000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_basemap_1 = new ol.format.GeoJSON();
var features_basemap_1 = format_basemap_1.readFeatures(json_basemap_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basemap_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basemap_1.addFeatures(features_basemap_1);
var lyr_basemap_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basemap_1, 
                style: style_basemap_1,
                popuplayertitle: 'basemap',
                interactive: false,
                title: '<img src="styles/legend/basemap_1.png" /> basemap'
            });
var format_basemap_2 = new ol.format.GeoJSON();
var features_basemap_2 = format_basemap_2.readFeatures(json_basemap_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_basemap_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_basemap_2.addFeatures(features_basemap_2);
var lyr_basemap_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_basemap_2, 
                style: style_basemap_2,
                popuplayertitle: 'basemap',
                interactive: false,
                title: '<img src="styles/legend/basemap_2.png" /> basemap'
            });
var format_Medaglionifemminilipunto_3 = new ol.format.GeoJSON();
var features_Medaglionifemminilipunto_3 = format_Medaglionifemminilipunto_3.readFeatures(json_Medaglionifemminilipunto_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Medaglionifemminilipunto_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Medaglionifemminilipunto_3.addFeatures(features_Medaglionifemminilipunto_3);
var lyr_Medaglionifemminilipunto_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Medaglionifemminilipunto_3, 
                style: style_Medaglionifemminilipunto_3,
                popuplayertitle: 'Medaglioni femminili punto',
                interactive: true,
                title: '<img src="styles/legend/Medaglionifemminilipunto_3.png" /> Medaglioni femminili punto'
            });
var group_Basemap = new ol.layer.Group({
                                layers: [lyr_basemap_1,lyr_basemap_2,],
                                fold: 'open',
                                title: 'Basemap'});

lyr_GoogleSatellite_0.setVisible(true);lyr_basemap_1.setVisible(true);lyr_basemap_2.setVisible(true);lyr_Medaglionifemminilipunto_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,group_Basemap,lyr_Medaglionifemminilipunto_3];
lyr_basemap_1.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'osm_way_id': 'osm_way_id', 'name': 'name', 'type': 'type', 'aeroway': 'aeroway', 'amenity': 'amenity', 'admin_level': 'admin_level', 'barrier': 'barrier', 'boundary': 'boundary', 'building': 'building', 'craft': 'craft', 'geological': 'geological', 'historic': 'historic', 'land_area': 'land_area', 'landuse': 'landuse', 'leisure': 'leisure', 'man_made': 'man_made', 'military': 'military', 'natural': 'natural', 'office': 'office', 'place': 'place', 'shop': 'shop', 'sport': 'sport', 'tourism': 'tourism', 'other_tags': 'other_tags', });
lyr_basemap_2.set('fieldAliases', {'fid': 'fid', 'osm_id': 'osm_id', 'name': 'name', 'highway': 'highway', 'waterway': 'waterway', 'aerialway': 'aerialway', 'barrier': 'barrier', 'man_made': 'man_made', 'railway': 'railway', 'z_order': 'z_order', 'other_tags': 'other_tags', });
lyr_Medaglionifemminilipunto_3.set('fieldAliases', {'fid': 'fid', 'N.CAT.': 'N.CAT.', });
lyr_basemap_1.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'osm_way_id': 'TextEdit', 'name': 'TextEdit', 'type': 'TextEdit', 'aeroway': 'TextEdit', 'amenity': 'TextEdit', 'admin_level': 'TextEdit', 'barrier': 'TextEdit', 'boundary': 'TextEdit', 'building': 'TextEdit', 'craft': 'TextEdit', 'geological': 'TextEdit', 'historic': 'TextEdit', 'land_area': 'TextEdit', 'landuse': 'TextEdit', 'leisure': 'TextEdit', 'man_made': 'TextEdit', 'military': 'TextEdit', 'natural': 'TextEdit', 'office': 'TextEdit', 'place': 'TextEdit', 'shop': 'TextEdit', 'sport': 'TextEdit', 'tourism': 'TextEdit', 'other_tags': 'TextEdit', });
lyr_basemap_2.set('fieldImages', {'fid': '', 'osm_id': 'TextEdit', 'name': 'TextEdit', 'highway': 'TextEdit', 'waterway': 'TextEdit', 'aerialway': 'TextEdit', 'barrier': 'TextEdit', 'man_made': 'TextEdit', 'railway': 'TextEdit', 'z_order': 'Range', 'other_tags': 'TextEdit', });
lyr_Medaglionifemminilipunto_3.set('fieldImages', {'fid': '', 'N.CAT.': '', });
lyr_basemap_1.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'osm_way_id': 'no label', 'name': 'no label', 'type': 'no label', 'aeroway': 'no label', 'amenity': 'no label', 'admin_level': 'no label', 'barrier': 'no label', 'boundary': 'no label', 'building': 'no label', 'craft': 'no label', 'geological': 'no label', 'historic': 'no label', 'land_area': 'no label', 'landuse': 'no label', 'leisure': 'no label', 'man_made': 'no label', 'military': 'no label', 'natural': 'no label', 'office': 'no label', 'place': 'no label', 'shop': 'no label', 'sport': 'no label', 'tourism': 'no label', 'other_tags': 'no label', });
lyr_basemap_2.set('fieldLabels', {'fid': 'no label', 'osm_id': 'no label', 'name': 'no label', 'highway': 'no label', 'waterway': 'no label', 'aerialway': 'no label', 'barrier': 'no label', 'man_made': 'no label', 'railway': 'no label', 'z_order': 'no label', 'other_tags': 'no label', });
lyr_Medaglionifemminilipunto_3.set('fieldLabels', {'fid': 'no label', 'N.CAT.': 'header label - visible with data', });
lyr_Medaglionifemminilipunto_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});