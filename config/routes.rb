Rails.application.routes.draw do
  devise_for :users,
           path: "api",
           default: { format: "json" },
           path_names: {
             sign_in: "login",
             sign_out: "logout",
             registration: "signup",
           },
           controllers: {
             sessions: "api/sessions",
             registrations: "api/registrations",
           }

  namespace :api, default: { format: "json" } do
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
