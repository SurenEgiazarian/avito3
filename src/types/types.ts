export type AdProps = {
  title: string;
  description: string;
  price: number;
  id: number;
  images: Images[];
  user_id: number;
  created_on: string;
  user: User;
};

export type Images = {
  id: number;
  ad_id: number;
  url: string;
};

export type User = {
  id: number;
  name: string;
  surname?: string;
  email: string;
  city: string;
  avatar: string;
  sells_from: string;
  phone: string;
  role?: string;
};

export type ApiError = {
  message: string;
  description: string;
  statusCode: string | number;
  response: {
    data: {
      detail: [
        {
          loc: string[];
          msg: string;
          type: string;
        }
      ];
      message?: string;
      details?: string;
    };
  };
};

export type SignInError = {
  response: {
    data: {
      detail: string;
    };
  };
};

export type Review = {
  id: number;
  text: string;
  created_on: string;
  author: User;
};

export type NewReview = {
  text: string;
};

export type NewUser = {
  password: string;
  role: string;
  email: string;
  name: string;
  surname: string;
  phone: string;
  city: string;
  id?: number;
};

export type SignInProps = {
  email: string;
  password: string;
};

export type RefreshToken = {
  access_token: string;
  refresh_token: string;
};

export type EditUser = {
  name?: string;
  surname?: string;
  city?: string;
  phone?: string;
};

export type NewAdProps = {
  title: string;
  description: string;
  price: number;
  data: FormData | null;
};

export type EditAdProps = {
  title: string;
  description: string;
  price: number;
};

export type NewAdPropsNoPhoto = {
  title: string;
  description: string;
  price: number;
};
