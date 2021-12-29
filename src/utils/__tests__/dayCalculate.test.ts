import dayCalculate from "../dayCalculate";

describe("dayCalculate.ts", () => {
  describe("should return how many days are left from today", () => {
    it("called by string date", () => {
      expect(dayCalculate("2022-01-01")).toReturnWith(3);
    });

    it("called by Date object", () => {
      expect(dayCalculate(new Date("2022-01-01"))).toReturnWith(3);
    });
  });
});
