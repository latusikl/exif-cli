import { expect } from "chai";
import { it } from "mocha";
import argsParser from "../src/util/args-parser";

describe("Argument parser tests", () => {
  it("Should throw error when params not start with name parameter", () => {
    //given
    const testInputArgs = ["invalid", "params"];

    //them
    expect(() => argsParser.parseCommandParameters(testInputArgs)).to.throw(
      "Invalid parameters. Missing parameter name for parameter."
    );
  });
  it("Should parse parameters without value", () => {
    //given
    const paramName1 = "-p";
    const paramName2 = "--longName";
    const testInputArgs = [paramName1, paramName2];

    //when
    const result = argsParser.parseCommandParameters(testInputArgs);

    //them
    expect(result.size).to.equal(2);
    expect(result).to.have.all.keys(paramName1, paramName2);
    expect(result.get(paramName1)).to.be.undefined;
    expect(result.get(paramName2)).to.be.undefined;
  });
  it("Should parse parameters with value", () => {
    //given
    const paramName1 = "-p";
    const paramName2 = "--longName";
    const paramValue1 = "value1";
    const paramValue2 = "value2";
    const testInputArgs = [paramName1, paramValue1, paramName2, paramValue2];

    //when
    const result = argsParser.parseCommandParameters(testInputArgs);

    //them
    expect(result.size).to.equal(2);
    expect(result).to.have.all.keys(paramName1, paramName2);
    expect(result.get(paramName1)).to.be.equal(paramValue1);
    expect(result.get(paramName2)).to.be.equal(paramValue2);
  });
  it("Should parse parameters when some with values and some without", () => {
    //given
    const paramName1 = "-p";
    const paramName2 = "--longName";
    const paramName3 = "--longName2";
    const paramValue1 = "value1";
    const paramValue3 = "value2";

    const testInputArgs = [
      paramName1,
      paramValue1,
      paramName2,
      paramName3,
      paramValue3,
    ];

    //when
    const result = argsParser.parseCommandParameters(testInputArgs);

    //them
    expect(result.size).to.equal(3);
    expect(result).to.have.all.keys(paramName1, paramName2, paramName3);
    expect(result.get(paramName1)).to.be.equal(paramValue1);
    expect(result.get(paramName2)).to.be.undefined;
    expect(result.get(paramName3)).to.be.equal(paramValue3);
  });
    it("Should throw error when parameter passed twice", () => {
        //given
        const paramName1 = "-p";
        const paramValue1 = "value1";
        const paramValue2 = "value2";
        const testInputArgs = [paramName1, paramValue1, paramName1, paramValue2];

        //them
        expect(() => argsParser.parseCommandParameters(testInputArgs)).to.throw(
            "Invalid parameters. Missing parameter name for parameter."
        );
    });
});
