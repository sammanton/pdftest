/* @flow */
import PDFObject from './PDFObject';

const hexStringRegex = /^[\dABCDEFabcdef]+/;
class PDFHexString extends PDFObject {
  string: string;

  constructor(string: string) {
    super();
    if (typeof string !== 'string') throw new Error(
      'Can only construct PDFHexStrings from Strings'
    );
    if (!string.match(hexStringRegex)) throw new Error(
      `Invalid characters in hex string: "${string}"`
    );
    this.string = string;
  }

  static fromString = (string: string) => new PDFHexString(string);

  toString = () => `<${this.string}>`;
}

export default PDFHexString;