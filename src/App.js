import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function Header(props){ 
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/" onClick={(event)=>{
      event.preventDefault(); //클릭되어도 href값으로 이동하지 않도록 prevent
      props.onChangeMode(); //alert를 넣은 onChangeMode함수 불러옴
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}>
        <a id={t.id} href={'/read/'+t.id} onClick={event =>{
          event.preventDefault();
          props.onChangeMode(Number(event.target.id)); //event.target = 이벤트를 유발시킨 태그 = a태그
        }}>{t.title}</a>
      </li>)
      //REACT가 추적할 근거로서 key값을 부여
  }
  return <nav>
    <ol>
      {lis}
    </ol>
  </nav>
}
function Article(props){
  return <article>
    <h2>{props.title}</h2>
    {props.body}
  </article>
}
function App() {
  // const _mode = useState('REACT');
  // const mode = _mode[0];
  // const setMode = _mode[1];
  const [mode, setMode] = useState('REACT'); //setMode는 state(setMode 외의 이름들도 가능)
  const [id, setId] = useState('READ');
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  let content = null;
  if(mode === 'REACT') {
    content = <Article title="Welcome" body="Hello, WEB"></Article>
  }else if(mode === 'READ'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{   //arrow function
        setMode('REACT');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('READ');
        setId(_id);
      }}></Nav>
      {content}
    </div>
  );
}

export default App;

//Prop - Component를 사용하는 외부 사용자를 위한 데이터
//State - Component를 만드는 내부자를 위한 데이터
//Prop과 State에 따라 return값이 달라짐