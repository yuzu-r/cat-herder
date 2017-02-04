class StaticPagesController < ApplicationController
  def about
    render component: 'About'
  end
end