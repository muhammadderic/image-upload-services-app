"use client"

import UploadSingleImage from "@/components/uploadthing/UploadSingleImage"

const UploadThing = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-semibold">Upload Images</h1>

        <UploadSingleImage />
      </div>
    </>
  )
}

export default UploadThing
