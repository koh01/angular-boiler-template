import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export class Validator {

  // const RANGE = 'range';

  public static readonly validatorList = {
    range: {name: 'range', message:''},
    rangeLength: {name: 'rangeLength', message:''},

  };

  /**
   * 数値の範囲チェックバリデーション
   * @param min 最小値
   * @param max 最大値
   */
  public static range( min: number, max: number ): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (this.isEmptyValue(value)) {
        return null;
      }

      if (isNaN(value) ) {
        return this.reateValidationErrors(this.validatorList.range.name, `${min}〜${max}の値を入力してください`);
      }else{
        // 値が範囲ないに収まっていることを確認
        const isCheckResult = (((value >= min) && (value <= max)));
        // 正常の場合はnull、そうでない場合はエラー情報を出力する
        return (isCheckResult) ? null : this.reateValidationErrors(this.validatorList.range.name, `${min}〜${max}の値を入力してください`);
      }
    };
  }

  /**
   * 文字列長のチェックバリデーション
   * @param min 
   * @param max 
   */
  public static rangeLength(min: number, max: number): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const value = control.value;
      if (this.isEmptyValue(value)) {
        return null;
      }
      // 文字列長が範囲に収まっていることを確認
      const isCheckResult = (((value.length >= min) && (value.length <= max)));
      // 正常の場合はnull、そうでない場合はエラー情報を出力する
      return (isCheckResult) ? null : this.reateValidationErrors(this.validatorList.rangeLength.name, `文字数は${min}〜${max}で入力してください`);
    };
  }

  private static isEmptyValue(value: any): boolean {
    return (value === null || value === undefined || value === '');
  }
  /**
   * 正規表現チェックバリデーション
   * @param nameRe 
   */
  public static forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return (forbidden) ? null : this.reateValidationErrors('forbiddenName', control.value);
    };
  }

  private static reateValidationErrors(param: string, errorMessage: string): {[key: string]: ValidationErrors} {
    
    let result = {};
    result[param] = {value: errorMessage};
    return result;
    // こうやって書きたいけど、書き方がわからん
    // return {param : {value: errorMessage}};
  }
}