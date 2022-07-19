import "./App.css";

function App() {
  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Scrim Shop</h1>
        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register-input"
        />
        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register-input"
        />
        <input
          type="text"
          name="category"
          className="register-input"
          placeholder="Categoria"
        />
        <button>Cadastrar</button>
      </div>
    </div>
  );
}

export default App;
