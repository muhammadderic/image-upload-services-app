"use client"

import { useState } from "react";
import { EdgeStoreSingleImage } from "./EdgeStoreSingleImage";
import { useEdgeStore } from "@/utils/edgestore";

const UploadSingleImage = () => {
  const [file, setFile] = useState<File>();
  const [progress, setProgress] = useState(0);
  const [imageUrl, setImageUrl] = useState("");

  const { edgestore } = useEdgeStore();

  return (
    <section className="flex flex-col justify-center w-full max-w-4xl mx-auto my-8 p-4 bg-white border-2 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-70">
      <div className="mx-auto my-4 font-bold">
        <h2>Single Image Upload</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <EdgeStoreSingleImage
          width={200}
          height={200}
          value={file}
          onChange={(file) => {
            setFile(file);
          }}
          className="text-black-900"
        />

        {progress > 0 && progress < 100 && (
          <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 my-4">
            <div
              className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full"
              style={{ width: `${progress}%` }}
            >
              {" "}
              {progress}%
            </div>
          </div>
        )}

        {progress > 0 && file && imageUrl ? (
          ""
        ) : (
          <button
            className="my-2 py-2.5 px-5 bg-red-500 rounded-sm hover:bg-red-400 text-white"
            onClick={async () => {
              if (file) {
                const res = await edgestore.publicFiles.upload({
                  file,
                  onProgressChange: (progress) => {
                    // you can use this to show a progress bar
                    // console.log(progress);
                    setProgress(progress);
                  },
                });
                // you can run some server action or api here
                // to add the necessary data to your database
                console.log(res);
                setImageUrl(res?.url);
              }
            }}
          >
            Upload
          </button>
        )}
      </div>
    </section>
  )
}

export default UploadSingleImage
