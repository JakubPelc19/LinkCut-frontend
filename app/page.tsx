'use server'

import { revalidatePath } from "next/cache";
import ResultComponent from "./ResultComponent";
import SendButton from "./SendButton";
import { ServiceResponse } from "./Interfaces"


let result = "";
let isSuccessful = false;


function validateUrl(url: string) {
  const urlRgxPattern = /^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b(?:[-a-zA-Z0-9()@:%_\+.~#?&\/=]*)$/;

  const isUrlValid = urlRgxPattern.test(url);

  if (isUrlValid)
    return true;
  else
    return false;

}

async function getShortLinkRequest(url: string) {
  let response: ServiceResponse | null;
  try {
    const request = await fetch("http://localhost:5167/api/LinkCutter/createshortlink", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },

    body: JSON.stringify({
      link: url
    })
  });
  
  response = await request.json();

  }
  catch {
    response = null;
  }
  
  

  return response;
}

export default async function Home() {
  
  

  async function urlFormAction(formData: FormData) {
    "use server"
    
    const url = formData.get("urlInput")?.toString() as string;

    const isUrlValid = validateUrl(url)

    if (!isUrlValid) {
      result = "Url is not valid";
      
      isSuccessful = false;
      
      revalidatePath("/");

      return;
    }

    const response: ServiceResponse | null = await getShortLinkRequest(url);

    if (response === null) {
      result = "Something went wrong, please try it again later!";
      
      isSuccessful = false;
      
      revalidatePath("/");
      
      return;
    }


    if (!response.isSuccessful) {
      result = response.message;
      
      isSuccessful = false;
      
      revalidatePath("/");

      return;
    }

    result = response.data?.originalLinkId!;
    isSuccessful = true;

    revalidatePath("/");

  }

  return (
    <main className="sm:w-[600px] w-[325px] h-56 flex flex-col mb-10 items-center">
      <h1 className="text-3xl mb-10">LinkCut</h1>
        <form action={urlFormAction} className="bg-[#e6e6e6] w-full h-14 rounded-2xl flex items-center pl-4 pr-2">
          <input type="text" className="sm:w-[575px] w-[295px] h-14 outline-0" name="urlInput" id="urlInput" placeholder="Link" required/>
          <SendButton/>
        </form>

        <ResultComponent result={result} isSuccessful={isSuccessful}/>
    </main>
  );
}
