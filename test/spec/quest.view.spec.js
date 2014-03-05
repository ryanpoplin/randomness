describe("App.Views.QuestView", function () {

  before(function () {
    this.$fixture = $("<div id='quest-view-fixture'></div>");
  });

  beforeEach(function () {
    this.$fixture.empty().appendTo($("#fixtures"));
    this.view = new App.Views.QuestView({
      el: this.$fixture,
      model: new App.Models.Quest()
    });
  });

  afterEach(function () {
    this.view.model.destroy();
  });

  after(function () {
    $("#fixtures").empty();
  });

  it("can render an empty quest", function () {
    var $title = $("#pane-title"),
      $text = $("#pane-text");

    expect($title.text()).to.equal("");
    expect($title.prop("tagName")).to.match(/h2/i);

    expect($text.text()).to.equal("Edit this quest...");
    expect($text.html()).to.equal("<p>Edit this quest...</p>");
  });

  it("can render more complicated markdown", function (done) {
    this.view.model.once("change", function () {
      var $title = $("#pane-title"),
        $text = $("#pane-text");

      expect($title.text()).to.equal("My Title");

      expect($text.html())
        .to.contain("My Heading</h2>").and
        .to.contain("<ul>").and
        .to.contain("<li>List item 2</li>");

      done();
    });

    this.view.model.set({
      title: "My Title",
      text: "## My Heading\n" +
            "* List item 1\n" +
            "* List item 2"
    });
  });
});