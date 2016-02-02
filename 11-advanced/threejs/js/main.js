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

  var planeGeometry = new THREE.PlaneGeometry(60, 20); // width, height
  var planeMaterial = new THREE.MeshLambertMaterial({
    color: 0xCFD8DC // a hexadecimal color
  });
  app.plane = new THREE.Mesh(planeGeometry, planeMaterial); // The thing that brings the material and the shape together
  app.plane.rotation.x = -0.5 * Math.PI;
  app.plane.position.x = 15;
  app.plane.position.y = 0;
  app.plane.position.z = 0;
  app.scene.add(app.plane);

  var cubeGeometry = new THREE.BoxGeometry(4, 4, 4); //width, height, breadth
  var cubeMaterial = new THREE.MeshLambertMaterial({
    color: 0xFF8F00,
    // wireframe: true
  }); // Set the properties
  app.cube = new THREE.Mesh(cubeGeometry, cubeMaterial); // Joined the shape and the material
  app.cube.position.x = -4;
  app.cube.position.y = 3;
  app.cube.position.z = 0;
  app.scene.add(app.cube); // Add it to the scene

  var sphereGeometry = new THREE.SphereGeometry(4, 30, 30);
  var sphereMaterial = new THREE.MeshLambertMaterial({
    color: 0x039BE5,
    // wireframe: true
  });
  app.sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
  app.sphere.position.x = 20;
  app.sphere.position.y = 4;
  app.sphere.position.z = 2;
  app.scene.add(app.sphere);

  app.spotLight = new THREE.SpotLight(0xFFFFFF);
  app.spotLight.position.set(-40, 60, 10); // x, y, z
  app.scene.add(app.spotLight);

  // Put the element that the renderer created for us on to the page
  document.getElementById("output").appendChild(app.renderer.domElement);
  // Finally render everything
  app.renderer.render(app.scene, app.camera);
};

window.onload = app.init;