"use client"

import { dataUrl, debounce, download, getImageSize } from '@/lib/utils'
import { CldImage, getCldImageUrl } from 'next-cloudinary'
import { PlaceholderValue } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import React from 'react'

const EditedImage = ({ image, type, title, editConfig, isEditing, setIsEditing, hasDownload = false }: EditedImageProps) => {
 
  const downloadHandler = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    download(getCldImageUrl({
      width: image?.width,
      height: image?.height,
      src: image?.publicId,
      ...editConfig
    }), title)
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex-between">
        <h3 className="h3-bold text-dark-600">
          The Edited Image
        </h3>

        {hasDownload && (
          <button 
            className="download-btn" 
            onClick={downloadHandler}
          >
            <Image 
              src="/assets/icons/download.svg"
              alt="Download"
              width={24}
              height={24}
              className="pb-[6px]"
            />
          </button>
        )}
      </div>

      {image?.publicId && editConfig ? (
        <div className="relative">
          <CldImage 
            width={getImageSize(type, image, "width")}
            height={getImageSize(type, image, "height")}
            src={image?.publicId}
            alt={image.title}
            sizes={"(max-width: 767px) 100vw, 50vw"}
            placeholder={dataUrl as PlaceholderValue}
            className="transformed-image"
            onLoad={() => {
              setIsEditing && setIsEditing(false);
            }}
            onError={() => {
              debounce(() => {
                setIsEditing && setIsEditing(false);
              }, 8000)()
            }}
            {...editConfig}
          />

          {isEditing && (
            <div className="transforming-loader">
              <Image 
                src="/assets/icons/spinner.svg"
                width={50}
                height={50}
                alt="spinner"
              />
              <p className="text-white/80">Please wait...</p>
            </div>
          )}
        </div>
      ): (
        <div className="transformed-placeholder">
          The Edited Image
        </div>
      )}
    </div>
  )
}

export default EditedImage