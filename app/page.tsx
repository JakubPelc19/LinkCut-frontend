import ResultComponent from "./ResultComponent";
import SendButton from "./SendButton";



export default function Home() {
  
  async function urlFormAction(formData: FormData) {
    'use server'

    const url = formData.get("urlInput")?.toString();


  }

  return (
    <main className="w-[600px] h-56 flex flex-col mb-10 items-center">
      <h1 className="text-3xl mb-10">LinkCut</h1>
        <form action={urlFormAction} className="bg-[#e6e6e6] w-full h-14 rounded-2xl flex pl-4 pr-2">
          <input type="text" className="w-[575px] h-14 outline-0" name="urlInput" id="urlInput" placeholder="Link" required/>
          <SendButton/>
        </form>

        <ResultComponent/>
    </main>
  );
}
