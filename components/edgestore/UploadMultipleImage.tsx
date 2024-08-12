"use client"

import { useState } from "react";
import { EdgeStoreMultipleImages, FileState } from "./EdgeStoreMultipleImages";
import { useEdgeStore } from "@/utils/edgestore";

const UploadMultipleImages = () => {
  const [fileStates, setFileStates] = useState<FileState[]>([]);
  const [imageUrls, setImageUrls] = useState<String[]>([]);

  const { edgestore } = useEdgeStore();

  function updateFileProgress(key: string, progress: FileState["progress"]) {
    setFileStates((fileStates) => {
      const newFileStates = structuredClone(fileStates);
      const fileState = newFileStates.find(
        (fileState) => fileState.key === key
      );
      if (fileState) {
        fileState.progress = progress;
      }
      return newFileStates;
    });
  }

  return (
    <section className="flex flex-col justify-center w-full max-w-4xl mx-auto my-8 p-4 bg-white border-2 border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:border-gray-70">
      <div className="mx-auto my-4 font-bold">
        <h2>Multiple Image Upload</h2>
      </div>

      <div className="flex flex-col justify-center items-center">
        <EdgeStoreMultipleImages
          value={fileStates}
          onChange={(files) => {
            setFileStates(files);
          }}
          onFilesAdded={async (addedFiles) => {
            setFileStates([...fileStates, ...addedFiles]);
            await Promise.all(
              addedFiles.map(async (addedFileState) => {
                try {
                  const res = await edgestore.publicFiles.upload({
                    file: addedFileState.file,
                    onProgressChange: async (progress: number) => {
                      updateFileProgress(addedFileState.key, progress);
                      if (progress === 100) {
                        // wait 1 second to set it to complete
                        // so that the user can see the progress bar at 100%
                        await new Promise((resolve) =>
                          setTimeout(resolve, 1000)
                        );
                        updateFileProgress(addedFileState.key, "COMPLETE");
                      }
                    },
                  });
                  console.log(res);
                  setImageUrls((prevImages) => [...prevImages, res.url]);
                } catch (err) {
                  updateFileProgress(addedFileState.key, "ERROR");
                }
              })
            );
          }}
        />
      </div>
    </section>
  )
}

export default UploadMultipleImages