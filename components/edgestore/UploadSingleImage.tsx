"use client"

import { useState } from "react";
import { EdgeStoreSingleImage } from "./EdgeStoreSingleImage";
import { useEdgeStore } from "@/utils/edgestore";

const UploadSingleImage = () => {
  const [file, setFile] = useState<File | undefined>();
  const { edgestore } = useEdgeStore();

  const handleUpload = async () => {
    if (file) {
      try {
        await edgestore.publicFiles.upload({
          file,
        });
      } catch (error) {
        console.error("Upload failed:", error);
      } finally {
        setFile(undefined); // Clear the file after upload
      }
    }
  };

  return (
    <section className="flex flex-col justify-center w-full max-w-4xl mx-auto my-8 p-4 bg-white border-2 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-70">
      <div className="mx-auto my-4 font-bold">
        <h2>Single Image Upload</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        {/* File input component */}
        <EdgeStoreSingleImage
          width={200}
          height={200}
          value={file}
          onChange={(file) => {
            setFile(file);
          }}
          className="text-black-900"
        />

        {/* Upload button (only shown when a file is selected) */}
        {file && (
          <button
            className="my-2 py-2.5 px-5 bg-red-500 rounded-sm hover:bg-red-400 text-white disabled:opacity-50 disabled:cursor-not-allowed"
            onClick={handleUpload}
          >
            Upload
          </button>
        )}
      </div>
    </section>
  );
};

export default UploadSingleImage
