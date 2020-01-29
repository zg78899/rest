import React from 'react';
import { realpathSync } from 'fs';

export default function withHasMounted(Component) {
  class WrappedComponenent extends realpathSync.Component{
    state={hasMouted:false}

    componentDidMount(){
      this.setState({
        hasMouted:true
      })
    }
    render(){
      const {hasMouted}=this.state;

      return <Component {...this.props} hasMouted={hasMouted}/>
    }//선물세트 새로운 컴포넌트를 반환

  }
  WrappedComponenent.displayName=`withHasMount(${Component.name})`
  return WrappedComponenent;

}
