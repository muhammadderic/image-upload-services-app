"use client"

import { UploadCloud, X } from "lucide-react";
import { CldImage, CldUploadWidget, CloudinaryUploadWidgetInfo } from "next-cloudinary";
import { useState } from "react";

const UploadSingleImage = () => {
  const [imageUrl, setImageUrl] = useState("");

  // Type guard function
  function isCloudinaryUploadWidgetInfo(result: any): result is CloudinaryUploadWidgetInfo {
    return result && typeof result === "object" && "info" in result;
  }

  return (
    <section className="flex flex-col w-full max-w-4xl mx-auto my-8 p-4 border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-700">
      <div className="flex items-center justify-center mb-4 font-bold">
        <h2 className="my-2">
          Upload Single Image
        </h2>
      </div>

      {
        imageUrl ? (
          <div className="flex relative">
            <div className="mx-auto relative">
              <CldImage
                width="300"
                height="300"
                src={imageUrl}
                alt="Description of my image"
                className="rounded-md"
              />
              <button
                onClick={() => setImageUrl("")}
                className="absolute -top-2 -right-2 px-3 py-2 bg-gray-200 rounded-lg text-sm font-medium transition-colors text-white focus-visible:outline-none focus-visible:ring-1 hover:bg-gray-300 dark:bg-red-700 dark:hover:bg-red-600"
              >
                <X />
              </button>
            </div>
          </div>
        ) : (
          <CldUploadWidget
            signatureEndpoint="/api/sign-cloudinary-params"
            uploadPreset="imageUploadPreset"
            onSuccess={(result, { widget }) => {
              // Type guard to check if result has 'info' property
              if (isCloudinaryUploadWidgetInfo(result)) {
                // console.log(result);
                // Explicitly assert the type of result.info.url as string
                setImageUrl(result.info.url as string);
              } else {
                console.error("Unexpected result type:", result);
              }
              widget.close();
            }}
          >
            {({ open }) => {
              return (
                <button onClick={() => open()}>
                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="dropzone-file"
                      className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer hover:bg-gray-50 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-100"
                    >
                      <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <UploadCloud className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" />

                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>

                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                    </label>
                  </div>
                </button>
              )
            }}
          </CldUploadWidget>
        )
      }
    </section>
  )
}

export default UploadSingleImage