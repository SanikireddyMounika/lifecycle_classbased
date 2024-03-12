import React, { Component } from 'react'

export class App extends Component {
  constructor(props){
    super(props)
    console.log("component mount")
    this.state={data:null,loading:true}
   
  }
  componentDidMount(){
   
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res=>res.json()).then(data=>this.setState({data:data,loading:false}))
    .catch(err=>{
      console.log(err)
      this.setState({loading:false})
    })
    
  }
  componentDidUpdate(prevProps, prevState) {
   
    console.log('Component updated:', this.state);
  }

  componentWillUnmount() {
  
      console.log("component unmount")
    
  
  }
    

  
  
  render() {
    const { data, loading } = this.state;
    return (
      <div>
        <h1>Lifecycle Example</h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div>
            <p>Data fetched:</p>
            <pre>{JSON.stringify(data)}</pre>
          </div>
        )}
      </div>
    )
  }
}

export default App
