"use client"

import { UploadDropzone } from "@/utils/uploadthing";
import Image from "next/image";
import { useState } from "react"

const UploadSingleImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = () => {
    setImageUrl("");
  }

  return (
    <section className="w-full h-full max-w-4xl mx-auto my-8 p-4 border-2 border-gray-300 rounded-lg shadow sm:p-6 md:p-8 ">
      <div className="flex flex-col justify-between items-center">
        <h2 className="my-4 font-bold">
          Upload Single Image
        </h2>

        {imageUrl && (
          <button
            onClick={handleImageChange}
            className="bg-slate-800 text-white py-2 px-4 rounded"
          >
            Change
          </button>
        )}
      </div>

      {imageUrl ? (
        <Image
          src={imageUrl}
          alt="some image"
          width={200}
          height={200}
          className="mx-auto my-8"
        />
      ) : (
        <UploadDropzone
          className=" h-36 ut-label:text-lg ut-allowed-content:ut-uploading:text-red-300 cursor-pointer border-dashed border-2 border-gray-500 hover:bg-slate-100"
          endpoint="imageUploader"
          onClientUploadComplete={(res) => {
            // Do something with the response
            console.log("Files: ", res);
            alert("Upload Completed");
            setImageUrl(res[0].url);
          }}

          onUploadError={(error: Error) => {
            // Do something with the error.
            alert(`ERROR! ${error.message}`);
          }}
        />
      )}
    </section>
  )
}

export default UploadSingleImage
