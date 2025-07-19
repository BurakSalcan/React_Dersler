import './App.css';

function App() {
  return (
  <>
  {/*Yorum satırı bu şekilde yazılır.*/}
    <div className="App">
      <h2>React Temellerini Öğreniyorum.</h2>
    </div>
    <div className="App">
      <h3>Hiyerarşik kullanım.</h3>
      <p>React fonksiyonlarının içerisinden mutlaka 1 tag dönmelidir.</p>
      <p>Not: Bu alandaki her div'i ayrı birer nesne olarak düşünebiliriz.</p>
      <p>React sayesinde mobil programlama yaklaşımına uzaktan bir bakış atıyoruz.</p>
      <p>JSX {1+1} Fark ettiniz mi? MVC de html içerisine c# kodlarını nasıl yazıyorduk :D</p>
    </div>
    </>
  );
}

export default App;
