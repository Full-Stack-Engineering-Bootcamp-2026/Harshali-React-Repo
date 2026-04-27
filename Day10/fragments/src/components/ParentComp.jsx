import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
    constructor(props){
        super(props)
        this.state={
            names:'harshali'
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                names:'vishwas'
            })
        },2000)
    }
  render() {
    console.log('*********parent compo render***********')
    return (
      <div>
        Parent Component
        <MemoComp names={this.state.names}/>
      {/*<RegComp names={this.state.names}/> */}  
       {/*<PureComp names={this.state.names}*/}

      </div>
    )
  }
}

export default ParentComp
