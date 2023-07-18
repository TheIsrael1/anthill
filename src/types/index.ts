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
  


  