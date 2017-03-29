(function(){

    var tour = new Tour({
        storage : false
    });

    tour.addSteps([
      {
        element: ".one",
        placement: "bottom",
        title: "Welcome to our landing page!",
        content: "This tour will guide you through some of the features we'd like to point out."
      },
      {
        element: ".two",
        placement: "bottom",
        title: "Main navigation",
        content: "Here are the sections of this page, easily laid out."
      },
      {
        element: ".three",
        placement: "bottom",
        backdrop: true,
        title: "Main section",
        content: "This is a section that you can read. It has valuable information."
      },

    ]);

    // Initialize the tour
    tour.init();

    // Start the tour
    tour.start();

}());
