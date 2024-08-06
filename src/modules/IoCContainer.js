class IoCContainer {
    constructor() {
      this.dependencies = new Map();
    }
  
    register(token, dependency) {
      this.dependencies.set(token, dependency);
    }
  
    resolve(token) {
      return this.dependencies.get(token) || null;
    }
  }
  
  export default IoCContainer;