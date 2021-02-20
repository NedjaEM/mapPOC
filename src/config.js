var config = {
    style: 'mapbox://styles/nady196/ck87yam1c14z71inizvux7fjj',
    accessToken: 'pk.eyJ1IjoibmFkeTE5NiIsImEiOiJjazg1em9vangwMDJpM2RvNHkydXRoOHF3In0.x7fkytbDIi9m9NIA6_MoRg',
    showMarkers: false,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Mapping Cemeteries',
    subtitle: 'Exploring the changing New York City Deathscape',
    byline: 'By DH 70002',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: true,
            title: 'Landing View',
            image: 'https://cdn.vox-cdn.com/thumbor/g1EXyP04b-oEonLTpPWfsDGEaBQ=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/57299781/180526_12_29_50_5DS_6625.1508880383.jpg',
            description: 'This project will allow users to explore different cemeteries around New York City and their history',
            timeline:'',
            location: {
                center: [-73.9712, 40.7831],
                zoom: 9,
                pitch: 20,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'first',
            alignment: 'left',
            hidden: false,
            title: 'Start Exploring',
            image: 'https://cdn.vox-cdn.com/thumbor/g1EXyP04b-oEonLTpPWfsDGEaBQ=/0x0:2000x1333/1200x900/filters:focal(840x507:1160x827)/cdn.vox-cdn.com/uploads/chorus_image/image/57299781/180526_12_29_50_5DS_6625.1508880383.jpg',
            description: 'This project will allow users to explore different cemeteries around New York City and their history',
            location: {
                center: [-73.9712, 40.7831],
                zoom: 9,
                pitch: 20,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cem-1',
            alignment: 'right',
            hidden: false,
            title: 'African Burial Ground',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/African_National_Monument-1.jpg/250px-African_National_Monument-1.jpg',
            description: '',
            timeline: "placeholder for the timeline",
            location: {
                center: [-74.0045, 40.7145],
                zoom: 14,
                pitch: 20,
                bearing: -40
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'cem-2',
            alignment: 'left',
            hidden: false,
            title: 'Next Cemetery',
            image: '',
            description: '',
            timeline: "",
            location: {
                center: [-74.0045, 40.7145],
                zoom: 14,
                pitch: 20,
                bearing: -40
            },
            mapAnimation: '',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
