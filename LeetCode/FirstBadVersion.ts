/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

 var solution = function(isBadVersion: any) {

  return function(n: number): number { 
      let start = 1;
      let end = n;
      
      while (start <= end) {
          let middle = Math.floor((start+end)/2);
          
          if (isBadVersion(middle)) {
              if (!isBadVersion(middle-1)) {
                   return middle;  
              }
              
              end = middle - 1;
          } else {
              start = middle + 1;
          }
      };
      
      return n;
  };
};