// Type definitions for base64-js v0.0.8
// Project: https://github.com/beatgammit/base64-js
// Definitions by: Jamie Couperwhite <https://github.com/jamcoupe>
// Definitions: https://github.com/borisyankov/DefinitelyTyped



export declare class Base64 {
  static fromByteArray(array: Uint8Array): string;
  static toByteArray(base64: string): Uint8Array;
}
