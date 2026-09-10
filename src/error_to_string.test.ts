import assert from "assert";
import {errorToString} from "./error_to_string";

describe("errorToString", () => {
  it("basics", () => {
    assert.strictEqual(errorToString(undefined),'undefined');
    assert.strictEqual(errorToString('test'),'test');
    const value = errorToString(new Error('xyzzy'));
    assert.ok(value.startsWith('Error: xyzzy'));
    const errorWithoutStack = new Error('fallback');
    Object.defineProperty(errorWithoutStack, 'stack', {value: undefined});
    assert.strictEqual(errorToString(errorWithoutStack), 'Error: fallback');
  });
});
