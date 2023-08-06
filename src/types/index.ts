export type planTypes = "starter" | "student" | "professional" | "master"

export type routePathTypes = 
"about" |
"blogs" |
"faqs"  |
""  |
"login" |
"create-account" |
"select-plan" |
"pricing" |
"assets-templates" |
"bootcamps" |
"bts" |
"consultancy" |
"cv-profile" |
"dashboard" |
"general-forums" |
"master-classes" |
"online-training" |
"professional-forums" |
"service-ad" |
"profile" |
"chat" |
"settings" |
"subscriptions" |
"logout" |
"hire-talent" |
"reset-password" | 
"forgot-password" |
"verify-email" |
"new-password" |
"privacy-policy"

export interface routesInterface<T> {
    path: T
    element: JSX.Element;
    plan: planTypes
  }

  
export type routeTypes = routesInterface<routePathTypes>[];


export interface RouteGuardInterface {
    plan: planTypes;
}

export interface ItitleLinks<T, L>{
  title: T,
  link: L
}
  

export interface apiInterface<T>{
items: T
next_page: number
page: number
previous_page: number
size: number
total: number
}

export interface apiInterfaceV2<T>{
data: T
message: string
}

export interface contentApiItemInterface{
  content: string
  date_created: string
  id: string
  is_deleted: boolean
  last_updated: string
  meta_description: string
  photos: {
    filename: string
    id: string
    is_public: boolean
    url: string
  }[]
  subtitle: string
  title: string
}

export interface authDetailsInterface{
  access_token?: string
  data?: {
    biz_partner_id?: string
    first_name?: string
    last_name?: string
    oragnization_id?: string
  }
  refresh_token?: string
}