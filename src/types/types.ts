export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};

export type ProfileType = {
  userId: number;
  lookingForAJob?: boolean;
  lookingForAJobDescription?: string;
  fullName?: string;
  contacts?: ContactsType;
  photos?: PhotosType;
};

export type PhotosType = {
  small?: string | null;
  large?: string | null;
};

export type ContactsType = {
  facebook?: string;
  website?: null;
  vk?: string;
  twitter?: string;
  instagram?: string;
  youtube?: null;
  github?: string;
  mainLink?: null;
};
export type UserType = {
    id: number;
    name: string;
    status: string;
    photos: PhotosType;
    followed: boolean;
    
  };