

export default function Home() {
  return (
    <main className="w-[40%]">
      <h1>LinkCut</h1>
      <form>
        <input type="text" name="urlInput" id="urlInput" required/>
        <button type="submit"></button>
      </form>
    </main>
  );
}
