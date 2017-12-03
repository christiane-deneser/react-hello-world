// 1. lifecycle method that is called right after the comp. is created: constructor is called

// before React 16 state was defined in the constructor
 ```javascript
    constructor(props) {
        super(props);
        console.log('constructor');
    }
```

  // 2. React specific lifecycle method: componentWillMount is called right before the comp. will render
  
  // anything before comp. is rendered
  
  // access to 'this'. this.props is available
  
  // will NOT trigger a re-render
  
  ```javascript
    componentWillMount() {
      console.log('componentWillMount');
    }
  ```

  // 4. lifecycle method is called after render(), when comp. is rendered
  
  // will trigger a re-render, cause state is changed
 
  ```javascript
    componentDidMount() {
      console.log('mounted');
    }
  ```