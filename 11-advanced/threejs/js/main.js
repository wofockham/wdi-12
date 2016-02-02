var app = app || {};

app.init = function () {
  app.scene = new THREE.Scene();
  app.width = window.innerWidth;
  app.height = window.innerHeight;

  app.camera = new THREE.PerspectiveCamera(45, app.width / app.height, 0.1, 1000);
  app.camera.position.x = -30;
  app.camera.position.y = 40;
  app.camera.position.z = 30;
  app.camera.lookAt( app.scene.position );

  app.renderer = new THREE.WebGLRenderer();
  app.renderer.setSize(app.width, app.height);

  document.getElementById("output").appendChild(app.renderer.domElement);
};

window.onload = app.init;