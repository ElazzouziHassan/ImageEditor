import { DeleteConfirmation } from "@/components/shared/DeleteConfirmation";
import EditedImage from "@/components/shared/EditedImage";
import Header from "@/components/shared/Header";
import { Button } from "@/components/ui/button";
import { getImageById } from "@/lib/actions/image.actions";
import { auth } from "@clerk/nextjs/server";
import Link from "next/link";


const ImageDetails = async ({ params: { id } }: SearchParamProps) => {
  
  const { userId } = auth();
  const image = await getImageById(id);

  return(
    <>
      <Header title={image.title} />
      <section className="mt-5 flex flex-wrap gap-4">
        <div className="p-14-medium md:p-16-medium flex gap-2">
          <p className="text-dark-600">Edit Type :</p>
          <p className=" capitalize text-purple-400">
            {image.editingType}
          </p>
        </div>
        {image.prompt && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2 ">
              <p className="text-dark-600">Prompt:</p>
              <p className=" capitalize text-purple-400">{image.prompt}</p>
            </div>
          </>
        )}
        {image.color && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Color:</p>
              <p className=" capitalize text-purple-400">{image.color}</p>
            </div>
          </>
        )}
        {image.aspectRatio && (
          <>
            <p className="hidden text-dark-400/50 md:block">&#x25CF;</p>
            <div className="p-14-medium md:p-16-medium flex gap-2">
              <p className="text-dark-600">Aspect Ratio:</p>
              <p className=" capitalize text-purple-400">{image.aspectRatio}</p>
            </div>
          </>
        )}
      </section>
      <section className="mt-10 border-t border-dark-400/15">
        <div className="editing-grid">
          <div className="flex flex-col gap-4">
            <h3 className="h3-bold text-dark-600">Original Image</h3>
            {/* uncomment this when you fix the res.cloudinary config errors */}
            {/* <Image
              width={getImageSize(image.editingType, image, "width")}
              height={getImageSize(image.editingType, image, "height")}
              src={image.secureURL}
              alt="image"
              className="editing-original_image"
            /> */}
          </div>
          <EditedImage
            image={image}
            type={image.editingType}
            title={image.title}
            isEditing={false}
            editConfig={image.config}
            hasDownload={true}
          />
        </div>
        {userId === image.author.clerkId && (
          <div className="mt-4 space-y-4">
            <Button asChild type="button" className="submit-button capitalize">
              <Link href={`/editing/${image._id}/update`}>
                Update Image
              </Link>
            </Button>

            <DeleteConfirmation imageId={image._id} />
          </div>
        )}
      </section>
      
    </>
  )
}

export default ImageDetails;