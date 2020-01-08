import React,{Component} from 'react'
import * as Sentry from '@sentry/browser';

class ErrorBoundary extends Component{
  state={
   error:false
  }
  //에러가 발생하는 상황에 이함수가 호출이 된다.
  //componentDidCatch의 역할은 아직 발견하지못한 error가 있을때 사용자에게 에러가 발생했다는 것을 보여줄수있다.
  componentDidCatch(error,info){//파라미터로 첫번째 error 두번째 어디에서 에러가 빌생했는지를 보여준다.
    console.log('에러가 발생했습니다.');
    console.log({
      error,
      info
    });

    this.setState({
      error:true//state의 error의 값을 turef로 바꿔준다.
    })
    if(process.env.NODE_ENV === 'production'){
      Sentry.captureException(error,{extra:info});
    }

  }
  render(){
    if(this.state.error){
      return <h1>에러발생!!1</h1>
    }
    return this.props.children;
  }

}
export default ErrorBoundary;

