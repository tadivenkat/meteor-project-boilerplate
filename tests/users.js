import assert from "assert";

const cube = (a) => a * a * a;

describe("users", function () {
  it('Should cube a number', async function () {
    assert.strictEqual(cube(3), 27);
  });
});
