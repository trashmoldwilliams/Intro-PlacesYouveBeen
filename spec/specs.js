describe("Place", function(){
  it("Will make a new place object", function(){
    var portland = new Place ("Portland", "Oregon","Hawthorne Bridge", "Summer", "Very nice.");
    expect(portland.location).to.eql(["Portland", "Oregon"]);
    expect(portland.landmarks).to.equal("Hawthorne Bridge");
    expect(portland.season).to.equal("Summer");
    expect(portland.notes).to.equal("Very nice.");
  });

  it("Will return a full location name", function(){
    var portland = new Place ("Portland", "Oregon","Hawthorne Bridge", "Summer", "Very nice.");
    expect(portland.locationName()).to.equal("Portland, Oregon");
  });
});
