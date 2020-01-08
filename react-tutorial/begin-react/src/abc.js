


const onChange = e => {
  const { name, value } = e.target;
  setInput({ ...inputs, [name]:value})
}


const state = {
  posts: [
    {
      id: 1,
      tititle: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 1,
          text: '와 정말 재밌습니다.'
        }
      ]
    },
    {
      id: 2,
      title: '제목입니다.',
      body: '내용입니다.',
      comments: [
        {
          id: 2,
          text: '또 다른 댓글은 이것입니다.'
        }
      ]
    }
  ],
  selectedId: 1
}
// 다음에 comment의 항목에 내용을 추가하기 위해서 불변성을 유지하면서 추가하기위해서는 복잡한 과정을 거쳐야한다.

const newState = {
  ...state,
  posts: state.posts.map(post =>
    post.id === 1 ?
      {
        ...post,
        comments:post.comments.concat({
          id:3,
          text:'새로운 댓글입니다.'
        })
      }
      : post
  )
};
/////////////////////////////////////////////
//immer라는 라이브러리를 사용하면 다음과 같이 작성할수있다.
//drft에 불변성을 신경써주지않고 다로 변경 할수있다.
const nextState=produce(state, draft=>{
  const post = draft.posts.find(post=>post.id ===1);
  post.comments.push({
  id:3,
  text:'와 정말 쉽다'
  });

});
//immer을 사용하면 불변성을 해치는 코드를 작성해도 대신 불변성을 유지해준다.
const [todo,setTodo]=useState({
  text:'hello',
  done:false
})
const onCLick=useCallback(()=>{
  setTodo(todo=>({//(함수형 업데이트)setTodo에 어떻게 업데이트할지 저의하는 함수를 넣어줄수있다.
    ...todo,
    done:!todo.done
  }));
},[]);//setTodo에 어떻게 업데이트할지 정의하는 함수를 넣어준다면,
//useCallback에 두번째 파라미터 의존함수에 값을 넣엊지않아도 된다는 장점이 있다.

//immer을 함수형 업데이트로 사용하는 경우
//useState을 사용하는 데 까다로운 객체를 관리해야하는 경우에 불변성을 유지해야하는 경우 사용한다.
const todo={
  text:'hello',
  done:false
}
const updater=produce(draft=>{
  draft.done=!draft.done
});
const nextTodo=updater(todo);
console.log(nextTodo);
//{text:'hello',done:true};



