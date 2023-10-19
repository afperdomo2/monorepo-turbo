function App() {
  return (
    <button
      onClick={async () => {
        const response = await fetch('/api');
        const data = await response.json();
        console.info('data:', data);
      }}
    >
      Click me
    </button>
  );
}

export default App;
