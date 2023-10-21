//Three js Moduls===============================================================================================
import * as THREE from "https://unpkg.com/three@0.126.1/build/three.module.js";
import { OrbitControls } from "https://unpkg.com/three@0.126.1/examples/jsm/controls/OrbitControls.js";
import { RGBELoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/RGBELoader.js";
import { GLTFLoader } from "https://unpkg.com/three@0.126.1/examples/jsm/loaders/GLTFLoader.js";
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//Esri Api=========================================================
require([
  "esri/views/SceneView",
  "esri/WebScene",
  "esri/widgets/Slider",
  "esri/Camera",
  "esri/geometry/Mesh",
  "esri/symbols/MeshSymbol3D",
  "esri/symbols/FillSymbol3DLayer",
  "esri/Color",
  "esri/symbols/edges/SolidEdges3D",
  "esri/core/promiseUtils",
  "esri/geometry/support/MeshMaterialMetallicRoughness",
  "esri/geometry/support/MeshComponent",
  "esri/geometry/Polygon",
  "esri/geometry/geometryEngine",
  "esri/Graphic",
  "esri/geometry/Point",
  "esri/layers/GraphicsLayer",
  "esri/layers/SceneLayer",
  "esri/widgets/Daylight",
  "esri/widgets/Expand",
  "esri/widgets/FeatureTable",
  "esri/core/reactiveUtils",
  "esri/layers/support/LabelClass",
  "esri/widgets/BuildingExplorer",
], (
  SceneView,
  WebScene,
  Slider,
  Camera,
  Mesh,
  MeshSymbol3D,
  FillSymbol3DLayer,
  Color,
  SolidEdges3D,
  promiseUtils,
  MeshMaterialMetallicRoughness,
  MeshComponent,
  Polygon,
  geometryEngine,
  Graphic,
  Point,
  GraphicsLayer,
  SceneLayer,
  Daylight,
  Expand,
  FeatureTable,
  reactiveUtils,
  LabelClass,
  BuildingExplorer
) => {
  let selectedFeature, id;
  const scene = new WebScene({
    portalItem: {
      //  id: "f13ac5c0484e49cb9e71e54a6cf45a24"
      // id: "753d4d130d884660aa305d6ff2a330b6",

      //Final
      // id: "f5d32981dd2b4ac5bbbee420629be2ee"
      //merge Test
      //  id: "8e68246c449b43f8bd78b918ccb8ffa1"
      //merge test data
      //    id: "bd6bc962ee074025a34205c878b17b23"
      //FloorForTest
      // id:"e9d7973b33f6482d96f113042a5d80b4"
      //final
    //  id:"511a0bf4f2fd45d09f9d94cd6e0819a9"
      //finalScene
      id: "1ed33ff1ecb948c380337218566e0976",
    },
  });

  console.log("scene", scene);
  const walls = new GraphicsLayer({
    elevationInfo: {
      mode: "absolute-height",
    },
  });

  const view = new SceneView({
    map: scene,
  
    container: "viewDiv",
    ui: {
      components: ["zoom"],
    },
    highlightOptions: {
      haloColor: [255, 38, 150],
      color: [255, 255, 255],
      fillOpacity: 0.3,
    },
    environment: {
      lighting: {
        type: "sun",
      },
    },
  });

  //DayLight=====================================================================
  const daylight = new Expand({
    content: new Daylight({
      view: view,
      dateOrSeason: "season",
    }),
    Index: 3,
  });
  view.ui.add(daylight, "top-left");

  //AddEvent to IndoorIcon======================
  let IndoorIcon = document.getElementById("IndoorIcon");
  let card = document.getElementById("card");

  // view.on("click", (event) => {
  //   let x = event.screenPoint.x;
  //   let y = event.screenPoint.y;

  //   card.style.left = `${x}px`;
  //   card.style.top = `${y}px`;
  // });
  // let check = true;
  // IndoorIcon.addEventListener("click", () => {
  //   if (check == true) {
  //     card.style.visibility = "visible";
  //     check = false;
  //   } else {
  //     card.style.visibility = "hidden";
  //     check = true;
  //   }
  // });

  //ApartmentsLayers===============================================================================
  let Floor1URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F1_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor2URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F2_APT_00_Final_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor3URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F3_APT_00_Final_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor4URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F4_APT_00_Final_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor5URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F5_APT_00_Final_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor6URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F6_APT_00_Final_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor7URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F7_APT_00_Final_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor8URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F8_APT_00_FinalPaste_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor9URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F9_APT_01_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor10URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F10_APT_00_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor11URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F11_APT_00_ProcedurallyGeneratedMultipatches/SceneServer";
  let Floor12URL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_F12_APT_00_ProcedurallyGeneratedMultipatches/SceneServer";
  let RoofURL =
    "https://services7.arcgis.com/DwizEDmrQPSoeQNj/arcgis/rest/services/SM_FRoof_APT_ProcedurallyGeneratedMultipatches/SceneServer";

  let Floor1 = new SceneLayer({
    url: Floor1URL,
  });

  let Floor2 = new SceneLayer({
    url: Floor2URL,
  });

  let Floor3 = new SceneLayer({
    url: Floor3URL,
  });

  let Floor4 = new SceneLayer({
    url: Floor4URL,
  });

  let Floor5 = new SceneLayer({
    url: Floor5URL,
  });

  let Floor6 = new SceneLayer({
    url: Floor6URL,
  });

  let Floor7 = new SceneLayer({
    url: Floor7URL,
  });

  let Floor8 = new SceneLayer({
    url: Floor8URL,
  });

  let Floor9 = new SceneLayer({
    url: Floor9URL,
  });

  let Floor10 = new SceneLayer({
    url: Floor10URL,
  });

  let Floor11 = new SceneLayer({
    url: Floor11URL,
  });

  let Floor12 = new SceneLayer({
    url: Floor12URL,
  });

  let Roof = new SceneLayer({
    url: RoofURL,
  });

    // scene.add(
    //   Floor1,
    // );


  //SliderOfFloors===================================================
  const slider = new Slider({
    container: "sliderDiv",
    min: 0,
    max: 7,
    values: [0],
    steps: 1,
    snapOnClickEnabled: false,
    visibleElements: {
      labels: true,
      rangeLabels: true,
    },
  });
  view.when(() => {
    slider.on("thumb-drag", () => {
    //  SelectApartment();
    SelectApartmentOpacity()
    });
  });

  //Price=======================================================

  price.addEventListener("change", () => {
    selectPrice(sceneLayers[slider.values]);
  });

  //EventDeopdowenlistApartment Status
  ApartmetsStatus.addEventListener("change", () => {
    let sceneoflayers = scene.layers.items;
    qureyApartmentStatus(sceneoflayers[slider.values]);
  });

  //Function for select price
  function selectPrice(layer) {
    let price = document.getElementById("price");
    price.value == "0" ? (layer.definitionExpression = `OBJECTID ="*"`) : false;
    price.value == "50000-100000"
      ? (layer.definitionExpression = `Pos_Bottom_Align IN (50,100)`)
      : false;
    price.value == "100000-150000"
      ? (layer.definitionExpression = `Pos_Bottom_Align IN (100,150)`)
      : false;
    price.value == "150000-200000"
      ? (layer.definitionExpression = `Pos_Bottom_Align IN (150,200)`)
      : false;
  }

  //Function for select floors from slider
  function SelectApartment() {
    let layersInScene = scene.layers.items;
    for (let i = 0; i < layersInScene.length; i++) {
      if (i == slider.values) {
        layersInScene[i].visible = true;
      } else if (slider.values == 0) {
        layersInScene[i].visible = true;
      } else {
        layersInScene[i].visible = false;
      }
    }
  }

  //select apartment with opacity
  function SelectApartmentOpacity() {
    let layersInScene = scene.layers.items;
    for (let i = 0; i < layersInScene.length; i++) {
      if (i == slider.values) {
        layersInScene[i].visible = true;
       
      }else if(i< slider.values) {
        layersInScene[i].visible = true;
           
        layersInScene[i+1].opacity = 1;
        layersInScene[i].opacity = 0.2;
      } else if (slider.values == 0) {
        layersInScene[i].visible = true;
      
      } else{
        layersInScene[i].visible = false;
      }
    }
  }


  //Function For create query in Apaertments
  let highlight;
  function qureyApartmentStatus(layer) {
    let ApartmetsStatus = document.getElementById("ApartmetsStatus");

    if (ApartmetsStatus.value == "available") {
      view.when(() => {
        view.whenLayerView(layer).then(function (layerView) {
          let query = layer.createQuery();
          query.where = "status = 1";
          query.outFields = ["*"];
          layer.queryFeatures(query).then(function (result) {
            if (highlight) {
              highlight.remove();
            }

            console.log("QueryRuslt", result);
            view.highlightOptions = {
              haloColor: [255, 200, 30],
            };
            highlight = layerView.highlight(result.features);
          });
        });
      });
    } else if (ApartmetsStatus.value == "not available") {
      view.when(() => {
        view.whenLayerView(layer).then(function (layerView) {
          let query = layer.createQuery();
          query.where = "status = 0";
          query.outFields = ["*"];
          layer.queryFeatures(query).then(function (result) {
            if (highlight) {
              highlight.remove();
            }

            console.log("QueryRuslt", result);
            view.highlightOptions = {
              haloColor: [255, 38, 150],
            };
            highlight = layerView.highlight(result.features);
          });
        });
      });
    } else if (ApartmetsStatus.value == "all") {
      highlight.remove();
    }
  }

  //Slide Image And description====================================================
  let description=document.getElementById("description")
  let plan=document.getElementById("plan")
  let carouselExampleDark=document.getElementById("carouselExampleDark")
  let image1=document.getElementById("image1")
  let image2=document.getElementById("image2")
  view.on("click",((event)=>{
  

    
    view.hitTest(event).then((res)=>{
     let objectid=res.results[0].graphic.attributes.OBJECTID
     view.whenLayerView(scene.layers.items[1]).then((layerView)=>{
     
      if(highlight){
        highlight.remove()
      }
    
      highlight=layerView.highlight(res.results[0].graphic)
     })

   
    
     if(objectid==11){
      image1.src="https://i.pinimg.com/736x/d0/f4/07/d0f40703e83fda37512215e7d0614e27--d-photo-floor-plans.jpg"
      image2.src="https://www.davisapartmentsforrent.com/almondwood/wp-content/uploads/sites/3/2020/08/almondwood-two-bedroom-apartment-iso-2-1080-.jpg"
      description.textContent="Some representative placeholder content for the first slide Some representative placeholder content for the first slide"
      plan.src="https://www.homeplansindia.com/uploads/1/8/8/6/18862562/hfp-4005-ground-floor_orig.jpg"
      plan.style.visibility="visible"
      carouselExampleDark.style.visibility="visible"
      description.style.visibility="visible"
    

     }else if(objectid==3){
      image1.src="http://cdn.home-designing.com/wp-content/uploads/2014/06/Apartment-house-plan-for-Young-Professional.jpg"
      image2.src="https://media.istockphoto.com/id/1158053848/photo/modern-interior-design-isolated-floor-plan-with-white-walls-blueprint-of-apartment-house.jpg?s=612x612&w=0&k=20&c=w41RLsMlOhN74fzh6dgAGvPcQIPRCUOfwsSZcZKQB4o="
      description.textContent="Some representative placeholder content for the first slide Some representative placeholder content for the first slideSome representative placeholder content for the first slideSome representative placeholder content for the first slideSome representative placeholder content for the first slideSome representative placeholder content for the first slide"
     
      plan.src="https://www.researchgate.net/publication/355173321/figure/fig1/AS:1077677742141442@1633949804772/Sample-floor-plan-image-with-the-specification-of-different-room-sizes-and-furniture.jpg"
      carouselExampleDark.style.visibility="visible"
      description.style.visibility="visible"
      plan.style.visibility="visible"
     }else if(objectid==24){
      image1.src="https://i.pinimg.com/736x/a1/e4/08/a1e408d7d5129bfea6ba66a27288b51b--d-home-design-house-design.jpg"
      image2.src="https://www.davisapartmentsforrent.com/almondwood/wp-content/uploads/sites/3/2020/08/almondwood-two-bedroom-apartment-iso-2-1080-.jpg"
      description.textContent="Some representative placeholder content for the first slide Some representative placeholder content for the first slide.Some representative placeholder content for the first slide"
     
      plan.src="https://images.adsttc.com/media/images/5e72/bff7/b357/6549/2a00/01a4/slideshow/1.Floor_plan.jpg?1584578541"
      carouselExampleDark.style.visibility="visible"
      description.style.visibility="visible"
      plan.style.visibility="visible"
     }
    })


  }))

  //FloorsLevels Show And Hide==========================================
  let level1 = document.getElementById("level1");
  let level2 = document.getElementById("level2");
  let level3 = document.getElementById("level3");
  let level4 = document.getElementById("level4");
  let sceneLayers = scene.layers.items;
  let flag = true;
  

  //scene.addAll([Apartment1,Apartment2,Apartment3,Apartment4,Apartment5,Apartment6])
  view.when(() => {
    let sceneLayers = scene.layers.items;
    // sceneLayers[0].opacity = 0.2

    console.log("sceneLayers", sceneLayers);
    for (let i = 0; i < sceneLayers.length; i++) {
      sceneLayers[i].popupEnabled = false;
      sceneLayers[i].outFields = "*";

      view.on("click", (e) => {
        view.hitTest(e).then((response) => {
          console.log("Apartment Response", response);
          //  let objectid = response.results[0].graphic.attributes.OBJECTID
          // sceneLayers[0].definitionExpression=`OBJECTID = ${objectid}`

          //  if(response.results[0].graphic.layer.title != sceneLayers[i].title){
          //   sceneLayers[i].visible=false
          // sceneLayers[i].visible=false

          //  let faetures =response.results
          // for (let i = 0; i < faetures.length; i++) {
          //   faetures[i].graphic.visible=false

          // }
          // faetures[0].layer.visible=false
          //  }
        });
      });
    }
  });

 

  //===============================================================================================

  let bimBuilding = new SceneLayer({
    url: "https://tiles.arcgis.com/tiles/DwizEDmrQPSoeQNj/arcgis/rest/services/BIM_Manarat_APT_6BR_VILLAarcgisversion_WSL1/SceneServer",
  });

  // scene.add(bimBuilding)
  // Create a box mesh geometry
  let location = new Point({
    // x:6137722.3625406455,
    // y:2884169.192501818,
    // z:0
    longitude: 55.1395038397816,
    latitude: 25.0660544557148,

    // x:6137980.786691305,
    // y:2883575.8906426644,
    z: 100,
  });
  //Label Of Layer
  let statesLabelClass = new LabelClass({
    labelExpressionInfo: { expression: "$feature.NAME" },
    symbol: {
      type: "label-3d", // autocasts as new LabelSymbol3D()
      symbolLayers: [
        {
          type: "text", // autocasts as new TextSymbol3DLayer()
          material: { color: "#f1c40f" },
          size: 12,
          weight: "bold",
          background: { color: [0, 0, 0, 0.75] },
        },
      ],
      verticalOffset: {
        screenLength: 40,
        maxWorldLength: 100,
        minWorldLength: 20,
      },
      callout: {
        type: "line", // autocasts as new LineCallout3D()
        size: 1.5,
        color: "white",
        border: {
          color: "black",
        },
      },
    },
  });

 

  //DOM Elements=============================================================================

  let Name = document.getElementById("Name");
  let floors = document.getElementById("floors");
  let AvailableApartments = document.getElementById("AvailableApartments");
  let UnavailableApartments = document.getElementById("UnavailableApartments");
  let City = document.getElementById("City");
  let Height = document.getElementById("Height");
  let Type = document.getElementById("Type");
  let Structrual_Material = document.getElementById("Structrual_Material");
  let Function = document.getElementById("Function");

  //Chart js======================================
  const ctx = document.getElementById('myChart');

  let floorChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Apartment'],
      datasets: [{
        label: 'Price',
        data: [0],
        borderWidth: 2,
        
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: 'Price of Apartment'
        }
      }

    }
  });

  // const ctx2 = document.getElementById('mydoughnut');

  // let ApartCahrt = new Chart(ctx2, {
  //   type: 'doughnut',
  //   data: {
  //     labels: ['Available Apartments', 'Unavailable Apartments'],
  //     datasets: [{
  //       label: 'Number',
  //       data: [0, 0],
  //       backgroundColor: [
  //         'rgb(255, 205, 86)',
  //         'rgb(255, 99, 132)',

  //       ],
  //       hoverOffset: 10,
  //       borderWidth: 1
  //     }]
  //   },
  //   options: {

  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Apartments'
  //       }
  //     }
  //   }
  // });
  let filterContainr = document.getElementById("filterContainr");
  view.on("click", function (event) {
    view.hitTest(event).then(function (response) {
      console.log("response", response);
      if (response.results.length) {
        console.log("attrib", response.results[0].graphic.attributes);

        // filterContainr.style.visibility = "visible";

        // Name.textContent =
        //   response.results[0].graphic.attributes.Material_Transparency;
        // floors.textContent = response.results[0].graphic.attributes.OBJECTID;
        // City.textContent = response.results[0].graphic.attributes.Normals;
        // Height.textContent = response.results[0].graphic.attributes.Pos_Center;
        // Type.textContent = response.results[0].graphic.attributes.Type;
        // Structrual_Material.textContent =
        //   response.results[0].graphic.attributes.Structrual_Material;
        // Function.textContent = response.results[0].graphic.attributes.Function_;
        // AvailableApartments.textContent =
        //   response.results[0].graphic.attributes.Available;
        // UnavailableApartments.textContent =
        //   response.results[0].graphic.attributes.Unavailable;

        function updateChart(chart, dataValues, dataValues2) {
          chart.data.datasets[0].data = dataValues;
          chart.data.datasets[0].data[1] = dataValues2;
          chart.update();
        }

        // updateChart(
        //   ApartCahrt,
        //   [response.results[0].graphic.attributes.OBJECTID],
        //   [response.results[0].graphic.attributes.Pos_Center]
        // );
        updateChart(floorChart, [
          response.results[0].graphic.attributes.Pos_Bottom_Align,
        ]);

       
      }
    });
  });

});
