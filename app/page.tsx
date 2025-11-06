

export default function Home() {
  return (
    <main className="w-[600px] h-44 flex flex-col mb-10 items-center">
      <h1 className="text-3xl mb-10">LinkCut</h1>
      <div className="bg-[#e1e1e1] w-full h-14">
        <form>
          <input type="text" className="w-[575px]" name="urlInput" id="urlInput" required/>
          <button type="submit"></button>
        </form>
      </div>
    </main>
  );
}
