class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  def after_sign_in_path_for(resource)
    if session[:location_string].present?
      session_location = session[:location_string]
      root_path
    else
      super
    end
  end
end
