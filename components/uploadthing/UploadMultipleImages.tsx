"use client"

import { UploadDropzone } from "@/utils/uploadthing";
import { XCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const UploadMultipleImages = () => {
  const [imageUrls, setImageUrls] = useState([]);

  function handleRemoveImage(indexToRemove: number) {
    const updatedImages = imageUrls.filter(
      (item, index) => index !== indexToRemove
    );
    setImageUrls(updatedImages);
  }

  return (
    <section className="w-full h-full max-w-4xl mx-auto my-8 p-4 border-2 border-gray-300 rounded-lg shadow sm:p-6 md:p-8">
      <div className="flex items-center justify-center my-4 font-bold">
        <h2>Multiple Image Upload</h2>
      </div>

      {imageUrls.length >= 1 ? (
        <div className="flex items-center w-full gap-4 flex-wrap p-4">
          {imageUrls.map((item, i) => {
            return (
              <div key={i} className="relative m-3">
                <button
                  onClick={() => handleRemoveImage(i)}
                  className="absolute -right-3 -top-3 bg-slate-800 rounded-full"
                >
                  <XCircle className="text-red-400" />
                </button>
                <Image
                  src={item}
                  alt="some image"
                  width={100}
                  height={100}
                  className="mx-auto my-8"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <UploadDropzone
          className="h-36 cursor-pointer border-2 border-red-500"
          endpoint="multipleImageUploader"
          onClientUploadComplete={(res: any) => {
            // Do something with the response
            console.log("Files: ", res);
            const urls = res?.map((file: any) => file.url);
            setImageUrls(urls);
            alert("Upload Completed");
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

export default UploadMultipleImages
