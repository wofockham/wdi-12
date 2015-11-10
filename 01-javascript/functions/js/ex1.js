var tellFortune = function (numKids, partnerName, geoLocation, job) {
  var fortune = "You will be a " + job + " in " + geoLocation +
                ", and married to " + partnerName + " with " + numKids + " kids.";

  console.log(fortune);

  return fortune;

};

tellFortune(4, 'Dwayne', 'Fiji', 'landscape gardener');
tellFortune(0, 'Fiona', 'Tasmania', 'distiller');
