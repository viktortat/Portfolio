import {IModel} from '../interfaces/IModel';

export class Extension {

    /**
     * Get specific property from each object in Array
     * and returns list of unique values
     * @static
     * @param {Object[]} source array of objects to extract from
     * @param {string} key Property name
     * @returns array of strings
     * @memberof Extension
     */

    public static getUniqueValues(source: IModel[] ,key: string):string[] {
        const uniqueSet=new Set(source.map(item=> item[key]).filter(i => i));

        return Array.from(uniqueSet).sort();
    }

  /**
   * Checks if array has element
   * if has removes it if not adds it
   * @param {string[]} source array to be checked
   * @param {string} value to be checked if add or remove from array
   * @returns {(any | string)[] | string[]}
   */
    public static toggleArray(source: string[]=[], value: string) {
      const index = source.indexOf(value);
      return index === -1
        ? [...source, value]
        : source.filter(item => item !== value);
    }
  }
