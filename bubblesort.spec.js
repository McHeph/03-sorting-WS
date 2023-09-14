describe("Bubble Sort", function () {
  it("handles an empty array", function () {
    expect(bubbleSort([])).toEqual([]);
  });
  it("handles an unordered array", function () {
    spyOn(window, "swap").and.callThrough();
    expect(bubbleSort([1, 4, 87, 2, 6])).toEqual([1, 2, 4, 6, 87]);
    expect(window.swap.calls.count()).toEqual(3);
  });
  it("handles an ordered array", function () {
    spyOn(window, "swap").and.callThrough();
    expect(bubbleSort([1, 2, 3, 4, 5, 6, 24])).toEqual([1, 2, 3, 4, 5, 6, 24]);
    expect(window.swap.calls.count()).toEqual(1);
  });
  it("handles an inverted array", function () {
    spyOn(window, "swap").and.callThrough();
    expect(bubbleSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4]);
    expect(window.swap.calls.count()).toEqual(4);
  });
});
