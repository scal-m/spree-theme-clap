# Uncomment this if you reference any of your controllers in activate
# require_dependency 'application'

class ThemeClapExtension < Spree::Extension
  version "1.0"
  description "Describe your extension here"
  url "http://yourwebsite.com/clap"

  # Please use clap/config/routes.rb instead for extension routes.

  # def self.require_gems(config)
  #   config.gem "gemname-goes-here", :version => '1.2.3'
  # end
  
  def activate

    # make your helper avaliable in all views
    # Spree::BaseController.class_eval do
    #   helper YourHelper
    # end
    
 		Spree::Config.set(:site_name => 'Classical Playback')
   
  end
end
