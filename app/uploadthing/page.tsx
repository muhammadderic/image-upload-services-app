"use client"

import UploadMultipleImages from "@/components/edgestore/UploadMultipleImage"
import UploadSingleImage from "@/components/uploadthing/UploadSingleImage"
import { useState } from "react";

const UploadThing = () => {
  const [showSingleUploadPage, setShowSingleUploadPage] = useState('single');

  const handleShowPage = (status: string) => {
    setShowSingleUploadPage(status)
  }

  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className="mb-4 text-2xl font-semibold">Upload Images</h1>

        <div className="flex gap-2">
          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white"
            onClick={() => handleShowPage('single')}
          >
            Single
          </button>

          <button
            className="px-4 py-2 rounded-md bg-blue-500 text-white"
            onClick={() => handleShowPage('multiple')}
          >
            Multiple
          </button>
        </div>
      </div>
      {
        showSingleUploadPage === 'single' ? <UploadSingleImage /> : <UploadMultipleImages />
      }
    </>
  )
}

export default UploadThing
