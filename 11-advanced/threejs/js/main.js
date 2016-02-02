var app = app || {};

app.init = function () {
  // This keeps track of all objects we want to render
  // and the lights we want to use
  app.scene = new THREE.Scene();

  // Easy access for browser window height and width
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  // Defines what the browser will be looking at
  // 4 parameters
  //  field of view
  //  screen ratio
  //  how close to render things
  //  how far to render things
  app.camera = new THREE.PerspectiveCamera(45, app.width / app.height, 0.1, 1000);

  // Position our camera in a 3D scene
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  // Tell it what to look at (the center of the scene)
  app.camera.lookAt( app.scene.position );

  // Defines how the browser will see these elements, based on the camera angle. It also defines how it will do that behind the scenes (WebGL, Canvas, CSS3D, SVG)
  app.renderer = new THREE.WebGLRenderer();
  // Set the size (full screen)
  app.renderer.setSize(app.width, app.height);
  app.renderer.setClearColor( 0xECEFF1 ); // Setting the background color

  app.axes = new THREE.AxisHelper( 40 );
  app.scene.add(app.axes);

  // Put the element that the renderer created for us on to the page
  document.getElementById("output").appendChild(app.renderer.domElement);
  // Finally render everything
  app.renderer.render(app.scene, app.camera);
};

window.onload = app.init;