import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  imageUploader: f({ image: { maxFileSize: "4MB" } })
    .onUploadComplete(
      async ({ metadata, file }) => {
        console.log("file url: ", file.url);
        return { "uploaded by": "muco" }
      }
    ),
  multipleImageUploader: f({ image: { maxFileSize: "8MB", maxFileCount: 4 } })
    .onUploadComplete(
      async ({ metadata, file }) => {
        console.log("file url: ", file.url);
        return { "uploaded by": "muco" }
      }
    )
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;