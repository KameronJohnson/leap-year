describe('leapYear', function() {
  it("is false if a year is not divisible by 4", function() {
    expect(leapYear(1999)).to.equal(false);
  });

  it("is true for most years divisible by 4", function() {
    expect(leapYear(1996)).to.equal(true);
  });

  it("is false for most years divisible by 100", function() {
    expect(leapYear(2100)).to.equal(false);
  });

  it("is true for years divisible by 400", function() {
    expect(leapYear(2400)).to.equal(true);
  });
});
