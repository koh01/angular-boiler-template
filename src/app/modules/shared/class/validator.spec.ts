import { Validator } from './validator';
import { FormControl } from '@angular/forms';

fdescribe('Validatorのテスト', () => {

  fdescribe('rangeのテスト', () => {
    const min = 3;
    const max = 5;
    const message = `${min}〜${max}の値を入力してください`;
    const specFunc1 = Validator.range(min, max);
    it('No001_正常な値の場合、nullになるか', () => {
      expect(specFunc1(new FormControl(min))).toBeNull();
    });
    it('No002_下限の場合、nullになるか', () => {
      expect(specFunc1(new FormControl(min))).toBeNull();
    });
    it('No003_上限の場合、nullになるか', () => {
      expect(specFunc1(new FormControl(max))).toBeNull();
    });
    it('No004_空文字の場合、nullになるか', () => {
      expect(specFunc1(new FormControl(''))).toBeNull();
    });
    it('No005_nullの場合、nullになるか', () => {
      expect(specFunc1(new FormControl(null))).toBeNull();
    });
    // エラー系
    it('No501_下限より小さい場合、エラーになるか', () => {
      expect(specFunc1(new FormControl(min - 1)).range.value).toEqual(message);
    });
    it('No502_上限より大さい場合、エラーになるか', () => {
      expect(specFunc1(new FormControl(max + 1)).range.value).toEqual(message);
    });
    it('No503_文字列を受け取った場合、エラーになるか', () => {
      expect(specFunc1(new FormControl("aaa")).range.value).toEqual(message);
    });
    it('No504_オブジェクトを受け取った場合、エラーになるか', () => {
      expect(specFunc1(new FormControl({})).range.value).toEqual(message);
    });
  });
  fdescribe('rangeLengthのテスト', () => {
    const min = 3;
    const max = 5;
    const message = `文字数は${min}〜${max}で入力してください`;
    const specFunc1 = Validator.rangeLength(min, max);
    it('No001_正常な値の場合、nullになるか', () => {
      expect(specFunc1(new FormControl("1234"))).toBeNull();
    });
    it('No002_下限の場合、nullになるか', () => {
      expect(specFunc1(new FormControl("123"))).toBeNull(null);
    });
    it('No003_上限の場合、nullになるか', () => {
      expect(specFunc1(new FormControl("12345"))).toBeNull(null);
    });
    // エラー系
    it('No501_下限より短い場合、エラーになるか', () => {
      expect(specFunc1(new FormControl("12")).rangeLength.value).toEqual(message);
    });
    it('No502_上限より短い場合、エラーになるか', () => {
      expect(specFunc1(new FormControl("123456")).rangeLength.value).toEqual(message);
    });
    it('No503_オブジェクトを受け取った場合、エラーになるか', () => {
      expect(specFunc1(new FormControl({})).rangeLength.value).toEqual(message);
    });
  });
});