import { Pipe, PipeTransform, Type } from '@angular/core';
import { stringify, Omit } from '@tdm/core/tdm';
import { ExtractedCode } from '@webpack-ext/tdm-code-sample/client';

export interface CodeExtractSectionQuery extends Partial<Omit<ExtractedCode, 'code'>> { }

function invalidPipeArgumentError(type: Type<any>, value: any) {
  return Error(`InvalidPipeArgument: '${value}' for pipe '${stringify(type)}'`);
}

/**
 * Filter's a collection [[ExtractedCode]] instances based on a provided a query and returns the filtered collection or
 * when explicitly set, the code of each [[ExtractedCode]] instance.
 *
 * ```
 * ExtractedCodeResult instance | tdmCode[:query[:codeOnly]]`
 * ```
 *
 * The query is an object, similar to [[ExtractedCode]] but without the code, where each property->value pair in the
 * query must match the same property->value pair in the extracted code. If all match the query pass.
 *
 * To return the code instead of the [[ExtractedCode]] instance, set the 2nd parameter (`codeOnly`) to true.
 */
@Pipe({name: 'tdmCode'})
export class TdmCodeExtractPipe implements PipeTransform {
  transform(value: ExtractedCode[], query: CodeExtractSectionQuery[],
            codeOnly?: boolean): Array<string | ExtractedCode> {
    if (!Array.isArray(query) || query.length === 0) {
      throw invalidPipeArgumentError(TdmCodeExtractPipe, 'query');
    }
    if (!value) {
      return [];
    }

    if (!Array.isArray(value) && (value && Array.isArray((<any> value)['default'])) ) {
      value = (<any> value)['default'];
    } else if (!Array.isArray(value)) {
      throw invalidPipeArgumentError(TdmCodeExtractPipe, `Value must be an array, got ${stringify(value)}`);
    }

    const queryKeys = [];
    const result = value.filter( v => {
      for (let i in query) { // tslint:disable-line
        const keys = queryKeys[i] || (queryKeys[i] = Object.keys(query[i]));
        if (keys.every( k => v[k] === query[i][k])) {
          return true;
        }
      }
    });
    return codeOnly === true ? result.map( c => c.code ) : result;
  }
}
