

export default function Home() {
  return (
    <main className="w-[600px] h-44 flex flex-col mb-10 items-center">
      <h1 className="text-3xl mb-10">LinkCut</h1>
      <div className="bg-[#e6e6e6] w-full h-14 rounded-2xl">
        <form>
          <input type="text" className="w-[575px] h-14 outline-0 pl-4 pr-4" name="urlInput" id="urlInput" placeholder="Link" required/>
          <button type="submit"></button>
        </form>
      </div>
    </main>
  );
}
