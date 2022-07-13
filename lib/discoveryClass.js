/**
 * This contains the Discovery class.
 *
 * @constructor
 * @param {String} className - returns the name of the discovery class.
 * @param {Number} classSize  - returns the number of discoverers in class.
 */

 class DiscoveryClass {
    constructor(className, classSize,) {
      this.className = className;
      this.classSize = classSize;
    }
  
    getClassName() {
      return this.className;
    }
  
    getClassSize() {
      return this.classSize;
    }
  }