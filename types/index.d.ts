/* eslint-disable no-unused-vars */

// USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// IMAGE PARAMS
declare type AddImageParams = {
  image: {
    title: string;
    publicId: string;
    editingType: string;
    width: number;
    height: number;
    config: any;
    secureURL: string;
    editingURL: string;
    aspectRatio: string | undefined;
    prompt: string | undefined;
    color: string | undefined;
  };
  userId: string;
  path: string;
};

declare type UpdateImageParams = {
  image: {
    _id: string;
    title: string;
    publicId: string;
    editingType: string;
    width: number;
    height: number;
    config: any;
    secureURL: string;
    editingURL: string;
    aspectRatio: string | undefined;
    prompt: string | undefined;
    color: string | undefined;
  };
  userId: string;
  path: string;
};

declare type Edits = {
  restore?: boolean;
  fillBackground?: boolean;
  remove?: {
    prompt: string;
    removeShadow?: boolean;
    multiple?: boolean;
  };
  recolor?: {
    prompt?: string;
    to: string;
    multiple?: boolean;
  };
  removeBackground?: boolean;
};

// EDITING PARAMS
declare type CheckoutEditingParams = {
  plan: string;
  coins: number;
  amount: number;
  buyerId: string;
};

declare type CreateEditingParams = {
  stripeId: string;
  amount: number;
  coins: number;
  plan: string;
  buyerId: string;
  createdAt: Date;
};

declare type EditingTypeKey =
  | "restore"
  | "fill"
  | "remove"
  | "recolor"
  | "removeBackground";

// URL QUERY PARAMS
declare type FormUrlQueryParams = {
  searchParams: string;
  key: string;
  value: string | number | null;
};

declare type UrlQueryParams = {
  params: string;
  key: string;
  value: string | null;
};

declare type RemoveUrlQueryParams = {
  searchParams: string;
  keysToRemove: string[];
};

declare type SearchParamProps = {
  params: { id: string; type: EditingTypeKey };
  searchParams: { [key: string]: string | string[] | undefined };
};

declare type EditingFormProps = {
  action: "Add" | "Update";
  userId: string;
  type: EditingTypeKey;
  creditBalance: number;
  data?: IImage | null;
  config?: Edits | null;
};

declare type EditedImageProps = {
  image: any;
  type: string;
  title: string;
  editConfig: Edits | null;
  isEditing: boolean;
  hasDownload?: boolean;
  setIsEditing?: React.Dispatch<React.SetStateAction<boolean>>;
};