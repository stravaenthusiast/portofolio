// Simple interactivity: nav toggle and year
document.addEventListener('DOMContentLoaded',function(){
  const year = document.getElementById('year');
  if(year) year.textContent = new Date().getFullYear();

  // Directory -> viewer behavior
  const dirItems = document.querySelectorAll('.dir-item');
  const viewer = document.getElementById('viewer-content');
  const viewerSection = document.getElementById('viewer');
  const initialViewerHTML = viewer.innerHTML;

  const projects = {
    'carto-blender':{
      title:'Cartography — Blender',
      img:'https://via.placeholder.com/900x400?text=Blender+Maps',
      desc:'3D map visualizations and renderings produced in Blender.'n
    },
    'carto-arcgis':{
      title:'Cartography — ArcGIS',
      img:'https://via.placeholder.com/900x400?text=ArcGIS',
      desc:'GIS analyses and map outputs created with ArcGIS.'
    },
    'carto-illustrator':{
      title:'Cartography — Illustrator',
      img:'https://via.placeholder.com/900x400?text=Illustrator',
      desc:'Cartographic edits and figure polishing in Adobe Illustrator.'
    },
    'data-uav':{
      title:'Data collection — UAV/drone',
      img:'https://via.placeholder.com/900x400?text=UAV',
      desc:'Aerial data capture and processing workflows for UAV imagery.'
    },
    'data-teaching':{
      title:'Data collection — Teaching materials',
      img:'https://via.placeholder.com/900x400?text=Teaching',
      desc:'Exercises and materials designed for teaching field data collection.'
    },
    'data-meteo':{
      title:'Data collection — Meteorological',
      img:'https://via.placeholder.com/900x400?text=Meteorological',
      desc:'Meteorological sensor deployments and analysis.'
    },
    'write-academic':{
      title:'Writing — Academic',
      img:'https://via.placeholder.com/900x400?text=Academic+Writing',
      desc:'Selected academic publications and preprints.'
    },
    'write-passion':{
      title:'Writing — Passion projects',
      img:'https://via.placeholder.com/900x400?text=Passion+Projects',
      desc:'Personal essays and long-form pieces.'
    },
    'other-film':{
      title:'Other — Film photos',
      img:'https://via.placeholder.com/900x400?text=Film+Photos',
      desc:'A small selection of scanned film photography.'
    },
    'other-videos':{
      title:'Other — Making videos',
      img:'https://via.placeholder.com/900x400?text=Friends+Videos',
      desc:'Short videos and edits featuring friends and projects.'
    }
  };

  function loadProject(id){
    // remove landing background when viewing a project
    if(viewerSection) viewerSection.classList.remove('landing');
    const p = projects[id];
    if(!p) return;
    viewer.innerHTML = `
      <h2>${p.title}</h2>
      <img src="${p.img}" alt="${p.title}">
      <p>${p.desc}</p>
      <p class="links"><a href="#">Open</a> · <a href="#">Code</a></p>
    `;
  }

  // clicking the brand resets to landing view
  const brand = document.querySelector('.brand');
  if(brand){
    brand.addEventListener('click', (e)=>{
      e.preventDefault();
      dirItems.forEach(b=>b.classList.remove('active'));
      if(viewerSection) viewerSection.classList.add('landing');
      viewer.innerHTML = initialViewerHTML;
    });
  }

  dirItems.forEach(btn=>{
    btn.addEventListener('click',()=>{
      // set active
      dirItems.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      loadProject(btn.getAttribute('data-id'));
    });
  });
});
