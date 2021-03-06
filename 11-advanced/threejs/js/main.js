var app = app || {};
app.step = 0;

app.controller = new function () {
  this.rotationSpeed = 0.02;
  this.bouncingSpeed = 0.02;
};

app.animate = function () {
  app.stats.update();

  app.step += app.controller.bouncingSpeed;
  app.sphere.position.x = 20 + ( 10 * ( Math.cos(app.step) ) );
  app.sphere.position.y = 2 + (10 * (Math.abs( Math.sin(app.step) )));

  // app.sphere.position.x = 2 + (20*(Math.sin(app.step)));
  // app.sphere.position.z = 2 + (20*(Math.cos(app.step)));

  app.cube.rotation.x += app.controller.rotationSpeed;
  app.cube.rotation.y += app.controller.rotationSpeed;
  app.cube.rotation.z += app.controller.rotationSpeed;

  requestAnimationFrame(app.animate);
  app.renderer.render(app.scene, app.camera);
};

app.addStats = function () {
  var stats = new Stats();
  stats.setMode(0); // FPS
  stats.domElement.style.position = "absolute";
  stats.domElement.style.top = "0px";
  stats.domElement.style.left = "0px";

  document.getElementById("stats").appendChild( stats.domElement );
  return stats;
};

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
  app.renderer.shadowMap.enabled = true;

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
  app.plane.receiveShadow = true;
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
  app.cube.castShadow = true;
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
  app.sphere.castShadow = true;
  app.scene.add(app.sphere);

  app.spotLight = new THREE.SpotLight(0xFFFFFF);
  app.spotLight.position.set(-40, 60, 10); // x, y, z
  app.spotLight.castShadow = true;
  app.scene.add(app.spotLight);

  app.controls = new THREE.OrbitControls( app.camera, app.renderer.domElement );
  // Put the element that the renderer created for us on to the page
  document.getElementById("output").appendChild(app.renderer.domElement);
  // Finally render everything
  app.renderer.render(app.scene, app.camera);

  app.stats = app.addStats();
  app.animate();

  app.gui = new dat.GUI();
  app.gui.add(app.controller, 'rotationSpeed', 0, 0.2);
  app.gui.add(app.controller, 'bouncingSpeed', 0, 0.2);
};

window.onload = app.init;

app.onResize = function () {
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera.aspect = app.width / app.height;
  app.camera.updateProjectionMatrix();

  app.renderer.setSize(app.width, app.height);
};

window.addEventListener("resize", app.onResize, false);