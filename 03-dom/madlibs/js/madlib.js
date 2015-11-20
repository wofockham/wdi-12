var MadLib = {
  makeMadLib: function (noun, adjective, person) {
    var story = [person, 'really likes', adjective, noun + '.'].join(' ');
    return story;
  }
};