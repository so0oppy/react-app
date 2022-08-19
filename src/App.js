import logo from './logo.svg';
import './App.css';
function Header(props){
  console.log('props', props, props.title);
  return <header>
    <h1><a href="/" onClick={function(event){
      event.preventDefault(); //클릭되어도 href값으로 이동하지 않도록 prevent
      props.onChangeMode(); //alert를 넣은 onChangeMode함수 불러옴
    }}>{props.title}</a></h1>
  </header>
}
function Nav(props){
  const lis = []
  for(let i=0; i<props.topics.length; i++){
      let t = props.topics[i];
      lis.push(<li key={t.id}><a href={'/read/'+t.id}>{t.title}</a></li>)
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
  const topics = [
    {id:1, title:'html', body:'html is ...'},
    {id:2, title:'css', body:'css is ...'},
    {id:3, title:'javascript', body:'javascript is ...'}
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode={function(){
        alert('Header');
      }}></Header>
      <Nav topics={topics}></Nav>
      <Article title="Welcome" body="Hello, WEB"></Article>
      <Article title="Hi" body="Hello, REACT"></Article>
    </div>
  );
}

export default App;
