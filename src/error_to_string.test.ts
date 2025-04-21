import assert from "assert";
import {errorToString} from "./error_to_string";

describe("errorToString", () => {
  it("basics", () => {
    assert.strictEqual(errorToString(undefined),'undefined');
    assert.strictEqual(errorToString('test'),'test');
    const value = errorToString(new Error('xyzzy'));
    assert.ok(value.startsWith('Error: xyzzy'));
  });
});
